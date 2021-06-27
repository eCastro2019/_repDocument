import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { HQScreen } from "../components/HQ/HQScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import moment from 'moment';
import { cargarNomenclatura, cargarNomenclatura2 } from "../actions/nomenclatura";
import { cargarConexionesCat, cargarEmpresas } from "../actions/conexiones";
import { DKWI3z, KXY5wj } from "../actions/TE6IEk";
import { accionDos } from "../actions/acciones";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);   

    setInterval(() => {
        const diaNoche = moment().format('h'); // hora                
        const horario = moment().format('a'); // am/pm 

        // 24 Horas

            if (diaNoche == 0 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('madrugada') );
            }   
            
            if (diaNoche >= 1 && diaNoche < 6 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('madrugada') );
            } 

            if (diaNoche >= 6 && diaNoche <= 11 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('dia') );
            } 

            if (diaNoche == 12 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('tarde') );
            } 

            if (diaNoche >= 13 && diaNoche < 18 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('tarde') );
            } 

            if (diaNoche >= 18 && diaNoche <= 23 && horario != 'am' && horario != 'pm') {
                dispatch( accionDos('noche') );
            }    
        
        // 12 Horas

            if (diaNoche == 12 && horario === 'am') {
                dispatch( accionDos('madrugada') );
            }   
            
            if (diaNoche >= 1 && diaNoche < 6 && horario === 'am') {
                dispatch( accionDos('madrugada') );
            } 

            if (diaNoche >= 6 && diaNoche <= 11 && horario === 'am') {
                dispatch( accionDos('dia') );
            }             

            if (diaNoche >= 1 && diaNoche < 6 && horario === 'pm') {
                dispatch( accionDos('tarde') );
            } 

            if (diaNoche >= 6 && diaNoche <= 11 && horario === 'pm') {
                dispatch( accionDos('noche') );
            } 
            
            if (diaNoche == 12 && horario === 'pm') {
                dispatch( accionDos('tarde') );
            } 
    }, 5000);

    useEffect(() => {                              
        firebase.auth().onAuthStateChanged( async(user) => {
            if ( user?.uid ) {
                dispatch( cargarNomenclatura(user.displayName) );           
                dispatch( cargarNomenclatura2(user.displayName) ); 
                dispatch( cargarEmpresas() );
                dispatch( cargarConexionesCat() );                
                dispatch( KXY5wj( user.displayName, user.uid ) );
            }         
               
        });
    }, [])

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );                

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <div className="padre">
                <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/hzk6C.gif' alt='cargando'></img>                                             
            </div> 
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />


                    <PrivateRoute
                        exact 
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ HQScreen }
                    />


                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

