import { useState } from "react";
import axios from "axios";
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

const FormCountries = () => {
	const [value, setValue] = useState("");
	const [dataCountry, setDataCountry] = useState(null);

	const getCountriesSearch = async () => {
		try {
			const response = await axios.get(
				`https://disease.sh/v3/covid-19/countries/${value}`
			);
			const data = response.data;
			console.log(data);
			setDataCountry(data);
		} catch (error) {
			console.error("Error fetching country data:", error.message);
		}
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getCountriesSearch();
	};

	// Verificar si dataCountry existe y tiene los campos esperados
	if (!dataCountry || !dataCountry.cases || !dataCountry.deaths) {
		return (
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="Add country"
							onChange={handleChange}
						/>
						<label htmlFor="floatingInput" className="text-primary text-center">
							Name of Country
						</label>
					</div>
					<input type="submit" value="Submit" className="btn btn-primary"/>
				</form>
				
			</div>
		);
	}

	// Crear la data para la gráfica
	const midata = {
		labels: Object.keys(dataCountry),
		datasets: [
			{
				label: "Data",
				data: Object.values(dataCountry),
				tension: 0.5,
				fill: true,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				pointRadius: 5,
				pointBorderColor: "rgba(255, 99, 132)",
				pointBackgroundColor: "rgba(255, 99, 132)",
			},
		],
	};

	// Configurar opciones de la gráfica
	const misoptions = {
		scales: {
			y: {
				min: 0,
			},
			x: {
				ticks: { color: "rgb(255, 99, 132)" },
                min: 0.5
			},
		},
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Add country"
						onChange={handleChange}
					/>
					<label htmlFor="floatingInput" className="text-primary">
						Name of Country
					</label>
				</div>
				<input type="submit" value="Submit" className="btn btn-primary"/>
			</form>

			{dataCountry && (
				<div className="d-grid p-3 justify-content-center">
					<h4>Country: {dataCountry.country}</h4>
					<img src={dataCountry.countryInfo.flag} alt="" />
					<p>Continent: {dataCountry.continent}</p>
				</div>
			)}
			{dataCountry && <Line data={midata} options={misoptions} />}
		</div>
	);
};

export default FormCountries;
