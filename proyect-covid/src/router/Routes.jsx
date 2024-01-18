import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import PageCountries from "../pages/PageCountries";
import PageDeaths from "../pages/PageDeaths";
import PageFormCountries from "../pages/PageFormCountries";
import PageLineChart from "../pages/PageLineChart";
import PageWorldWide from "../pages/PageWorldWide";

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Layout/>,
        children: [
            { 
                path: '/countries',
                element: <PageCountries/>
            },
            { 
                path: '/deaths',
                element: <PageDeaths/>
            },
            { 
                path: '/form',
                element: <PageFormCountries/>
            },
            {
                path: '/line',
                element: <PageLineChart/>
            },
            { 
                path: '/world',
                element: <PageWorldWide/>
            }
        ]
    }
])