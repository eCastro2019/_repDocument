import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// PASOS PARA EL USO DE CONTEXT

1. // Definir cómo luce, qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
} 
  // Observacion: ' recordar usar este signo ? para decirle que un campo '
  // ' sera opcional para que lo ingrese el usuario '

2. // Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}
  // Estos dos ultimos campos seran opcionales y como no se que tipo
  // de datos seran los definimos como undefine


3. // Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void; // dato que no regresa nada void    
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}


4. // Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

5. // Componente proveedor del estado ( quien enviara la informacion )
export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch] = useReducer( authReducer, authInitialState );
    // donde authReducer es donde estan las funciones de cada accion definida
    // el authInitialState es como quiero que inicie cada estado inicial antes definido
    // dispath es la funcion para disparar una accion al autReducer 
    // authState es donde se guardara el stado anterior de dicha acion + el payload

    // aqui definimos todo los dispatch que tendra el context

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    // donde el type es el nombre de la accion que quiero que se ejecute definida en el autReducer
    // y el payload la informacion que estoy mandando al reducer para que la guarde en el state mediante el autReducer

    return ( 
        // lo que me va a retornar el context a cualquier otro lugar 
        // de la aplicacion
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )

}
