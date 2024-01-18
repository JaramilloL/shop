import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../api/restapi";
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

const DeathsChart = () => {
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

	//traemos la data desde react query
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["key"],
		queryFn: getHistory,
	});

	if (isLoading) return <h1>Loading...</h1>;
	else if (isError) return <h1>{error.message}</h1>;

	//creamos la data de la grafica de la
	const midata = {
		labels: Object.keys(data.deaths), //extraemos la data.cases
		datasets: [
			// Cada una de las líneas del gráfico
			{
				label: "Deaths",
				data: Object.values(data.deaths),
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
		<>
			<div className="col-8 m-auto">
				<h3 className="text-center">Deaths in the Wordl</h3>
				{data && <Line data={midata} options={misoptions} />}

				<p className="text-justify h6 p-5">
				La pandemia de COVID-19 ha afectado a todo el mundo. Según la
				Organización Mundial de la Salud (OMS), la enfermedad ha causado la
				muerte de casi 15 millones de personas en todo el mundo desde el inicio
				de la pandemia hasta el 31 de diciembre de 2021 12. Los cálculos toman
				en cuenta tanto las muertes directas por COVID-19 como los efectos
				secundarios. La OMS estima que 14,9 millones de muertes pueden asociarse
				a la pandemia, un total que incluye los 6,2 millones de decesos por
				COVID-19 notificados oficialmente a la OMS por sus 194 países miembros.
				El resto corresponde a muertes causadas por COVID-19, pero que no fueron
				notificadas como tales, así como aquellas causadas por otras
				enfermedades que no pudieron ser atendidas debido a la sobrecarga que
				sufrieron los sistemas sanitarios en la etapa aguda de la pandemia 1.
			</p>
			</div>
		</>
	);
};

export default DeathsChart;
