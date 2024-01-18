//crearemos la conexion con la base de datos json desde react query

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTask, getTask, putTask } from "../api/rest";

const TaskList = () => {
	const query = useQueryClient();

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ["task"],
		queryFn: getTask,
	});

	const deleteT = useMutation({
		mutationFn: deleteTask,
		onSuccess: () => query.invalidateQueries({ queryKey: ["task"] }),
	});

	const updateT = useMutation({
		mutationFn: putTask,
		onSuccess: () => query.invalidateQueries({ queryKey: ["task"] }),
	});

	if (isLoading) return <h1>Loading....</h1>;
	else if (isError) return <h1>Error {error.message}</h1>;

	return (
		<div className="container w-75">
			{data.map((task) => (
				<div key={task.id}>
					<div className="card card-body text-primary text-center m-1">
						<h4 className="text-primary">Name: {task.name}</h4>
						<p className="text-dark">Description: {task.descriptions}</p>
						{task.completed ? (
							<button
								className="btn btn-success w-25 m-auto"
								onClick={() => deleteT.mutate(task.id)}
							>
								Finished
							</button>
						) : null}

						<label htmlFor="checkbox" className="d-flex justify-content-center">
							Completed
						</label>
						<input
							type="checkbox"
							checked={task.completed}
							name="checkbox"
							className="w-100"
							onChange={(e) =>
								updateT.mutate({ ...task, completed: e.target.checked })
							}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default TaskList;
