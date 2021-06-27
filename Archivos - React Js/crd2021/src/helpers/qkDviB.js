import { db } from "../firebase/firebase-config";

export const WgGPPD = async( ) => {

    let state = [];
    const WgGPPD  = await db.collection('@csv2021_01').get();

    WgGPPD.forEach( snapHijo => {
        state.push(
            {
                ...snapHijo.data()
            }
        )    
    });

    return state;
};

export const SPaeex = async( ) => {
    let state = [];
    const SPaeex  = await db.collection('@csv2021_02').get();

    SPaeex.forEach( snapHijo => {
        state.push(
            {
                ...snapHijo.data()
            }
        )    
    });

    return state;    
};

export const UO8I6U = async( ) => {
    let state = [];
    const UO8I6U  = await db.collection('@csv2021_05').get();

    UO8I6U.forEach( snapHijo => {
        state.push(
            {
                ...snapHijo.data()
            }
        )  
    });

    return state;    
};

export const pkGxSp = async( ) => {
    let state = [];
    const giIWIl  = await db.collection('@csv2021_04').get();

    giIWIl.forEach( snapHijo => {
        state.push(
            {
                ...snapHijo.data()
            }
        )  
    });

    return state;  
};

export const pa8Nzl = async( user ) => {

    let state = null;
    const pa8Nzl  = await db.collection('RapwtG').get();

    pa8Nzl.forEach( snapHijo => {
        if (snapHijo.data().HXsGxd == user) {
            state = snapHijo.data().BgUC8N            
        }
         
    });

    return state;    
};

export const VWDgrp = async( uid ) => {

    let state = null;
    const ENo1B2  = await db.collection(`Vv1mUK/${ uid }/m0SwBs`).get();

    ENo1B2.forEach( snapHijo => {
        state = { 
            ...snapHijo.data(),
            id: snapHijo.id
        }
    });

    return state;    
};

export const wfcD5V = async( TlXJfM ) => {

    let state = [];
    const wfcD5V  = await db.collection(`Vv1mUK/${ TlXJfM }/_B1MieD`).get();

    wfcD5V.forEach( snapHijo => {
        state.push(
            {
                id: snapHijo.id,
                ...snapHijo.data()
            }
        )    
    });

    return state;    
};

export const KCZUkK = async( uid, id ) => {

    let state = [];     
    const KAr7lB  = await db.collection(`Vv1mUK/${ uid }/_yuHjcZ`).get();

    KAr7lB.forEach( snapHijo => {
        if (snapHijo.data().J2Qve0 === id) {
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

export const Bhbvgd = async( uid, id ) => {
    let state = []; 
    const ImTDFw  = await db.collection(`Vv1mUK/${ uid }/_mcOAEO`).get();

    ImTDFw.forEach( snapHijo => {
        if (snapHijo.data().BNsiLQ === id) {
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