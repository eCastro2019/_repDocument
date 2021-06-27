import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"
import { startLoading, finishLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                    )
                
                dispatch( finishLoading() );
            })
            .catch( e => {
                const codeError = e.code

                dispatch( finishLoading() );

                if ( codeError === 'auth/invalid-email' ) {
                    Swal.fire('Error', 'La dirección de correo electrónico está mal formateada.', 'error');
                } else if ( codeError === 'auth/user-not-found' ) {
                    Swal.fire('Error', 'No hay registro de usuario correspondiente a este identificador. Es posible que el usuario haya sido eliminado', 'error');
                } else if ( codeError === 'auth/wrong-password' ) {
                    Swal.fire('Error', 'La contraseña no es válida o el usuario no tiene contraseña.', 'error');
                }
            })
    }
}

export const starRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        dispatch( startLoading() );

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName)
                )
                dispatch( finishLoading() );

            })
            .catch( e => {
                dispatch( finishLoading() );
            })
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({user}) => {
            dispatch(
                login( user.uid, user.displayName)
            )
        } )
    }
}

export const login = (uid, displayName) => ({
    type: types.login, 
    payload: {
        uid, 
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        localStorage.removeItem('lastPath');
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})