import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { loadNomenclatura, loadNomenclatura2, loadPerfil } from "../helpers/help_nomenclatura";
import { types } from "../types/types";

export const nuevaNomenclaturaBD = ( nuevaBD ) => {    
    return async( dispatch ) => {               
        
        await db.collection('qr2vAH').add( nuevaBD );   
        const nomenclaturas  = await loadNomenclatura(  );   
        dispatch( nomenclaturaRedux( nomenclaturas ) );
           
    }
};

export const nuevoArchivo = ( resulSAve ) => {    
    return async( dispatch ) => {               
        
        await db.collection('s2021_01').add( resulSAve );   
        const nomenclaturas2 = await loadNomenclatura2( );
        dispatch( nomenclaturaRedux2( nomenclaturas2 ) );
           
    }
};

export const cargarNomenclatura = ( ) => {

    return async( dispatch ) => {
        
        const nomenclaturas  = await loadNomenclatura(  );   
        const nomenclaturas2 = await loadNomenclatura2( );
        dispatch( nomenclaturaRedux( nomenclaturas ) );
        dispatch( nomenclaturaRedux2( nomenclaturas2 ) );

    }

};   

export const cargarNomenclatura2 = ( name ) => {
    return async( dispatch ) => {
        const nomenclaturas3 = await loadPerfil( name );
        dispatch( nomenclaturaRedux3( nomenclaturas3 ) );
    }
};

export const actualizarNomenclatura = ( data ) => {    
    return async( dispatch ) => {               
            
        await db.doc(`qr2vAH/${ data.id }`).update( data ).then(
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Nomenclatura Actualizada',
                showConfirmButton: false,
                timer: 1500
            }),
            dispatch( nomenclaturaActive( '' ) )
        ).catch(
            e => console.log( e )
        ) 

        const nomenclaturas  = await loadNomenclatura(  );   
        dispatch( nomenclaturaRedux( nomenclaturas ) );
           
    }
};

export const actualizarArchivoNomen = ( formValues ) => {    
    return async( dispatch ) => {               
            
        await db.doc(`s2021_01/${ formValues.id }`).update( formValues ).then(
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Archivo Actualizado',
                showConfirmButton: false,
                timer: 1500
            }),
            dispatch( archivosActive( '' ) )
        ).catch(
            e => console.log( e )
        ) 

        const nomenclaturas2 = await loadNomenclatura2( );
        dispatch( nomenclaturaRedux2( nomenclaturas2 ) );
           
    }
};

export const nomenclaturaDELETE = ( id ) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Estás seguro(a)?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                db.doc(`qr2vAH/${ id }`).delete();                                    
            }
        })        

        const nomenclaturas  = await loadNomenclatura(  );
        dispatch( nomenclaturaRedux( nomenclaturas ) );
    }
}

export const nomenclaturaArchiveDELETE = ( id ) => {
    return async( dispatch ) => {
        Swal.fire({
            title: 'Estás seguro(a)?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                db.doc(`s2021_01/${ id }`).delete();                
            }
        })

        const nomenclaturas2 = await loadNomenclatura2( );
        dispatch( nomenclaturaRedux2( nomenclaturas2 ) );
    }
}

export const nomenclaturaRedux = ( nomenclaturas ) => ({
    type: types.listNomen,
    payload: nomenclaturas
});

export const nomenclaturaRedux2 = ( nomenclaturas2 ) => ({
    type: types.s2021_01,
    payload: nomenclaturas2
});

export const nomenclaturaRedux3 = ( nomenclaturas3 ) => ({
    type: types.perfil,
    payload: nomenclaturas3
});

export const nomenclaturaActive = ( active ) => ({
    type: types.activeNomen,
    payload: active
});

export const archivosActive = ( active ) => ({
    type: types.activeArchi,
    payload: active
});

export const purgar = () => ({
    type: types.purgar
})