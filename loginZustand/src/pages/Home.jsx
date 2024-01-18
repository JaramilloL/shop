import { Navigate } from "react-router-dom";
import { userAuth } from "../store/useAuth"

const Home = () => {
    const { isAuthenticated, logout } =  userAuth();

  return (
    <div>
        {
            isAuthenticated ? (
                <>
                    <p>Home</p>
                    <input type="button" value="logout" onClick={ logout }/>
                </>
            ):
            (
                <Navigate to={'/login'}/>
            )
        }
    </div>
  )
}

export default Home