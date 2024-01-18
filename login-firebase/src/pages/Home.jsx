//?usaremos el contetxo para obtener los datos del usuario

import { useContext } from "react"
import { contextUser } from "../context/user/UserContext"

const Home = () => {
    const {user, password, login} = useContext(contextUser)
    
  return (
    <div>
      home
      {user}
      {password}
      <button onClick={login}>login</button>
    </div>
  )
}

export default Home
