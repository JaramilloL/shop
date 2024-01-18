import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTask } from "../api/rest";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid'

const Tasks = () => {
	//creamos el id
	const CreateId = uuidv4();
	//crearemos el post de las tareas
	const query = useQueryClient();

	const postT = useMutation({
		mutationFn: postTask,
		onSuccess: () => query.invalidateQueries({ queryKey: ["task"] }),
	});

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		postT.mutate({
			...data,
			id: CreateId,
			completed: false
		});
		reset();
	});

	return (
		<form className="w-50 m-auto" onSubmit={onSubmit}>
			<h4 className="text-center">Tasks</h4>
			<div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					id="floatingInput"
					placeholder="name@example.com"
					name="name"
					{...register("name", {
						required: {
							value: true,
							message: "Please enter a name of task...",
						},
					})}
				/>
				<label htmlFor="floatingInput" className="text-primary">
					Task
				</label>
			</div>
			<div className="form-floating">
				<input
					type="text"
					className="form-control"
					id="floatingPassword"
					placeholder="Descriptions"
					name="descriptions"
					{...register("descriptions", {
						required: {
							value: true,
							message: "Please enter a descriptions of task...",
						},
					})}
				/>
				<label htmlFor="floatingPassword" className="text-primary">
					Description
				</label>
			</div>

			<button className="btn btn-primary mt-2 text-center">Add</button>

			<p className="text-danger">
				{errors.name?.message || errors.descriptions?.message}
			</p>
		</form>
	);
};

export default Tasks;
