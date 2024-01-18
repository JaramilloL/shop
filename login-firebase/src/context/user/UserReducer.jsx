import { ISLOGIN, NOTLOGIN } from "../types";

//? Aqui vamos a trabajar la logica de la decicion del reducer

const UserReducer = ( state, action ) => {
    const { payload, type } = action;

    switch(type){
        case ISLOGIN:
            return {
                ...state,
                initialState: payload
            }
        case NOTLOGIN:
            return state
    }
}

export default UserReducer
