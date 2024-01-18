import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/restapi";

const TableCountries = () => {
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

	return (
		<div className="container">
			<table className="table mt-5">
				<thead>
					<tr>
						<th scope="col">Wordl</th>
						<th scope="col">Cases</th>
						<th scope="col">Deaths</th>
						<th scope="col">Recovered</th>
					</tr>
				</thead>
				<tbody>
					{data && (
						<tr key={data}>
							<th scope="row">{data.country}</th>
							<td>{data.cases}</td>
							<td>{data.deaths}</td>
							<td>{data.recovered}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableCountries;
