import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../api/restapi";
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

const LineChart = () => {
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

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["key"],
		queryFn: getHistory,
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
				{data && <Line data={midata} options={misoptions} />}
				<div>
					<h3 className="text-center">Cases in the Wordl</h3>
					<p className="text-justify h6 p-5">
						La pandemia de COVID-19 ha afectado a todo el mundo. Según la Universidad Johns Hopkins, hasta el 27 de diciembre de 2023, se han registrado más de 556 millones de casos de COVID-19 en todo el mundo 1. La cantidad de casos confirmados ha aumentado significativamente desde que comenzó la pandemia en 2019.
					</p>
				</div>
			</div>
		</>
	);
};

export default LineChart;
