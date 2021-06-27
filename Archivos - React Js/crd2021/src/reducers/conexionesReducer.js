import { types } from "../types/types";

const initialState = {
    activeEmpresa           : '',
    activePc                : '',
    listEmpresas            : [],
    listComputadoras        : [],
    listComputadorasCat     : [],
    accion                  : null,
    accion2                 : null,
    accion3                 : null,
    accion4                 : '',
    accion5                 : null,
    accion6                 : null,
}

export const conexionesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        
        case types.activeEmpresa:
            return {
                ...state,
                activeEmpresa: action.payload
            }

        case types.activePc:
            return {
                ...state,
                activePc: action.payload
            }

        case types.listEmpresas:
            return {
                ...state,
                listEmpresas: action.payload
            }

        case types.listComputadoras:
            return {
                ...state,
                listComputadoras: action.payload
            }

        case types.listComputadorasCat:
            return {
                ...state,
                listComputadorasCat: action.payload
            }

        case types.accion2:
            return {
                ...state,
                accion2: action.payload
            }

        case types.accion3:
            return {
                ...state,
                accion3: action.payload
            }

        case types.accion4:
            return {
                ...state,
                accion4: action.payload
            }
        
        case types.accion5:
            return {
                ...state,
                accion5: action.payload
            }

        case types.accion6:
            return {
                ...state,
                accion6: action.payload
            }

        case types.accion:
            return {
                ...state,
                accion: action.payload
            }

        case types.purgarConexiones:
            return {
                activeEmpresa           : '',
                activePc                : '',
                listEmpresas            : [],
                listComputadoras        : [],
                listComputadorasCat     : [],
                accion                  : null,
                accion2                 : null,
                accion3                 : null,
                accion4                 : '',
                accion5                 : null,
                accion6                 : null,
            }

        default:
            return state;        
    }
}
