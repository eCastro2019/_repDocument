import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from "react-select";

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const  [ formValues, handleInputChange ] = useForm({
        email: '', 
        password: ''
    });

    const { email, password } = formValues;    
    
    const handleLogin = (e) => {
        e.preventDefault();        

        dispatch( startLoginEmailPassword( email, password ) );
    }    

    return (
        <>
            <center>
                <h2> AUTENTICACION <br /> DE <br /> USUARIOS </h2>
                <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/login.png' alt='login' width='120px' />
            </center>            

            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >            
                <input 
                    type="text"
                    style={{ height: 30 }}
                    placeholder="Correo"
                    name="email"
                    autoComplete="off"
                    className="BMLh80UEm__input"
                    value={ email }
                    onChange={ handleInputChange }
                />


                <input 
                    type="password"
                    style={{ height: 30 }}
                    placeholder="Contraseña"
                    name="password"
                    className="BMLh80UEm__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <br /><br />                     

                <button
                    style={{ height: 35, fontSize: '18px' }}
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Iniciar Sesión
                </button>      
                
                {/* <Link
                    to ="/auth/register"
                    className="link"
                >
                    Crear una nueva cuenta
                </Link> */}

            </form>
        </>
    )
}
