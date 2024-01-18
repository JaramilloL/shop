//? Aqui vamos a trabaja el estdo global de la auenticacion del usuario
import { createContext } from "react";
import PropTypes from "prop-types";

export const contextAuth = createContext();

export const Auth = ({ children }) => {
    const user = {
        username: "",
        password: ""
    }
	//*creamos el contexto para compartir la informacion con los demas componentes
	return(
        <contextAuth.Provider value={{ user }}>
            {children}
        </contextAuth.Provider>
        );
};

Auth.propTypes = {
	children: PropTypes.object,
};
