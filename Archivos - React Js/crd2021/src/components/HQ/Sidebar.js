import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { Panel } from './Panel';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    Link
} from "react-router-dom";

import { Redirections } from '../PanelOpciones/Redirect';
import { agregarRuta } from '../../actions/ruta';
import { Portada } from '../PanelOpciones/Portada';
import { Empresas } from '../PanelOpciones/Empresas';
import { Nomenclatura } from '../PanelOpciones/Nomenclatura';
import { DataBase } from '../mobil/DataBase';
import { DataArchivo } from '../mobil/DataArchivo';
import { purgar } from '../../actions/nomenclatura';
import { EmpresasMobil } from '../PanelOpciones/EmpresasMobil';
import { purgarConexiones } from '../../actions/conexiones';
import { MclhRy } from '../PanelOpciones/MclhRy';
import { KXY5wj_redux21 } from '../../actions/TE6IEk';

export const nombreMEs = {
    January     :   'Enero',
    February    :   'Febrero',
    March       :   'Marzo',
    April       :   'Abril',
    May         :   'Mayo',
    June        :   'Junio',
    July        :   'Julio',
    August      :   'Agosto',
    September   :   'Septiembre',
    October     :   'Octubre',
    November    :   'Noviembre',
    December    :   'Diciembre'
}

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );    
    const { ruta } = useSelector( state => state.rutas );
    const { accionDos } = useSelector( state => state.acciones );
    const { perfil } = useSelector(state => state.nomenclatura);

    let mes = moment().format('MMMM');    

    const handleLogout = () => {
        dispatch( startLogout() );
        dispatch( purgar() );
        dispatch( purgarConexiones() );
    };    
             
    return (
        
        <>                   
            <div className='computadora div_ocultar'>                            
                <Router>
                    <div id='nav_1' className="sidenav">                                                
                        <center>                            
                            <h3 className='animate__animated animate__fadeInTopLeft' id='h3_nav' style={{ paddingTop:'50px' }}>
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
                            </h3><br /><br />

                            {
                                ( perfil ) &&
                                    <img className='animate__animated animate__fadeInTopLeft' src={ perfil.B3FmD6 } alt={ perfil.x5v9G3 } width='150px' style={{ borderRadius: '50%' }}></img>
                            } 
                            
                            <h1 id='h1_nav' className='fas fa-user-circle text'> { name }</h1>                            
                            <h4 id='h1_nav' className='k_2021' style={{ paddingTop: '10px' }}> - <i className="far fa-star"></i> { moment().format('D [de] ') }{ nombreMEs[mes] } {  moment().format(' [de] YYYY') } <i onClick={ () => { dispatch( KXY5wj_redux21( true ) ) } }> - </i></h4>
                            <span id='h1_nav' onClick={ handleLogout } style={{ cursor:'pointer', border: 'none'}}> <i style={{ fontSize:'2em' }} className="fas fa-sign-in-alt"></i> </span>
                            <hr width='90%' style={{ border:'1px solid white' }} />
                        </center>

                        <div className='animate__animated animate__fadeInTopLeft'>
                            <Link 
                                className='nav-link active'
                                style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                to="/portada"                            
                            >
                                <i className="fas fa-star"></i>
                                Soluciones Virtuales
                            </Link>   

                            <NavLink 
                                className='nav-link active'
                                style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                exact 
                                to="/MclhRy"                                
                            >
                                <i className="fas fa-star"></i>
                                Agenda Personal { moment().format('Y') }
                            </NavLink>                        

                            <NavLink 
                                className='nav-link active'
                                style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                exact 
                                to="/empresas"
                            >
                                <i className="fas fa-star"></i>
                                Conexiones Remotas
                            </NavLink>

                            <NavLink 
                                className='nav-link active'
                                style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                exact 
                                to="/nomenclatura"
                            >
                                <i className="fas fa-star"></i>
                                Nomenclaturas de Proyectos
                            </NavLink> 
                        </div>                                                                                          

                    </div>                             

                    <div className="main">                                       

                        <Switch>
                            <Route exact path="/redirect" component={ Redirections } />
                            <Route exact path="/empresas" component={ Empresas } />
                            <Route exact path="/portada" component={ Portada } />      
                            <Route exact path="/nomenclatura" component={ Nomenclatura } />                                                        
                            <Route exact path="/MclhRy" component={ MclhRy } />  
                            <Redirect to="/redirect" />                            
                        </Switch>

                    </div>
                </Router>
            </div>    

            <div className='movil'>
                {
                    ( ! ruta ) &&
                        <div id='nav_1_1' className="sidenav">                            
                            <center>
                                {
                                    ( perfil ) &&
                                        <img className='animate__animated animate__fadeInTopLeft' src={ perfil.B3FmD6 } alt={ perfil.x5v9G3 } width='150px' style={{ borderRadius: '50%' }}></img>
                                }
                                <br /><br />
                                <h1 id='h1_nav1' className='fas fa-user-circle text'> { name }</h1><br />
                                <span onClick={ handleLogout } style={{ cursor:'pointer', color: 'white', border: 'none'}}> <i style={{ fontSize:'2em' }} className="fas fa-sign-in-alt"></i> </span>
                                <h1 className='animate__animated animate__fadeInTopLeft' id='h3_nav_1' style={{ paddingTop:'50px' }}>
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
                                <h4 id='h1_nav1' style={{ paddingTop: '10px' }}><i className="far fa-star"></i> { moment().format('D [de] ') }{ nombreMEs[mes] } {  moment().format(' [de] YYYY') }</h4>
                                <hr width='90%' style={{ border:'1px solid white' }} />                                                                                                                            
                                
                                <Router>
                                    <NavLink 
                                        className='nav-link active'
                                        style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                        exact 
                                        to="/MclhRy"   
                                        onClick={ () => {
                                            dispatch( agregarRuta( '/MclhRy' ) )
                                        } }                             
                                    >
                                        <i className="fas fa-star"></i>
                                        Agenda Personal { moment().format('Y') }
                                    </NavLink>
                                </Router>
                                
                                <p 
                                    className='nav-link active animate__animated animate__fadeInTopLeft'
                                    style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                    onClick={ () => {
                                        dispatch( agregarRuta( '/empresas' ) )
                                    } }
                                > 
                                    <i className="fas fa-star" style={{ paddingRight: '5px' }}></i>
                                    Conexiones Remotas
                                </p> 

                                <p 
                                    className='nav-link active animate__animated animate__fadeInTopLeft'
                                    style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                    onClick={ () => {
                                        dispatch( agregarRuta( '/dataBase' ) )
                                    } }
                                > 
                                    <i className="fas fa-star" style={{ paddingRight: '5px' }}></i>
                                    Nomenclaturas de Bases de Datos
                                </p>       

                                <p 
                                    className='nav-link active animate__animated animate__fadeInTopLeft'
                                    style={{ cursor:'pointer', fontSize: '1.3em' }} 
                                    onClick={ () => {
                                        dispatch( agregarRuta( '/dataArchivo' ) )
                                    } }
                                > 
                                    <i className="fas fa-star" style={{ paddingRight: '5px' }}></i>
                                    Nomenclaturas de Archivos y Variables
                                </p>   
                            </center>                                                                                                     

                            <center>
                                <hr width='90%' style={{ border:'1px solid white' }} />     
                            </center>                    
                        </div>   
                } 
               
                {
                    ( ruta === '/empresas' ) &&
                        <>
                            <Panel />
                            <center>
                                <p style={{ fontSize: '2em', cursor: 'pointer' }} className='fas fa-exchange-alt' onClick={ () => { dispatch( agregarRuta( '' ) ) } }></p>
                            </center>

                            <EmpresasMobil />

                            <br />
                        </>
                }  

                {
                    ( ruta === '/dataBase' ) &&
                        <>
                            <Panel />

                            <center>
                                <p style={{ fontSize: '2em', cursor: 'pointer' }} className='fas fa-exchange-alt' onClick={ () => { dispatch( agregarRuta( '' ) ) } }></p>
                            </center>

                            <DataBase />

                            <br />
                        </>
                }    

                {
                    ( ruta === '/dataArchivo' ) &&
                        <>
                            <Panel />

                            <center>
                                <p style={{ fontSize: '2em', cursor: 'pointer' }} className='fas fa-exchange-alt' onClick={ () => { dispatch( agregarRuta( '' ) ) } }></p>
                            </center>

                            <DataArchivo />

                            <br />
                        </>
                }      

                {
                    ( ruta === '/MclhRy' ) &&
                        <>                            
                            <MclhRy />                          
                        </>
                }            
            </div>
        </>

    )
}