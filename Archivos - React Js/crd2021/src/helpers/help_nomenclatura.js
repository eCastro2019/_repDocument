import { db } from '../firebase/firebase-config';

export const loadNomenclatura = async( ) => {

    let state = [];
    const notesSnap  = await db.collection('qr2vAH').get();

    notesSnap.forEach( snapHijo => {
        state.push(
            {
                id: snapHijo.id,
                ...snapHijo.data()
            }
        )    
    });

    state.sort((a,b) => b.Ye2T2Y - a.Ye2T2Y);

    return state;
};

export const loadNomenclatura2 = async( ) => {

    let state = [];
    const notesSnap  = await db.collection('s2021_01').get();

    notesSnap.forEach( snapHijo => {
        state.push(
            {
                id: snapHijo.id,
                ...snapHijo.data()
            }
        )    
    });

    state.sort((a,b) => b.Ye2T2Y - a.Ye2T2Y);

    return state;
};

export const loadPerfil = async( name ) => {

    let state = null;
    const notesSnap  = await db.collection('@UbNhkT').get();

    notesSnap.forEach( snapHijo => {
        if (snapHijo.data().x5v9G3 === name) {
            state =
                {
                    ...snapHijo.data()
                }            
        }    
    });

    return state;
};