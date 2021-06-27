import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accionRedux, accionRedux2, accionRedux3, accionRedux5, computadoraActive, empresaActive } from '../../actions/conexiones';
import { Catalogo_Computadora } from './Catalogo_Computadora';
import { Catalogo_Empresa } from './Catalogo_Empresa';

export const Catalogo = () => {

    const dispatch = useDispatch();
    const { accion2 } = useSelector(state => state.conexiones );
    const { accion3 } = useSelector(state => state.conexiones );

    return (
        <>
            <center>
                <span onClick={ () => { dispatch( accionRedux( null ) ); dispatch( accionRedux2( null ) );  dispatch( accionRedux3( null ) ); dispatch( computadoraActive( '' ) ); dispatch( empresaActive( '' ) ); dispatch( accionRedux5( null ) ) } } style={{ cursor:'pointer', border: 'none'}}> <i style={{ fontSize:'1.3em' }} className="fas fa-redo-alt"></i> </span><br /><br />
            </center>
            <div style={{ textAlign: 'center', fontSize: '16px' }}>                

                <div className='row'>
                    <div className='col' style={{ paddingTop: '10px', backgroundColor: 'white' }}>
                        {
                            ( ! accion2 ) &&
                            <>
                                <div onClick={ () => { dispatch( accionRedux2( 'active' ) ) } } style={{ cursor: 'pointer' }}>
                                    <img style={{ width: '200px' , height: '150px' }} src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/mantEmpresas.png' alt='mantEmpresas' />
                                    <h3>Mantenimiento de Empresas / Crear nueva empresa</h3>
                                </div>                                
                            </>
                        }
                        
                        {
                            ( accion2 ) &&
                                <Catalogo_Empresa />
                        }                                                                                                                   

                    </div>
                    <div onClick={ () => { dispatch( accionRedux3( 'active' ) ) } } className='col' style={{ paddingTop: '10px', backgroundColor: 'white' }}>
                        {
                            ( ! accion3 ) &&
                            <>
                                <div style={{ cursor: 'pointer' }}>
                                    <img style={{ width: '200px' , height: '150px' }} src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/mantComputadoras.jpg' alt='mantComputadora' />
                                    <h3>Mantenimiento de Computadoras / nueva computadora</h3>
                                </div>
                            </>
                        }        

                        {
                            ( accion3 ) &&
                                <Catalogo_Computadora />                            
                        }                                                                                                            
                        
                    </div>
                </div>
            </div>
            <div style={{ paddingTop:'150px' }}></div>
        </>
    )
}
