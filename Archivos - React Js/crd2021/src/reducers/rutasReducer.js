import { types } from "../types/types";

const initialState = {
    ruta: null
}

export const rutasReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.rutValue:                       
            return {            
                ...state,
                ruta: action.payload
            }
        default:
            return state;        
    }
}
