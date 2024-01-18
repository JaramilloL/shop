import Countries from "./components/Countries";
import DeathsChart from "./components/DeathsChart";
import FormCountries from "./components/FormCountries";
import LineChart from "./components/LineChart";
import WorldWide from "./components/WorldWide";

const App = () => {
	return (
		<div className="container m-auto">
			<div className="row">
				<LineChart />
				<hr />
				<DeathsChart />
				<hr />
				<Countries/>
				<hr />
				<WorldWide/>
				<hr />
				<FormCountries/>
			</div>
		</div>
	);
};

export default App;
