import React from 'react';
import moment from 'moment';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { KXY5wj_redux5, KXY5wj_redux4, Dp6xiE, KXY5wj_redux7, DKWI3z, KXY5wj_redux10, KXY5wj_redux8, KXY5wj_redux13, KXY5wj_redux14, KXY5wj_redux16, KXY5wj_redux17, zrQEiv, KXY5wj_redux18, xdzizj, KXY5wj_redux20, tJliTk, lopPid, lohjdG } from '../../actions/TE6IEk';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Swal from 'sweetalert2';

export const IaIcAV = () => {    

    const dispatch = useDispatch();
    const { YAoD8A } = useSelector( state => state.woqtLQ );
    const { name } = useSelector( state => state.auth );
    const { uid } = useSelector( state => state.auth );
    const { pnU9GN } = useSelector( state => state.woqtLQ );    
    const { _YbYXGh } = useSelector( state => state.woqtLQ );    
    const { _nf9qZs } = useSelector( state => state.woqtLQ ); 
    const { _B1MieD } = useSelector( state => state.woqtLQ ); 
    const { GyBvN1 } = useSelector( state => state.woqtLQ ); 
    const { _JhqD29 } = useSelector( state => state.woqtLQ ); 
    const { Nokic5 } = useSelector( state => state.woqtLQ ); 
    const { VEdDGQ } = useSelector( state => state.woqtLQ );
    const { JMoOyX } = useSelector( state => state.woqtLQ );
    const { nyrMl1 } = useSelector( state => state.woqtLQ );
    const { _Yu4sWA } = useSelector( state => state.woqtLQ );
    const { accionDos } = useSelector( state => state.acciones ); 

    let { a2_1, a2_2, a2_3, a2_4, a2_5, a2_6, a2_7 } = pnU9GN; 
    let c = 0;
    let d = 0;
    let adu = '';
    let [a, b] = useState(0); 
    let [e, f] = useState(); 
    let [RuUVBD, XUookv] = useState(); 
    let [J2T8qb, gNS1Vq] = useState();
    let [Nbxm4x, x7ZCUE] = useState();
    let [ndiiLx, zQ7W4c] = useState(' ');
    let [H4z61A, Q4gMTE] = useState();
    const AHc280 = useRef(null);        
        
    useEffect(() => { XUookv(_YbYXGh) }, [_YbYXGh]);   
    useEffect(() => { gNS1Vq(nyrMl1.Nbxm4x) }, [nyrMl1]);        

    useEffect(() => {
            _Yu4sWA.forEach(element => { zQ7W4c( element.v_cr5gIj ) });
            if (_Yu4sWA.length > 0) { f(true) } else { f(false); zQ7W4c(' '); }
    }, [_Yu4sWA])          

    useEffect(() => {
        let x3 = [];
        if ( _nf9qZs ) {
            for (let x1 = 0; x1 < _Yu4sWA.length; x1++) {                
                x3.push(
                     _Yu4sWA[x1].BNsiLQ
                )
            }

            Q4gMTE(x3)                    
        }
    }, [_nf9qZs])

    useEffect(() => { 
        _JhqD29.forEach(element => { if (element.J2Qve0 == Nokic5) { d ++ } b(d) });
    }, [Nokic5, _JhqD29, VEdDGQ])

    const myFunction = () => {
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    };

    const handleInputChange   = ({ target }) => {XUookv(target.value)};
    const handleInputChange2  = ({ target }) => {x7ZCUE(target.value)};
    const handleInputChange3  = ({ target }) => {gNS1Vq(target.value)};

    const WfbBYS = () => {     
        let vuf1kZ = '_age20211'
        let Yun2O9 = '';

        if (_B1MieD.length > 0) {
            Yun2O9 = (_B1MieD[0].QsZLUV * 1) + 1;        
        } else {
            Yun2O9 = 1
        }

        dispatch( KXY5wj_redux10( vuf1kZ ) );
        dispatch( DKWI3z( RuUVBD, Yun2O9 ) );            
    };

    const hmoKxd = () => {
        let Y8krOV = '_age20212';
    
        dispatch( KXY5wj_redux10( Y8krOV ) );
        dispatch( DKWI3z( RuUVBD ) );         
    };

    const hJVEkB = () => {       
        if (AHc280.current) {
            let mNHKrx = '_age20215';            

            if (e) {
                dispatch( KXY5wj_redux20( 'edit' ) );
            } else {
                dispatch( KXY5wj_redux20( 'new' ) );
            }

            if (AHc280.current.getContent().length > 0) {            
                dispatch( KXY5wj_redux10( mNHKrx ) );
                dispatch( DKWI3z( AHc280.current.getContent() ) );                   
            }    
                        
        }
    };

    const mENyFx = () => {        
        let mNHKrx = '_age20214';
    
        dispatch( KXY5wj_redux10( mNHKrx ) );
        dispatch( DKWI3z( J2T8qb ) );  
    };

    const gyvWtN = () => {
        let BuDv8O = '_age20213';

        if (Nbxm4x.length > 0 && Nbxm4x != 'No puede estar vacio!.') {
            dispatch( KXY5wj_redux10( BuDv8O ) );
            dispatch( DKWI3z( Nbxm4x ) );
            x7ZCUE('');
        } else {
            x7ZCUE('No puede estar vacio!.')
        }
        
    };

    const eWHEc8 = () => { dispatch( KXY5wj_redux7( `Nueva Carpeta ( ${ _B1MieD.length + 1 } )` ) ) };    

    const L0y78S = () => {        
        dispatch( tJliTk( VEdDGQ.id, uid ) );
    };

    const cargando = () => {
        Swal.fire({ title: 'CARGANDO', text: 'Por favor espere...', showConfirmButton:false, onBeforeOpen: () => { Swal.showLoading(); } });
    };

    return (
        <>
            {
                ( YAoD8A === true ) &&
                    <table className='table tab_IaIcAV'>
                        <thead className='thead_IaIcAV'>                                                        
                            <tr className='fondo_IaIcAV'>
                                <th colSpan='2'> 
                                    <h1><b>AGENDA PERSONAL</b> { moment().format('Y') }</h1>

                                    <h2>
                                        <div className='row'>
                                            <div className='col'>
                                                <i 
                                                    title='Configuraciones Iniciales' 
                                                    className="fas fa-cogs configKey"
                                                    onClick={
                                                        () => {
                                                            dispatch( KXY5wj_redux5( null ) );
                                                            dispatch( Dp6xiE( 'config' ));
                                                            dispatch( KXY5wj_redux18( '' ) );
                                                        }
                                                    }
                                                ></i>
                                            </div>
                                            <div className='col'>
                                                <i onClick={ () => { dispatch( KXY5wj_redux5( null ) ); dispatch( KXY5wj_redux4( null ) ); dispatch( KXY5wj_redux16( '' ) ); dispatch( KXY5wj_redux14( null ) ); dispatch( KXY5wj_redux8( null ) ); dispatch( KXY5wj_redux18( '' ) ) } } title='Bloquear Pantalla' className="fas fa-lock"></i>
                                            </div>

                                            {
                                                (_nf9qZs) &&
                                                    <>
                                                        {
                                                            ( VEdDGQ ) &&
                                                            <>
                                                                {
                                                                    ( H4z61A ) &&
                                                                        ( H4z61A.includes(VEdDGQ.id) ) &&
                                                                            <div className='col'>
                                                                                <i onClick={ L0y78S } title='Eliminar Documento' className="fas fa-archive"></i>
                                                                            </div>
                                                                }

                                                                <div className='col'>
                                                                    <i onClick={ hJVEkB } title='Guardar Cambios' className="fas fa-save"></i>
                                                                </div>
                                                            </>
                                                        }

                                                        {
                                                            ( JMoOyX && JMoOyX.mfvYrH === 'nuevo' ) &&
                                                                <div className='col'><i onClick={ gyvWtN } title='Guardar Cambios' className="fas fa-save"></i></div>
                                                        }
                                                         
                                                         {
                                                            ( nyrMl1 ) &&
                                                                <div className='col'><i onClick={ mENyFx } title='Guardar Cambios' className="fas fa-save"></i></div>
                                                        } 
                                                        
                                                        <div className='col'>
                                                            {
                                                                (! GyBvN1 && ! VEdDGQ && ! JMoOyX && ! nyrMl1) &&
                                                                    <i onClick={ () => { dispatch( KXY5wj_redux8(null) ); dispatch( KXY5wj_redux17( null ) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            }

                                                            {
                                                                ( JMoOyX ) &&
                                                                    <i onClick={ () => { dispatch( KXY5wj_redux17(null) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            }
                                                            
                                                            {
                                                                (GyBvN1) &&
                                                                    <i onClick={ () => { dispatch( KXY5wj_redux7( null ) ); dispatch( KXY5wj_redux13( null ) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            }     

                                                            {
                                                                ( VEdDGQ ) &&
                                                                    <i onClick={ () => { dispatch( KXY5wj_redux16( '' ) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            }                                                            

                                                            {
                                                                ( nyrMl1 ) &&
                                                                    <i onClick={ () => { dispatch( KXY5wj_redux18( '' ) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            }
                                                                                                                
                                                        </div>
                                                    </>
                                            }
                                            
                                        </div>        
                                        
                                    </h2>

                                    {
                                        (! _YbYXGh && ! _nf9qZs) &&
                                            <h2 onClick={ eWHEc8 } className='h2_IaI_1'><i className="fas fa-folder-plus"></i><b> NUEVA CARPETA</b></h2>
                                    }

                                    {
                                        (_YbYXGh) &&
                                            <>
                                                <div className='row'>
                                                    <div className='col'>
                                                        {
                                                            (! GyBvN1) &&
                                                                <i onClick={ WfbBYS } title='Guardar Cambios' className="fas fa-save"></i>
                                                        }    

                                                        {
                                                            (GyBvN1) &&
                                                                <i onClick={ hmoKxd } title='Guardar Cambios' className="fas fa-save"></i>
                                                        } 
                                                                                                            
                                                    </div>   

                                                    {
                                                        ( ! GyBvN1 ) &&
                                                            <div className='col'>
                                                                <i onClick={ () => { dispatch( KXY5wj_redux7( null ) ) } } title='Cancelar Cambios' className="fas fa-window-close"></i>
                                                            </div>
                                                    }      
                                                                                                                                                         
                                                </div>                                                
                                                <input type='text' value={ RuUVBD || '' } onChange={ handleInputChange } name='RuUVBD' className='input_IaIcAV2' placeholder='TITULO DE LA CARPETA' autoComplete='off' autoFocus />
                                            </>
                                    }

                                    {
                                        ( JMoOyX && JMoOyX.mfvYrH === 'nuevo' ) &&                                            
                                            <input type='text' value={ Nbxm4x || '' } onChange={ handleInputChange2 } name='Nbxm4x' className='input_IaIcAV2' placeholder='TITULO DEL DOCUMENTO' autoComplete='off' autoFocus />
                                    }

                                    {
                                        ( nyrMl1 ) &&
                                            <input type='text' value={ J2T8qb || '' } onChange={ handleInputChange3 } name='J2T8qb' className='input_IaIcAV2' placeholder='TITULO DEL DOCUMENTO' autoComplete='off' autoFocus />
                                    }

                                    {
                                        (_nf9qZs && ! _YbYXGh && ! VEdDGQ && ! JMoOyX && ! nyrMl1 ) &&
                                            <>
                                                <h2 onClick={ () => {
                                                    dispatch( KXY5wj_redux17( {
                                                        mfvYrH: 'nuevo'
                                                    } ) );
                                                } } className='h2_IaI_1'><i className="fas fa-file-alt"></i> + <b> NUEVO DOCUMENTO</b></h2>
                                            </>
                                    }                                    

                                    {
                                        ( VEdDGQ ) &&
                                            <h1 className='h1_VEdDGQ'>  { VEdDGQ.OyCiyB } </h1>                                           
                                    }

                                </th>
                            </tr>                                                       
                        </thead>
                        <tbody className='tbody_IaIcAV'>                                                          
                            <tr className='tr_IaIcAV2'>                                        
                                <td className='dek22'>                  
                                    <input type='text' onKeyUp={ myFunction } id="myInput" className='input_IaIcAV' placeholder='Buscador...' autoComplete='off' />
                                    
                                    { (a2_1) && <a title='Dropbox' href='https://www.dropbox.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622950/perfil/hbrdzosdyb9awbq5eamw.png' className='img_IaIcAv2' alt='Dropbox' /></a>}
                                    { (a2_2) && <a title='GitHup' href='https://github.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618622883/perfil/citodtgvl4wdj7yft3ap.png' className='img_IaIcAv2' alt='GitHup' /></a>}
                                    { (a2_3) && <a title='Mega' href='https://mega.nz/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623517/perfil/n3kibw04nuovnbuuxhiu.png' className='img_IaIcAv2' alt='Mega' /></a>}
                                    { (a2_4) && <a title='Cloudinary' href='https://cloudinary.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623622/perfil/h0uvrdoxszzsap5nwpgd.png' className='img_IaIcAv2' alt='Cloudinary' /></a>}<br />
                                    { (a2_5) && <a title='Firebase' href='https://console.firebase.google.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618623700/perfil/bjgysc7w8w4evtikzszx.png' className='img_IaIcAv2' alt='Firebase' /></a>}
                                    { (a2_6) && <a title='Heroku' href='https://www.heroku.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618624028/perfil/ovpiyzytqfnksnivzugh.png' className='img_IaIcAv2' alt='Heroku' /></a>}                                    
                                    { (a2_7) && <a title='Google Drive' href='https://accounts.google.com/' target='_blank'><img src='https://res.cloudinary.com/df2ahfbvy/image/upload/v1618682479/perfil/wygzcseybd15s8dw6rpy.webp' className='img_IaIcAv2' alt='Google Drive' /></a>}                                    

                                    <center>
                                        <h5>
                                            <i className="fas fa-location-arrow"></i> Listado de Carpetas
                                        </h5>
                                    </center>
                                    
                                    <div className='scroDoc'>
                                        <ul id="myUL" className='ul_IaIcAV51'>
                                            {
                                                _B1MieD.map(element => {
                                                   return(
                                                        <li onClick={() => { 
                                                            cargando();
                                                            dispatch( KXY5wj_redux8(element.B1MieD_d) );
                                                            dispatch( KXY5wj_redux14( element.id ) );
                                                            dispatch( KXY5wj_redux7( null ) ); 
                                                            dispatch( KXY5wj_redux13( null ) );
                                                            dispatch( KXY5wj_redux16( '' ) );
                                                            dispatch( KXY5wj_redux17( null ) );
                                                            dispatch( KXY5wj_redux18( '' ) );
                                                            dispatch( lopPid( uid, element.id ) );                                                            
                                                        }} key={ element.id } className='ul_IaIcAV51'>
                                                            <a className='a_IaI'> <i className="fas fa-folder i_IaIcAV"></i> { element.B1MieD_d } </a>
                                                        </li>
                                                   )
                                                })
                                            }                                                                                        
                                        </ul>
                                    </div>
                                   
                                </td>
                                <td>                            
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='td_IaIcAV5'></td>
                                                <td className='td_IaIcAV6'>
                                                    {
                                                        ( _nf9qZs ) &&
                                                            <>
                                                                {
                                                                    ( ! VEdDGQ ) &&
                                                                        <div className='divTabl_IaIcAV'>
                                                                            <table className="table table_IaIcAVTabl">
                                                                                <thead className="thead-dark">
                                                                                    <tr>
                                                                                        {
                                                                                            ( a < 1 )
                                                                                            ? <th onClick={ () => { dispatch( zrQEiv( Nokic5, uid ) ) } } className="col-1 _nf9qZs_table"><i className="far fa-trash-alt"></i> </th>
                                                                                            : <th className='col-1'></th>
                                                                                        }                                                                                        
                                                                                        <th className='_nf9qZs_table' colSpan='3' onDoubleClick={
                                                                                            () => {
                                                                                                dispatch( KXY5wj_redux7( _nf9qZs ) ); 
                                                                                                dispatch( KXY5wj_redux13( 'editar' ) );
                                                                                            }
                                                                                        }><h1><i className="fas fa-folder i_IaIcAV"></i> <b>{ _nf9qZs }</b></h1></th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>                                                                               
                                                                                    {
                                                                                        _JhqD29.map(element => {
                                                                                            if (element.J2Qve0 === Nokic5) {
                                                                                                c ++
                                                                                                return (
                                                                                                    <tr key={ element.id }>
                                                                                                        <th scope="row">{ c }</th>                                                                                                        
                                                                                                        <th onClick={ () => {
                                                                                                            dispatch( KXY5wj_redux18 ( {
                                                                                                                id: element.id,
                                                                                                                Nbxm4x: element.OyCiyB
                                                                                                            } ) )
                                                                                                        } } className='_JhqD29_th'><i className="fas fa-pencil-alt"></i></th>
                                                                                                        <td onClick={ () => { 
                                                                                                            cargando();
                                                                                                            dispatch( KXY5wj_redux16( { 
                                                                                                                id: element.id,
                                                                                                                OyCiyB: element.OyCiyB
                                                                                                            } ) ); 
                                                                                                            dispatch( KXY5wj_redux17(null) ); 
                                                                                                            dispatch( KXY5wj_redux18( '' ) );   
                                                                                                            dispatch( lohjdG( uid, element.id ) );
                                                                                                        } } className='td_IaIcAVTabl'><i className="fas fa-file-alt"></i> { element.OyCiyB }</td>

                                                                                                        {
                                                                                                            ( H4z61A ) &&
                                                                                                                ( ! H4z61A.includes(element.id) ) &&
                                                                                                                    <>
                                                                                                                        <th onClick={() => { 
                                                                                                                            dispatch(xdzizj( element.id, uid )) 
                                                                                                                        }} className='_JhqD29_th'><i className="far fa-trash-alt"></i></th>
                                                                                                                    </>
                                                                                                        }    

                                                                                                    </tr>
                                                                                                )   
                                                                                            }
                                                                                        })
                                                                                    }                                                                                                                                                        
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                }
                                                                
                                                            </>
                                                    }

                                                    {
                                                        (VEdDGQ) &&
                                                            <>                                                                
                                                                <Editor
                                                                    apiKey="0x64upz27q8825gev9n7vlentwxo7x9459g0i9gyh55hbtpc"
                                                                    onInit={(evt, editor) => AHc280.current = editor}
                                                                    value={ ndiiLx }
                                                                    init={{
                                                                        height: 640,
                                                                        menubar: true,
                                                                        plugins: [
                                                                            'advlist autolink lists link image charmap print preview anchor',
                                                                            'searchreplace visualblocks code fullscreen',
                                                                            'insertdatetime media table paste code help wordcount'
                                                                        ],
                                                                        toolbar: 'undo redo | formatselect | ' +
                                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                        'removeformat | help',
                                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }'
                                                                    }}
                                                                />
                                                            </>
                                                    }

                                                    {
                                                        (! _nf9qZs) &&
                                                            <>
                                                                <h1>
                                                                    {
                                                                        (accionDos === 'madrugada') &&
                                                                        <i className="fas fa-cloud-moon"> Buenas Noches </i>
                                                                    }
                                                                    {
                                                                        (accionDos === 'noche') &&
                                                                        <i className="fas fa-cloud-moon"> Buenas Noches </i>
                                                                    }
                                                                    {
                                                                        (accionDos === 'dia') &&
                                                                        <i className="fas fa-cloud-sun"> Buenos Días </i>
                                                                    }   
                                                                    {
                                                                        (accionDos === 'tarde') &&
                                                                        <i className="fas fa-cloud-sun"> Buenas Tardes </i>
                                                                    }
                                                                </h1>   

                                                                <h1 className='h1_IaI_1 animate__animated animate__rotateIn'><i className="fas fa-star-half-alt"></i></h1>
                                                                <h1>{ name }</h1>
                                                                <h1><b>AGENDA PERSONAL</b> <br /> { moment().format('Y') }</h1>     
                                                            </>
                                                    }                                               
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>                       
                            </tr>
                            <tr>
                                <td colSpan='2' className='td_IaIcAV_pie'></td>
                            </tr>
                        </tbody>
                    </table>
            }            
        </>
    )
}
