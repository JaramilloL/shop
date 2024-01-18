import { useForm } from "react-hook-form";
import { useRegister } from "../store/useAuth";

const Register = () => {
    //llamamos la funcion que contiene el registro desde firebase
    const signIn = useRegister(state => state.signIn);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signIn(data.email, data.password);
    console.log(signIn(data.email, data.password))
    reset();
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "Please enter username",
            },
          })}
        />
        {errors?.username?.message}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          {...register("email", {
            required: {
              value: true,
              message: "Please enter email",
            },
          })}
        />
        {errors?.email?.message}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          {...register("password", {
            required: {
              value: true,
              message: "Please enter password",
            },
          })}
        />
        {errors?.password?.message}

        <input type="submit" value="submite" />
      </form>
    </div>
  );
};

export default Register;
