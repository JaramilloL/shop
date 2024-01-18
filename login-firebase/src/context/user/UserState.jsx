//? Aqui vamos a trabajar el estado global de la aplicacion es decir la logica del estdo inicial y la declaracion del reducer
import { useReducer } from "react"
import UserReducer from "./UserReducer"
import { contextUser } from './UserContext'
import PropTypes from 'prop-types';
import { ISLOGIN } from "../types";

const UserState = ( { children } ) => {
    const initialState = {
        user: '',
        password: ''
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    //?voy a crear temporalmente una funcion para llamar el dispatch

    const login = ()=>{
        dispatch({
            type: ISLOGIN
        })
    }
    

  return (
  <contextUser.Provider value={{
        user: state.user,
        password: state.password,
        login
  }}>
    { children }
  </contextUser.Provider>
  )
}

export default UserState

UserState.propTypes = {
    children: PropTypes.object
}