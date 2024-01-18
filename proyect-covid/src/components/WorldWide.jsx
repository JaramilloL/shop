import { useQuery } from '@tanstack/react-query'
import { getWorldwide } from '../api/restapi'

//importamos los elementos de chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const WorldWide = () => {
    //registramos los elementos de la grafica
    ChartJS.register(ArcElement, Tooltip, Legend);

    //extraemos la data de la api
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['key'],
        queryFn: getWorldwide
    })

    if(isLoading) return <div className="d-flex justify-content-center text-primary">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
    else if(isError) return (
        <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..." />
                <strong className="me-auto">Error</strong>
                <small>Error</small>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
            <div className="toast-body">{error.message}</div>
        </div>
    );

    //creamos la grafica y le pasamos los datos de data
    const options = {
        responsive : true,
        maintainAspectRatio: false,
    };
    
    const midata = {
        labels: ['Cases', 'Deaths', 'Recovered'],
        datasets: [
            {
                label: 'Cases of covid',
                data: [data.cases, data.deaths, data.recovered],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

  return (
    <div>
      {
        data &&  <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                     <Pie data={midata} options={options}/>                         
                    </div>
                </div> 
      }
    </div>
  )
}

export default WorldWide
