import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <PageLogin/>
    },
    {
        path: '/register',
        element: <PageRegister/>
    },
    {
        path: '/*',
        element: <Navigate to={'/'}/>
    }
])