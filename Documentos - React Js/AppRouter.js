import React from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext); 
    // nos trae si el usuario esta autenticado o no
    // y se lo manda a los dos tipos de componentes que tiene
    // la aplicacion para evaluarlos y renderizar el correcto

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
