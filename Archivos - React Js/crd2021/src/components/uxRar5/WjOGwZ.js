import React from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { DKWI3z, KXY5wj_redux10, KXY5wj_redux21, bMlXvG } from '../../actions/TE6IEk'
import { useForm } from '../../hooks/useForm';

export const WjOGwZ = () => {

    const dispatch = useDispatch();
    const [state, setstate] = useState(true);
    const { gtnZsC } = useSelector( state => state.woqtLQ ); 

    const [ formValues, handleInputChange ] = useForm( '' );
    const { QP1xCH } = formValues;  

    const copyConexion = () =>  {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Copiado',
            showConfirmButton: false,
            timer: 500
        })
    };

    const KClYe5 = () => {
        if (QP1xCH.length > 0) {
            let UbMJwM = 'UbMJwM';
            let NX0Y00 = [];            
            
            if (state) {
                Swal.fire({ title: 'Conectando al Servidor...', text: 'Si tarda mucho, revise su conexion de internet...', showConfirmButton:false, onBeforeOpen: () => { Swal.showLoading(); } });
                dispatch( KXY5wj_redux10( UbMJwM ) );
                dispatch( DKWI3z( QP1xCH ) ) 
            } else {
                Swal.fire({ title: 'Conectando al Servidor...', text: 'Si tarda mucho, revise su conexion de internet...', showConfirmButton:false, onBeforeOpen: () => { Swal.showLoading(); } });
                NX0Y00.push({
                    B1MieD_d: QP1xCH
                })
                dispatch( bMlXvG( NX0Y00 ) );
                Swal.close();
            }                       

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Campo Vacio!',
            });
        }
    };

    return (
        <>
            <center>
                <h1 onClick={ () => { dispatch( KXY5wj_redux21( false ) ) } } className='fas fa-window-close f4de'></h1>

                <br />

                <div className='row'>
                    <div className='col'>
                        {
                            ( ! state )
                            ? <button onClick={ () => { setstate( true ) } } type="button" className="btn btn1">ENCRIPTAR</button>
                            : <button onClick={ () => { setstate( false ) } } type="button" className="btn btn1">DESENCRIPTAR</button>
                        }                                                
                        <hr />
                        
                        <h4>Activado: <b>{ ( state ) ? 'Encriptar Informacion' : 'Desencriptar Informacion' }</b></h4>
                        <button type="button" onClick={ KClYe5 } className="btn btn1">CONVERTIR</button>

                        <textarea name='QP1xCH' onChange={ handleInputChange } className='textarea_valor container' placeholder='Escribir aqui...' />
                    </div>
                    <div className='col'>
                        <CopyToClipboard text={ gtnZsC }>
                            <button onClick={ copyConexion } type="button" className="btn btn2">COPY</button>
                        </CopyToClipboard> 
                        <hr />

                        <textarea value={ gtnZsC } className='textarea_valor2 container' placeholder='Resultado aqui...' readOnly />
                    </div>
                </div>
            </center>               
        </>
    )
}
