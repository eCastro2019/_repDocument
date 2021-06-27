import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import { accionRedux, accionRedux2, deletePc, computadoraActive, deleteEmpresa, empresaActive, accionRedux3 } from '../../actions/conexiones';

export const ActivEmpresa = () => {

    const dispatch = useDispatch();
    const { activeEmpresa } = useSelector( state => state.conexiones );
    const { listComputadoras } = useSelector( state => state.conexiones );
    const { id, name, logo, direccion, dropbox } = activeEmpresa;

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
        let idBusPc = id;
        dispatch( deletePc( e.target.getAttribute('id'), idBusPc ) );
    };

    const editarPc = (e) => {
        let editPcActive = {};

        listComputadoras.forEach(element => {
            if (element.id === e.target.getAttribute('id')) {
                editPcActive = {
                    ...element
                }
            }
        });

        dispatch( computadoraActive( editPcActive ) );
        dispatch( accionRedux( 'catalogo' ) );
        dispatch( accionRedux3( 'active' ) );
    };

    return (
        <>
            <div className='row' style={{ backgroundColor: 'white' }}>
                <div className='col-5'>
                    <img className='card-img-top' src={ logo } alt={ name } height= '250px'></img>
                </div>
                <div className='col-7'>
                    <h1><b>{ name }</b> 
                        <i onClick={ () => { dispatch( accionRedux( 'catalogo' ) ); dispatch( accionRedux2( 'active' ) ) } } className="far fa-edit" style={{ cursor: 'pointer' }}></i>
                        {
                            ( listComputadoras.length < 1 ) &&
                                <i onDoubleClick={ () => { dispatch( deleteEmpresa( id ) ) } } style={{ cursor: 'pointer', paddingLeft: '15px' }} className="far fa-trash-alt"></i>
                        }                        
                    </h1>
                    <span onClick={ () => { dispatch( empresaActive( '' ) ) } } style={{ cursor:'pointer', border: 'none'}}> <i style={{ fontSize:'1.3em' }} className="fas fa-redo-alt"></i> </span>
                    <h4> { direccion } </h4>
                    <hr />

                    <div style={{ textAlign: 'left' }}>
                        <h5><b>Cuentas de Dropbox</b></h5>
                        <h6> <i className="fas fa-chevron-right"></i> { dropbox } </h6>
                    </div>

                    <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ fontSize: '16px' }}>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Computadoras: </button>
                        </li>
                        {
                            listComputadoras.map(rest => {
                                return(
                                    <li className="nav-item liPc" role="presentation" key={ rest.id } >
                                        <button className="nav-link" id={ rest.id + '-tab' } data-bs-toggle="tab" data-bs-target={ '#' + rest.id } type="button" role="tab" aria-controls={ rest.id } aria-selected="false">{ rest.pcname }</button>                
                                    </li> 
                                )
                            })
                        }                                                                           
                    </ul>

                    <div className="tab-content" id="myTabContent" style={{ fontSize: '14px' }}>
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{ height: '190px', color: 'white' }}> ... </div>
                        {
                            listComputadoras.map(list => {
                                return(
                                    <div key={ list.id } className="tab-pane fade" id={ list.id } role="tabpanel" aria-labelledby={ list.id + '-tab' }>
                                        <br />
                                        
                                        <h3>
                                            <i id={list.id} onClick={ editarPc } className="far fa-edit" style={{ cursor: 'pointer' }}></i> 
                                            <i id={list.id} onDoubleClick={ eliminarPc } style={{ cursor: 'pointer', paddingLeft: '10px' }} className="far fa-trash-alt"></i>
                                        </h3>

                                        <h2> { list.pcname } </h2>

                                        <div className='row'>
                                            {
                                                ( list.team_id ) &&
                                                <div className='col-pc'>                                                    
                                                    <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/teamviewer.png' alt='teamviewer' width='100%' height='100px'></img>
                                                    <br /><br />                                            
                                                    <span style={{ paddingRight: '10px' }}>{ list.team_id }</span>
                                                    <CopyToClipboard text={ list.team_id }>
                                                        <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                    </CopyToClipboard> <br />                                           
                                                    { list.team_pass }
                                                </div>
                                            }
                                            {
                                                ( list.any_id ) &&
                                                <div className='col-pc'>
                                                    <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/anydesk.jpg' alt='anydesk' width='100%' height='100px'></img>
                                                    <br /><br />
                                                    <span style={{ paddingRight: '10px' }}>{ list.any_id }</span>
                                                    <CopyToClipboard text={ list.any_id }>
                                                        <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                    </CopyToClipboard> <br />                                          
                                                    { list.any_pass }
                                                </div>
                                            }
                                            {
                                                ( list.sup_id ) &&
                                                <div className='col-pc'>
                                                    <img src='https://raw.githubusercontent.com/eCastro2019/Fotos-de-Empresa/main/supremo.png' alt='supremo' width='100%' height='100px'></img>
                                                    <br /><br />
                                                    <span style={{ paddingRight: '10px' }}>{ list.sup_id }</span>
                                                    <CopyToClipboard text={ list.sup_id }>
                                                        <span onClick={ copyConexion } style={{ cursor: 'pointer' }} className="badge rounded-pill bg-warning text-dark">copy</span>
                                                    </CopyToClipboard> <br />                                           
                                                    { list.sup_pass }
                                                </div>
                                            }
                                        </div>
                                    </div> 
                                )
                            })
                        }                                                      
                    </div>


                </div>
            </div>
        </>
    )
}
