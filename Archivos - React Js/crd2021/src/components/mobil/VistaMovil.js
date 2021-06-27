import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { accionRedux, accionRedux2, accionRedux3, accionRedux4, accionRedux5, accionRedux6, computadoraActive, deleteEmpresa, deletePc, empresaActive } from '../../actions/conexiones';

export const VistaMovil = () => {

    const dispatch = useDispatch();
    const { accion4 } = useSelector( state => state.conexiones );
    const { accion6 } = useSelector( state => state.conexiones );
    const { listComputadorasCat } = useSelector( state => state.conexiones );
    let abc = '';

    listComputadorasCat.forEach(element => {
        if (element.id_THgDam === accion4.id ) {
            abc = 'si'
        }
    });

    const copyConexion = () =>  {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Copiado',
            showConfirmButton: false,
            timer: 500
            })
    };

    const eliminarPc = (e) => {     
        let idBusPc = '';
        dispatch( deletePc( e.target.getAttribute('id'), idBusPc ) );
    };

    const editarPc = (e) => {
        let editPcActive = {};

        listComputadorasCat.forEach(element => {
            if (element.id === e.target.getAttribute('id')) {
                editPcActive = {
                    ...element
                }
            }
        });

        dispatch( computadoraActive( editPcActive ) );
        dispatch( accionRedux( 'catalogo' ) );
        dispatch( accionRedux3( 'active' ) );
        dispatch( accionRedux5( 'mobil' ) )
    };

    return (
        <div className='container'>
            <center>
                <h1><i onClick={ () => { dispatch( accionRedux4( null ) ); dispatch( accionRedux6( null ) ) } } style={{ cursor: 'pointer' }} className="fas fa-sync"></i></h1>

                <hr />
                <h1> 
                    <b>{ accion4.name }</b> <br />
                    <i onClick={ () => { dispatch( accionRedux( 'catalogo' ) ); dispatch( accionRedux2( 'active' ) ); dispatch( accionRedux5( 'mobil' ) ); dispatch( empresaActive( accion4 ) ) } } className="far fa-edit" style={{ cursor: 'pointer' }}></i>
                    {
                        (! abc) &&
                            <i onDoubleClick={ () => { dispatch( deleteEmpresa( accion4.id )); dispatch(accionRedux6( null )) } } style={{ cursor: 'pointer', paddingLeft: '15px' }} className="far fa-trash-alt"></i>                    
                    }
                </h1>                
                <img src={ accion4.logo } alt={ accion4.name } style={ { width: '100%', height: '120px' } }/>

                <p>{ accion4.direccion }</p>
                <h4><b>Cuentas de Dropbox</b></h4>
                <p style={ { textAlign:'center', paddingLeft: '10px' } }> { accion4.dropbox } </p>

                <hr />
                {
                    (accion6) && <h1><i onClick={ () => { dispatch( accionRedux6( null ) ) } } style={{ cursor: 'pointer' }} className="fas fa-undo-alt"></i></h1>
                }

                <h4><b>Computadoras</b></h4>
                <h2 className="fas fa-desktop"></h2> <br />

                {
                    listComputadorasCat.map( list => {
                        return(
                            ( list.id_THgDam === accion4.id ) &&                                
                                <div key={ list.id }>
                                    {
                                        ( ! accion6 ) &&
                                            <div onClick={() => { dispatch(accionRedux6(list.pcname)) }} key={ list.id } className="card bg-dark" style={{ width: '100%', cursor:'pointer', paddingTop: '5px' }}>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item"> { list.pcname }</li>
                                                </ul>
                                            </div>
                                    }    
                                </div>                                                                                                                            
                        )
                    })
                }

                {
                    ( accion6 ) &&
                    <>
                        <h1> { accion6 } </h1>
                        {
                            listComputadorasCat.map( list2 => {
                                return(
                                    ( list2.pcname === accion6 && list2.id_THgDam === accion4.id ) &&  
                                        <div key={ list2.id }>
                                            <h3>
                                                <i id={list2.id} onClick={ editarPc } className="far fa-edit" style={{ cursor: 'pointer', paddingLeft: '10px' }}></i> 
                                                <i id={list2.id} onDoubleClick={ eliminarPc } style={{ cursor: 'pointer', paddingLeft: '10px' }} className="far fa-trash-alt"></i>
                                            </h3>

                                            {
                                                ( list2.team_id ) &&
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/teamviewer.png' alt='teamviewer' width='100%' height='100px'></img>
                                                    </div>
                                                    <div className='col-6' style={{ paddingTop: '20px' }}>
                                                        <span>{ list2.team_id }</span> <br />
                                                        <CopyToClipboard text={ list2.team_id }>
                                                            <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                        </CopyToClipboard> <br />                                           
                                                        { list2.team_pass }
                                                    </div>
                                                </div>
                                            }

                                            <br />

                                            {
                                                ( list2.any_id ) &&
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/anydesk.jpg' alt='anydesk' width='100%' height='100px'></img>
                                                    </div>
                                                    <div className='col-6' style={{ paddingTop: '20px' }}>
                                                        <span>{ list2.any_id }</span> <br />
                                                        <CopyToClipboard text={ list2.any_id }>
                                                            <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                        </CopyToClipboard> <br />                                           
                                                        { list2.any_pass }
                                                    </div>
                                                </div>
                                            }

                                            <br />

                                            {
                                                ( list2.sup_id ) &&
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/supremo.png' alt='supremo' width='100%' height='100px'></img>
                                                    </div>
                                                    <div className='col-6' style={{ paddingTop: '20px' }}>
                                                        <span>{ list2.sup_id }</span> <br />
                                                        <CopyToClipboard text={ list2.sup_id }>
                                                            <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                        </CopyToClipboard> <br />                                           
                                                        { list2.sup_pass }
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                )
                            })
                        }
                    </>
                } 

                <br />        
            </center>
        </div>
    )
}
