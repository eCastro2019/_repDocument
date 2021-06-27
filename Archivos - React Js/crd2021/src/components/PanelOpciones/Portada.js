import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { KXY5wj_redux4, KXY5wj_redux5 } from '../../actions/TE6IEk';
import { Panel } from '../HQ/Panel';

export const Portada = (rest) => {
    
    const dispatch = useDispatch();
    const { ruta } = useSelector( state => state.rutas );    
    dispatch( KXY5wj_redux5( null ) ); 
    dispatch( KXY5wj_redux4( null ) );
    
    ( ! ruta ) &&
        localStorage.setItem('lastPath', rest.location.pathname);    

    return (
        <>
            <center>

                <Panel />
                    
                <h5>Aquí estamos para ti! Tu aliado en el trabajo remoto, control y soporte remoto. No importa si estás tú solo,
                o una empresa pequeña o una gran multinacional. Tenemos la solución adecuada para ti.</h5>

                <br />

                <div className='row'>
                    <div className='col Pcard'>
                        <div className="card animate__animated animate__fadeInTopLeft" style={{width: '18rem'}}>
                            <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/teamviewer.png' className="card-img-top" alt='TeamViewer' height='180px'></img>                            
                        </div>
                    </div>
                    <div className='col Pcard'>
                        <div className="card animate__animated animate__fadeInTopLeft" style={{width: '18rem'}}>
                                <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/anydesk.jpg' className="card-img-top" alt='AnyDesk' height='180px'></img>                                
                        </div>
                    </div>
                    <div className='col Pcard'>
                        <div className="card animate__animated animate__fadeInTopLeft" style={{width: '18rem'}}>
                            <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/supremo.png' className="card-img-top" alt='Supremo' height='180px'></img>                            
                        </div>
                    </div>
                </div>
                <br />
            </center>
        </>
    )
}
