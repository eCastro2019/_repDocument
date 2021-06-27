import { db } from '../firebase/firebase-config';

export const loadEmpresas = async( ) => {

    let state = [];
    const listEmpresas  = await db.collection('THgDam').get();

    listEmpresas.forEach( snapHijo => {
        state.push(
            {
                id: snapHijo.id,
                ...snapHijo.data()
            }
        )    
    });

    return state;

};

export const loadConexiones = async( id ) => {

    let state = [];
    const listComputadoras  = await db.collection('XyoH48').get();

    listComputadoras.forEach( snapHijo => {
        if (snapHijo.data().id_THgDam === id) {
            state.push(
                {
                    id: snapHijo.id,
                    ...snapHijo.data()
                }
            )  
        }  
    });

    return state;

};

export const loadConexionesCat = async( ) => {

    let state = [];
    const listComputadoras  = await db.collection('XyoH48').get();

    listComputadoras.forEach( snapHijo => {
        
        state.push(
            {
                id: snapHijo.id,
                ...snapHijo.data()
            }
        )  
        
    });

    return state;

};