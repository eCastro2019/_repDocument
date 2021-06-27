import { types } from "../types/types";

const initialState = {
    accion1: null,
    accionDos: null,
}

export const accionReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.accUno:                       
            return {            
                ...state,
                accion1: action.payload
            }
        case types.accionDos:
            return {
                ...state,
                accionDos: action.payload
            }
        default:
            return state;        
    }
}
