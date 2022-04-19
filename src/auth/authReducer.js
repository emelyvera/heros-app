import { types } from "../types/types";


// const state = {
//     name: 'Emely',
//     logged: true
// };



/**
 * authReducer es una funcion no mas 
 * @param {*} state me envio un estado por defecto un objeto vacio
 * @param {*} action es la accion que me modificara mi estado y cuando este me modifique mi satte react me modificara lo que tiene que cambiar 
 */
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}