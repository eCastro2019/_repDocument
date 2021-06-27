import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListEmpresa } from '../compEmpresas/ListEmpresa';
import { ActivEmpresa } from '../compEmpresas/ActivEmpresa';
import { accionRedux } from '../../actions/conexiones';
import { Catalogo } from '../compEmpresas/Catalogo';
import { Panel } from '../HQ/Panel';
import { KXY5wj_redux4, KXY5wj_redux5 } from '../../actions/TE6IEk';

export const Empresas = (rest) => {

    const dispatch = useDispatch();
    const { ruta } = useSelector( state => state.rutas );
    const { activeEmpresa } = useSelector( state => state.conexiones );
    const { listEmpresas } = useSelector( state => state.conexiones );
    const { accion } = useSelector( state => state.conexiones );
    dispatch( KXY5wj_redux5( null ) ); 
    dispatch( KXY5wj_redux4( null ) );
    
    ( ! ruta ) &&
        localStorage.setItem('lastPath', rest.location.pathname);     

    return (
        <>
            {
                ( ! accion ) &&
                <center>

                    <Panel />

                    <h1>Conexiones Remotas</h1>                
                                        
                    {
                        ( ! activeEmpresa ) &&
                        <div style={{ backgroundColor: 'white' }}>
                            <i onClick={ () => { dispatch( accionRedux( 'catalogo' ) ) } } style={{ cursor: 'pointer' }} className="far fa-plus-square"> <b>Catalogo</b></i>

                            <div className='row'>  
                                {
                                    listEmpresas.map( list => (
                                        <div className='col animate__animated animate__backInUp' key={ list.id } style={{ paddingTop: '10px' }}>
                                            <ListEmpresa 
                                                key={ list.id }
                                                { ...list }
                                            />
                                        </div>                                
                                    ))
                                }
                            </div>
                        </div>
                    }

                    {
                        ( activeEmpresa ) &&
                            <ActivEmpresa />
                    }          

                    <br />

                </center>  
            }         

            {
                ( accion ) &&
                <Catalogo />
            }   
        </>
    )
}
