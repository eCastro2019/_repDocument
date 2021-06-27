import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { KXY5wj_redux4, KXY5wj_redux5 } from '../../actions/TE6IEk';
import { Archivo } from '../BD/Archivo';
import { BaseData } from '../BD/BaseData';
import { Panel } from '../HQ/Panel';

export const Nomenclatura = (rest) => {

    const dispatch = useDispatch();
    const { ruta } = useSelector( state => state.rutas );      
    dispatch( KXY5wj_redux5( null ) ); 
    dispatch( KXY5wj_redux4( null ) );  

    ( ! ruta ) &&
        localStorage.setItem('lastPath', rest.location.pathname);           

    return (
        <>
            <Panel />

            <br /><br />
            <div className='animate__animated animate__backInUp' style={{ backgroundColor: 'white', color: 'black' }}>        
                <center>
                    <h1>Nomenclatura de Proyectos</h1>
                </center>
                            
                <div>
                    <center>
                        <BaseData />                   
                        <br />  
                    </center> 

                    <center>
                        <Archivo />
                        <br />
                    </center> 
                </div>
            </div>
        </>
    )
}
