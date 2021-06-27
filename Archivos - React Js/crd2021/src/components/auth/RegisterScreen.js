import Swal from 'sweetalert2'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'

import { setError, removeError } from '../../actions/ui'
import { starRegisterWithEmailPasswordName } from '../../actions/auth'

import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError, loading } = useSelector( state => state.ui );
    
    const [ formValues, handleInputChange ] = useForm({
        name: '', 
        email: '', 
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( starRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError('El nombre es requerido.') );
            Swal.fire('Error', msgError, 'error');
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Correo invalido.') );
            Swal.fire('Error', msgError, 'error');
            return false;
        } else if ( password !== password2 || password.length < 6 ) {
            dispatch( setError('La contraseña debería tener al menos 6 caracteres o no coincide.') );
            Swal.fire('Error', msgError, 'error');
            return false;
        }

        dispatch( removeError() );
        return true;
    }
    
    return (
        <>
            <h3 className="BMLh80UEm__title">Registrarse</h3>

            <form 
                onSubmit= { handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >
               <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    autoComplete="off"
                    className="BMLh80UEm__input"
                    value={ name }
                    onChange= { handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Correo"
                    name="email"
                    autoComplete="off"
                    className="BMLh80UEm__input"
                    value={ email }
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="BMLh80UEm__input"
                    value={ password }
                    onChange= { handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="BMLh80UEm__input"
                    value={ password2 }
                    onChange= { handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={ loading }
                >
                    Registrarse
                </button>

                
                
                <Link
                    to ="/auth/login"
                    className="link"
                >
                    ¿Ya estás registrado?
                </Link>

            </form>
        </>
    )
}
