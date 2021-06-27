import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Dp6xiE, KXY5wj_redux5, RUtPg7 } from '../../actions/TE6IEk';
import { useState } from 'react';

export const HTzhrv = () => {
    const dispatch = useDispatch();
    const { pnU9GN } = useSelector( state => state.woqtLQ );    
    let { a2_1, a2_2, a2_3, a2_4, a2_5, a2_6, a2_7 } = pnU9GN;  
    const { uid } = useSelector( state => state.auth );
    
    let [state, setstate] = useState({
        a2_1: a2_1,
        a2_2: a2_2,
        a2_3: a2_3,
        a2_4: a2_4,
        a2_5: a2_5,
        a2_6: a2_6,
        a2_7: a2_7
    })

    const YcmT8q = () => {
        dispatch( RUtPg7( state, uid ) );
    };

    const Vfncmx = (e) => {
        let a1 = e.target.id;

        if (a1 === 'd_dropbox') { setstate( { ...state, a2_1: false } ) } else if (a1 === 'm_dropbox') { setstate( { ...state, a2_1: true } ) };
        if (a1 === 'd_githup') { setstate( { ...state, a2_2: false } ) } else if (a1 === 'm_githup') { setstate( { ...state, a2_2: true } ) };
        if (a1 === 'd_mega') { setstate( { ...state, a2_3: false } ) } else if (a1 === 'm_mega') { setstate( { ...state, a2_3: true } ) };
        if (a1 === 'd_cloudinary') { setstate( { ...state, a2_4: false } ) } else if (a1 === 'm_cloudinary') { setstate( { ...state, a2_4: true } ) };
        if (a1 === 'd_firebase') { setstate( { ...state, a2_5: false } ) } else if (a1 === 'm_firebase') { setstate( { ...state, a2_5: true } ) };
        if (a1 === 'd_heroku') { setstate( { ...state, a2_6: false } ) } else if (a1 === 'm_heroku') { setstate( { ...state, a2_6: true } ) };
        if (a1 === 'd_drive') { setstate( { ...state, a2_7: false } ) } else if (a1 === 'm_drive') { setstate( { ...state, a2_7: true } ) };
    };

    return (
        <>            
            <center>
                <table className='table container animate__animated animate__zoomInDown'>
                    <thead className='thead_IaIcAV'>                                                       
                        <tr className='fondo_IaIcAV'>
                            <th colSpan='3'> 
                                <center>
                                    <h1><b>AGENDA PERSONAL</b> { moment().format('Y') }</h1>  
                                    <h2>CONFIGURACION DE ACCESOS DIRECTOS</h2> 

                                    <h2>
                                        <div className='row'>
                                            <div className='col'>
                                                <i onClick={ YcmT8q } title='Guardar Cambios' className="fas fa-save"></i>
                                            </div>
                                            <div className='col'>
                                                <i onClick={ ()=> { dispatch( Dp6xiE( null ) ); dispatch( KXY5wj_redux5( true ) ); } } title='Cancelar Cambios' className="pdk2 fas fa-window-close"></i>
                                            </div>
                                        </div>
                                    </h2> 
                                </center>

                                <hr />

                                <div className='row'>                                    
                                    <div className='col'>
                                        <a href='https://www.dropbox.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622950/perfil/hbrdzosdyb9awbq5eamw.png' className='img_IaIcAv2' alt='Dropbox' /></a>
                                    </div>
                                
                                    <div className='col'>
                                        <a href='https://github.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622883/perfil/citodtgvl4wdj7yft3ap.png' className='img_IaIcAv2' alt='GitHup' /></a>
                                    </div>                                    
                                    
                                    <div className='col'>
                                        <a href='https://mega.nz/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623517/perfil/n3kibw04nuovnbuuxhiu.png' className='img_IaIcAv2' alt='Mega' /></a>     
                                    </div>
                                    <div className='col'>
                                        <a href='https://cloudinary.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623622/perfil/h0uvrdoxszzsap5nwpgd.png' className='img_IaIcAv2' alt='Cloudinary' /></a>     
                                    </div>
                                    <div className='col'>
                                        <a href='https://console.firebase.google.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623700/perfil/bjgysc7w8w4evtikzszx.png' className='img_IaIcAv2' alt='Firebase' /></a>     
                                    </div>
                                    <div className='col'>
                                        <a href='https://www.heroku.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618624028/perfil/ovpiyzytqfnksnivzugh.png' className='img_IaIcAv2' alt='Heroku' /></a>     
                                    </div>
                                    <div className='col'>
                                        <a href='https://accounts.google.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618682479/perfil/wygzcseybd15s8dw6rpy.webp' className='img_IaIcAv2' alt='Google Drive' /></a>
                                    </div>
                                </div>                                                                                                                                                                                                                                
                            </th>
                        </tr>
                    </thead>

                    <tbody className='tbody_HTzhrv'>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622950/perfil/hbrdzosdyb9awbq5eamw.png' className='img_IaIcAv2' alt='Dropbox' /></td>
                            <td>Acceso directo de cuenta de Dropbox?  </td>
                            <td>    
                                {
                                    ( state.a2_1 )
                                    ? <h3><label onClick={ Vfncmx } id='d_dropbox' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_dropbox' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                }  
                                                                                         
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622883/perfil/citodtgvl4wdj7yft3ap.png' className='img_IaIcAv2' alt='GitHup' /></td>
                            <td>Acceso directo de cuenta de GitHup?  </td>
                            <td>
                                {
                                    ( state.a2_2 )
                                    ? <h3><label onClick={ Vfncmx } id='d_githup' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_githup' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623517/perfil/n3kibw04nuovnbuuxhiu.png' className='img_IaIcAv2' alt='Mega' /></td>
                            <td>Acceso directo de cuenta de Mega?  </td>
                            <td>
                                {
                                    ( state.a2_3 )
                                    ? <h3><label onClick={ Vfncmx } id='d_mega' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_mega' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623622/perfil/h0uvrdoxszzsap5nwpgd.png' className='img_IaIcAv2' alt='Cloudinary' /></td>
                            <td>Acceso director de cuenta de Cloudinary?  </td>
                            <td>
                                {
                                    ( state.a2_4 )
                                    ? <h3><label onClick={ Vfncmx } id='d_cloudinary' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_cloudinary' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623700/perfil/bjgysc7w8w4evtikzszx.png' className='img_IaIcAv2' alt='Firebase' /></td>
                            <td>Acceso directo de cuenta de Firebase?  </td>
                            <td>
                                {
                                    ( state.a2_5 )
                                    ? <h3><label onClick={ Vfncmx } id='d_firebase' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_firebase' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618624028/perfil/ovpiyzytqfnksnivzugh.png' className='img_IaIcAv2' alt='Heroku' /></td>
                            <td>Acceso directo de cuenta de Heroku?  </td>
                            <td>
                                {
                                    ( state.a2_6 )
                                    ? <h3><label onClick={ Vfncmx } id='d_heroku' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_heroku' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                        <tr>
                            <td><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618682479/perfil/wygzcseybd15s8dw6rpy.webp' className='img_IaIcAv2' alt='Google Drive' /></td>
                            <td>Acceso directo de cuenta de Google Drive?  </td>
                            <td>
                                {
                                    ( state.a2_7 )
                                    ? <h3><label onClick={ Vfncmx } id='d_drive' className="form-check-label fas fa-check-circle no" htmlFor="flexSwitchCheckChecked">Desmarcar</label></h3>
                                    : <h3><label onClick={ Vfncmx } id='m_drive' className="form-check-label far fa-check-circle yes" htmlFor="flexSwitchCheckChecked">Marcar</label></h3>
                                } 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>   
        </>
    )
}
