import { types } from "../types/types";

const initialState = {
    nomenDB      :       [],
    activeNomen  :       '',
    s2021_01     :       [],
    activeArchi  :       '',
    perfil       :       null
}

export const nomenclaturaReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.listNomen:                       
            return {            
                ...state,
                nomenDB: action.payload
            }
        case types.activeNomen:                       
            return {            
                ...state,
                activeNomen: action.payload
            }       
        case types.s2021_01:                       
            return {            
                ...state,
                s2021_01: action.payload
            }  
        case types.activeArchi:                       
            return {            
                ...state,
                activeArchi: action.payload
            } 
        case types.perfil:                       
            return {            
                ...state,
                perfil: action.payload
            } 
        case types.purgar:
            return {
                nomenDB      :       [],
                activeNomen  :       '',
                s2021_01     :       [],
                activeArchi  :       '',
                perfil       :       null
            }

        default:
            return state;        
    }
}
