import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { DKWI3z, Dp6xiE } from '../../actions/TE6IEk';
import { useForm } from '../../hooks/useForm';
import { IaIcAV } from '../uxRar5/IaIcAV';
import { BXjm1q } from '../uxRar5/BXjm1q';
import { HTzhrv } from '../uxRar5/HTzhrv';
import { agregarRuta } from '../../actions/ruta';
import Swal from 'sweetalert2';
import { WjOGwZ } from '../uxRar5/WjOGwZ';

export const MclhRy = (rest) => {
    const dispatch = useDispatch();
    const { ruta } = useSelector( state => state.rutas );
    const { name } = useSelector( state => state.auth );
    const { BFUstM } = useSelector( state => state.woqtLQ );
    const { qq3uMN } = useSelector( state => state.woqtLQ );
    const { YAoD8A } = useSelector( state => state.woqtLQ );
    const { LIXrRU } = useSelector( state => state.woqtLQ );    
    
    const [ formValues, handleInputChange, reset ] = useForm( );    
    
    const { pin = '' } = formValues;

    ( ! ruta )
        ? localStorage.setItem('lastPath', rest.location.pathname)      
        : localStorage.setItem('lastPath', '/MclhRy')       

    const tsjUiL = (e) => {
        e.preventDefault(); 
        let accConv = 'ag';

        if (pin.length > 0) {
            Swal.fire({
                title: 'Conectando al Servidor...',   
                text: 'Si tarda mucho, revise su conexion de internet...',
                showConfirmButton:false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }            
            });
            dispatch( DKWI3z( pin, qq3uMN, accConv ) );
            reset();   
            Swal.close();
        }        
    };

    return (
        
        <div className='animate__animated animate__pulse div_ocultar'>
            
            {
                 (YAoD8A !== true && ! BFUstM && ! LIXrRU) &&
                    <div className="card card2 animate__animated animate__pulse" style={{ backgroundImage: 'url(https://res.cloudinary.com/df2ahfbvy/image/upload/v1622149600/perfil/xfzj2gswuhgjnh2hxf8w.jpg)', backgroundSize: 'cover', color: 'white' }}>                        

                        <h1 className='animate__animated animate__rotateIn'>                                                                                                                           
                            <b><h1 className='parpadea'><b>AGENDA <br /> PERSONAL</b></h1> { moment().format('Y') } </b> 
                            <div className='movil'>
                                <br />
                                <p style={{ fontSize: '2em', cursor: 'pointer' }} className='fas fa-exchange-alt' onClick={ () => { dispatch( agregarRuta( '' ) ) } }></p>
                            </div>                            
                        </h1>

                        {
                            ( YAoD8A != true && YAoD8A != null ) &&
                                <h1><i className="fas fa-exclamation-triangle"></i><br /><b>{ YAoD8A }</b></h1>
                        }

                        <center>
                            <form onSubmit={ tsjUiL }> 
                                <input type='password' className='inputKey' name='pin' required value={ pin } onChange={ handleInputChange } autoFocus placeholder='PIN' />
                            </form>                   
                        </center>
                        
                        <div style={{ paddingTop:'20px' }}></div>

                        <button onClick={ tsjUiL } className='bt-button' type="button"><b><i style={{ paddingRight: '10px' }} className="fas fa-user"></i>{ name }</b></button>

                    </div>
            }

            {
                ( BFUstM && ! LIXrRU ) &&
                    <HTzhrv />
            }

            {
                ( YAoD8A === true && ! LIXrRU ) &&
                    <div className='animate__animated animate__pulse'>
                        <div className='pantallaPC'>
                            <IaIcAV />
                        </div>

                        <div className='pantallaMovil'>
                            <BXjm1q />
                        </div> 
                    </div>
            }

            { 
                ( LIXrRU ) &&
                    <div className='div_LIXrRU'>
                        <WjOGwZ />
                    </div>
            }
            
        </div>
    )
}