import { Outlet } from "react-router-dom"
import Home from "../pages/Home"

const Layout = () => {
  return (
    <div>
    <Home/>
        <Outlet/>
    </div>
  )
}

export default Layout