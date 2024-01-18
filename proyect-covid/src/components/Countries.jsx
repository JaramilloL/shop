import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/restapi";

//importamos la libreria de chart para las graficas
import { Line } from "react-chartjs-2";
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

const Countries = () => {
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

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["key"],
		queryFn: getCountries,
	});

	if (isLoading)
		return (
			<div className="d-flex justify-content-center text-primary">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	else if (isError)
		return (
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

	//creamos la data de la grafica de la
	const midata = {
		labels: Object.keys(data.cases), //extraemos la data.cases
		datasets: [
			// Cada una de las líneas del gráfico
			{
				label: "Cases",
				data: Object.values(data.cases),
				tension: 0.5,
				fill: true,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				pointRadius: 5,
				pointBorderColor: "rgba(255, 99, 132)",
				pointBackgroundColor: "rgba(255, 99, 132)",
			},
			{
				label: "Deaths",
				data: Object.values(data.deaths),
				tension: 0.5,
				fill: true,
				borderColor: "rgb(255, 99, 23)",
				backgroundColor: "rgba(255, 99, 23, 0.5)",
				pointRadius: 5,
				pointBorderColor: "rgba(255, 99, 23)",
				pointBackgroundColor: "rgba(255, 99, 23)",
			},
			{
				label: "Recovered ",
				data: Object.values(data.recovered),
				tension: 0.5,
				fill: true,
				borderColor: "#33FF57",
				backgroundColor: "#17C93C",
				pointRadius: 5,
				pointBorderColor: " #33FF57",
				pointBackgroundColor: "#33FF57",
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
			<div className="col-8 m-auto">
				<h3 className="text-center">Cases and deaths in mexico</h3>

				{data && <Line data={midata} options={misoptions} />}
				<p className="text-justify h5 p-5">
					Hasta el 25 de diciembre de 2023, México ha registrado 7,702,582 casos
					de COVID-19, 334,938 muertes y 6,899,865 recuperaciones.
				</p>
			</div>
		</div>
	);
};

export default Countries;
