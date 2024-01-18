import { useForm } from "react-hook-form"; //importamos la libreria para el manejo de registros de usuarios
import { userAuth } from "../store/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = userAuth()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const navigateUser = useNavigate();

  //creamos una funcion para alamacenar la data del usuario
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    try {
        navigateUser('/')
    } catch (error) {
        console.log(error);
    }
    reset();
  });

  const handleLogin = ()=>{
    const email = getValues('email');
    login(email)
    console.log(email)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          {...register("email", {
            required: {
              value: true,
              message: "Please enter your email",
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
              message: "please enter your password",
            },
          })}
        />
        {errors?.password?.message}

        <a href="#">Forgot a password</a>
        <p>O</p>
        <Link to={'/register'}>Register</Link>

        <input type="submit" value="submite" onClick={handleLogin}/>
      </form>
    </>
  );
};

export default Login;
