import { useEffect, useState } from "react"
import axios from 'axios'

import { Line } from "react-chartjs-2";

//creamos la importacion de la grafica
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";

const Prueba = () => {
    //registramos lo elementos de la grafica
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend,
		Filler
	);

    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const res = response.data;
            setData(res)
            console.log(res)
        }
        getData();
    },[])

    //creamos la data de la grafica de la
	const midata = {
		labels: Object.keys(data), //extraemos la data.cases
		datasets: [
			// Cada una de las líneas del gráfico
			{
				label: "User",
				data: Object.values(data),
				tension: 0.5,
				fill: true,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				pointRadius: 5,
				pointBorderColor: "rgba(255, 99, 132)",
				pointBackgroundColor: "rgba(255, 99, 132)",
			},
			{
				label: "Otra línea",
				data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
			},
		],
	};
	//configuramos las opciones de la grafica
	const misoptions = {
		scales: {
			y: {
				min: 0,
			},
			x: {
				ticks: { color: "rgb(255, 99, 132)" },
			},
		},
	};

  return (
    <div>
      {
        data.map((item)=>(
            <div key={item.id}>
                <p>{item.name}</p>
            </div>
        ))
      }

      <div className="col-8">
				{data && <Line data={midata} options={misoptions} />}
			</div>
    </div>
  )
}

export default Prueba
