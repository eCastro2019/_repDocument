import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { loadConexiones, loadConexionesCat, loadEmpresas } from "../helpers/help_conexiones";
import { exportImages } from "../helpers/help_imagenes";
import { types } from "../types/types";

export const guardarEmpresa = ( saveList ) => {    
    return async( dispatch ) => {       

        Swal.fire({
            title: 'Conectando al Servidor...',   
            text: 'Si tarda mucho, revise su conexion de internet...',
            showConfirmButton:false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }            
        });
        
        const { name, direccion, dropbox } = saveList;
        
        let subirImage = saveList.state;     
                
        const url = await exportImages( subirImage );
              
        await db.collection('THgDam').add( {
            name: name,
            logo: url,
            direccion: direccion,
            dropbox: dropbox
        } ).then(
            Swal.close(),
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Empresa Creada',
                showConfirmButton: false,
                timer: 1500
            }),
            dispatch( dispatch( accionRedux2( null ) ) ),
            dispatch( cargarEmpresas( ) )
        ).catch(
            e => console.log( e )
        ) 
          
    }
};

export const guardarComputadora = ( saveList ) => {

    return async( dispatch ) => {   

        Swal.fire({
            title: 'Conectando al Servidor...',   
            text: 'Si tarda mucho, revise su conexion de internet...',
            showConfirmButton:false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }            
        });
        
        const newPc = {
            id_THgDam: saveList.id_THgDam,
            pcname: saveList.pcname,
            team_id: saveList.team_id,
            team_pass: saveList.team_pass,
            any_id: saveList.any_id,
            any_pass: saveList.any_pass,
            sup_id: saveList.sup_id,
            sup_pass: saveList.sup_pass
        };

        await db.collection('XyoH48').add( newPc );        
        
        Swal.close();
     
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Computadora Guardada',
            showConfirmButton: false,
            timer: 1500
        });

        dispatch( dispatch( accionRedux3( null ) ) );
        dispatch( cargarConexionesCat( ) );

    }
};

export const deleteEmpresa = (id) => {
    return async(dispatch) => {
        await db.doc(`THgDam/${ id }`).delete();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Empresa Eliminada',
            showConfirmButton: false,
            timer: 1500
        });
        dispatch( empresaActive( '' ) );
        dispatch( cargarEmpresas( ) );
        dispatch( accionRedux4( null ) );
    }
};

export const deletePc = (id, idBusPc) => {
    return async(dispatch) => {
        await db.doc(`XyoH48/${ id }`).delete();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Computadora Eliminada',
            showConfirmButton: false,
            timer: 1500
        });
        dispatch( cargarConexiones( idBusPc ) );
        dispatch( cargarConexionesCat( ) );
    }
};

export const actualizarEmpresas = (saveList) => {    
    return async(dispatch) => {        
        Swal.fire({
            title: 'Conectando al Servidor...',   
            text: 'Si tarda mucho, revise su conexion de internet...',
            showConfirmButton:false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }            
        });
        const { id, name, ruta, direccion, dropbox, isUpd } = saveList;
        let url = '';
        
        if (isUpd === 'si') {
            url = await exportImages( ruta );
        } else {
            url = ruta;
        }

        let listActualizar = {
            name: name,
            logo: url,
            direccion: direccion,
            dropbox: dropbox
        };

        await db.doc(`THgDam/${ id }`).update( listActualizar );

        Swal.close();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Empresa Actualizada',
            showConfirmButton: false,
            timer: 1500
        });

        dispatch( accionRedux( null ) ); 
        dispatch( accionRedux2( null ) );
        dispatch( accionRedux3( null ) );
        dispatch( accionRedux4( listActualizar ) );
        dispatch( accionRedux5( null ) );
        dispatch( cargarEmpresas( ) );
        dispatch( empresaActive( listActualizar ) );
    }
};

export const actualizarComputadora = ( updatePC ) => {
    return async(dispatch) => {    
        Swal.fire({
            title: 'Conectando al Servidor...',   
            text: 'Si tarda mucho, revise su conexion de internet...',
            showConfirmButton:false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }            
        });

        const { id, id_THgDam, pcname, team_id, team_pass, any_id, any_pass, sup_id, sup_pass } = updatePC;

        let listActualizar = {
            id_THgDam: id_THgDam,
            pcname: pcname,
            team_id: team_id,
            team_pass: team_pass,
            any_id: any_id,
            any_pass: any_pass,
            sup_id: sup_id,
            sup_pass: sup_pass
        };

        await db.doc(`XyoH48/${ id }`).update( listActualizar );

        Swal.close();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Computadora Actualizada',
            showConfirmButton: false,
            timer: 1500
        });

        dispatch( accionRedux( null ) ); 
        dispatch( accionRedux2( null ) );
        dispatch( accionRedux3( null ) );
        dispatch( accionRedux5( null ) );
        dispatch( computadoraActive( '' ) );
        dispatch( cargarConexiones( id_THgDam ) );
        dispatch( cargarConexionesCat( ) );
    }
};

export const empresaActive = ( accion ) => ({
    type: types.activeEmpresa,
    payload: accion
});

export const computadoraActive = ( accion3 ) => ({
    type: types.activePc,
    payload: accion3
});

export const cargarEmpresas = ( ) => {    
    return async( dispatch ) => {               
        
        const list = await loadEmpresas( );
        dispatch( cargarEmpresasRedux( list ) );
           
    }
};

export const cargarConexiones = ( id ) => {    
    return async( dispatch ) => {               
        
        const list = await loadConexiones( id );
        dispatch( cargarConexionesRedux( list ) );
           
    }
};

export const cargarConexionesCat = ( ) => {    
    return async( dispatch ) => {               
        
        const list = await loadConexionesCat( );
        dispatch( cargarConexionesCatRedux( list ) );
           
    }
};

const cargarConexionesCatRedux = ( list ) => ({
    type: types.listComputadorasCat,
    payload: list
});

const cargarConexionesRedux = ( list ) => ({
    type: types.listComputadoras,
    payload: list
});

const cargarEmpresasRedux = ( list ) => ({
    type: types.listEmpresas,
    payload: list
});

export const accionRedux = ( accion ) => ({
    type: types.accion,
    payload: accion
});

export const accionRedux2 = ( accion2 ) => ({
    type: types.accion2,
    payload: accion2
});

export const accionRedux3 = ( accion3 ) => ({
    type: types.accion3,
    payload: accion3
});

export const accionRedux4 = ( accion4 ) => ({
    type: types.accion4,
    payload: accion4
});

export const accionRedux5 = ( accion5 ) => ({
    type: types.accion5,
    payload: accion5
});

export const accionRedux6 = ( accion6 ) => ({
    type: types.accion6,
    payload: accion6
});

export const purgarConexiones = () => ({
    type: types.purgarConexiones
});