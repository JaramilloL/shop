import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error404/>,
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])