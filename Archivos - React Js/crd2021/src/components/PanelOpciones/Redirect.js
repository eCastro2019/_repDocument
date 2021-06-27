import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Redirections = () => {
    const { ruta } = useSelector( state => state.rutas );

    if (localStorage.getItem("lastPath")) { 

        if (localStorage.getItem("lastPath") === '/portada') {            
            return (                
                <Redirect to={ '/portada' } />
            )
        }      

        if (localStorage.getItem("lastPath") === '/empresas') {            
            return (                
                <Redirect to={ '/empresas' } />
            )
        }
        
        if (localStorage.getItem("lastPath") === '/nomenclatura') {            
            return (                
                <Redirect to={ '/nomenclatura' } />
            )
        }       
        
        if (localStorage.getItem("lastPath") === '/MclhRy') { 
            return (                
                <Redirect to={ '/MclhRy' } />
            )
        } 

    } else {

        return (
            <Redirect to={ '/MclhRy' } />
        )

    }
}
