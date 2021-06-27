import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { pa8Nzl, SPaeex, VWDgrp, wfcD5V, WgGPPD, UO8I6U, pkGxSp, KCZUkK, Bhbvgd } from "../helpers/qkDviB";
import { types } from "../types/types";

export const RUtPg7 = ( ijF3Uk, FjBIRG ) => {
    return async( dispatch, getState ) => { 
        
        Swal.fire({ title: 'Conectando al Servidor...', text: 'Si tarda mucho, revise su conexion de internet...', showConfirmButton:false, onBeforeOpen: () => { Swal.showLoading(); } });

        const pnU9GN = getState().woqtLQ.pnU9GN;
        let IRVk5h = pnU9GN.id
     
        if (pnU9GN.a2_1 === '' && pnU9GN.a2_2 === '' && pnU9GN.a2_3 === '' && pnU9GN.a2_4 === '' && pnU9GN.a2_5 === '' && pnU9GN.a2_6 === '' && pnU9GN.a2_7 === '') {
            await db.collection(`Vv1mUK/${ FjBIRG }/m0SwBs`).add( ijF3Uk );  
            dispatch( c6YDrX( ijF3Uk ) );
            Swal.fire({ position: 'top-end', icon: 'success', title: 'Accesos Directos Actualizados', showConfirmButton: false, timer: 1500 })
        } else {
            await db.doc(`Vv1mUK/${ FjBIRG }/m0SwBs/${ IRVk5h }`).update( ijF3Uk ).then(                
            Swal.fire({ position: 'top-end', icon: 'success', title: 'Accesos Directos Actualizados', showConfirmButton: false, timer: 1500 }),
                dispatch( c6YDrX({ ...ijF3Uk, id: IRVk5h }) ),
                dispatch( Dp6xiE( null ) ), 
                dispatch( KXY5wj_redux5( true ) ),
            ).catch( e => console.log( e ) ) 
        }

        Swal.close();
    }
};

export const Dp6xiE = ( P5JG3Y ) => ({
    type: types.BFUstM,
    payload: P5JG3Y
});

export const DKWI3z = ( G7aXHa, qq3uMN, otW1Te, k7Z54Y ) => { 
    return async( dispatch, getState ) => {           

        Swal.fire({ title: 'Conectando al Servidor...', text: 'Si tarda mucho, revise su conexion de internet...', showConfirmButton:false, onBeforeOpen: () => { Swal.showLoading(); } });

        let kXsCE1 = '', W2gHeU = '', WGPbpl = '', BtCcxY = '', hpdOHv = '', CjELnP = '', zOajJq = '', AlqA2T = '';
        
        const oGk878  = getState().woqtLQ.RQghbW;
        const jDSDmx  = getState().woqtLQ.TE6IEk;
        const _xy2pwC = getState().woqtLQ._xy2pwC;        
        const Nokic5  = getState().woqtLQ.Nokic5;
        const { id:pHngQr }  = getState().woqtLQ.VEdDGQ;       
        const { id:Ymkh3A }  = getState().woqtLQ.nyrMl1;
        const uid     = getState().auth.uid;

        let GZhpKw = G7aXHa.length - 1;

        if (oGk878 && jDSDmx) {
            for (let opBouv = 0; opBouv < G7aXHa.length; opBouv++) { kXsCE1 = kXsCE1 + G7aXHa[GZhpKw]; GZhpKw = GZhpKw - 1; } for (let RZK16v = 0; RZK16v < kXsCE1.length; RZK16v++) { W2gHeU = kXsCE1[ RZK16v ]; oGk878.forEach(element => { if (W2gHeU === ".") { WGPbpl = WGPbpl + 'ZfDhJRkZFT7TDwV' } else if (element[W2gHeU]) { WGPbpl = WGPbpl + element[ W2gHeU ]; } else { BtCcxY = W2gHeU + element[ 10 ]; WGPbpl = WGPbpl + BtCcxY } });} for (let hpdOHv = 0; hpdOHv < WGPbpl.length; hpdOHv++) { CjELnP = WGPbpl[ hpdOHv ]; jDSDmx.forEach(element => { if (element[CjELnP]) { zOajJq = zOajJq + element[ CjELnP ]; } else { AlqA2T = CjELnP + element[ 10 ]; zOajJq = zOajJq + AlqA2T } }); }       
        
            if (otW1Te === 'ag') { dispatch( KXY5wj_redux4( zOajJq ) ); if (zOajJq === qq3uMN) { dispatch( KXY5wj_redux5( true ) ); } else  { dispatch( KXY5wj_redux5( 'PIN INCORRECTO / INTENTE DE NUEVO' ) ); } } 
            if (_xy2pwC === '_age20211') { dispatch( WHOWeu( G7aXHa, zOajJq, uid, k7Z54Y ) ); } 
            if (_xy2pwC === '_age20212') { dispatch( a4nkG1( G7aXHa, zOajJq, Nokic5, uid ) ); } 
            if (_xy2pwC === '_age20213') { dispatch( NF0xmW( G7aXHa, zOajJq, Nokic5, uid ) ); }
            if (_xy2pwC === '_age20214') { dispatch( KMRRBq( G7aXHa, zOajJq, Ymkh3A, uid ) ); }
            if (_xy2pwC === '_age20215') { dispatch( Ktnzlm( G7aXHa, zOajJq, pHngQr, uid ) ); }
            if (_xy2pwC === 'UbMJwM' ) { dispatch( KXY5wj_redux22( zOajJq ) ); Swal.close(); }            
        }

    }
};

export const bMlXvG = ( NX0Y00 ) => {        
    return async( dispatch, getState ) => {  
        const wmOizl = getState().woqtLQ.DsiYqA;
        const YEcmmQ = getState().woqtLQ.doQbZy;
        
        let UNNMGP  = '', XGWEHB  = '', vHRHhc  = []; for (let goFsaL = 0; goFsaL < NX0Y00.length; goFsaL++) { let SjckG4 = NX0Y00[ goFsaL ]; let LRN0YS = SjckG4.B1MieD_d; for (let cL8ZXM = 0; cL8ZXM < LRN0YS.length; cL8ZXM++) { UNNMGP = UNNMGP + LRN0YS.substr(cL8ZXM,1); YEcmmQ.forEach(element => { if (element[UNNMGP]) { XGWEHB = XGWEHB + element[UNNMGP]; UNNMGP = ''; } else if (UNNMGP === 'ZfDhJRkZFT7TDwV') { XGWEHB = XGWEHB + '.'; UNNMGP = ''; } else { if (UNNMGP.length === 15) { XGWEHB = XGWEHB + UNNMGP.substr(0,1); UNNMGP = ''; } } }); }; XGWEHB = XGWEHB + '|'; }; vHRHhc.push( XGWEHB ); let BTDU6D = '', TkPi5B = '', bZpLCo = ''; for (let yHtwZK = 0; yHtwZK < vHRHhc.length; yHtwZK++) { let RVsaYb = vHRHhc[yHtwZK]; for (let XkCg9g = 0; XkCg9g < RVsaYb.length; XkCg9g++) { if (RVsaYb.substr(XkCg9g,1) != '|') { BTDU6D = BTDU6D + RVsaYb.substr(XkCg9g,1); } else { for (let mdDnXF = 0; mdDnXF < BTDU6D.length; mdDnXF++) { TkPi5B = TkPi5B + BTDU6D.substr(mdDnXF,1); wmOizl.forEach(element => { if (element[TkPi5B]) { bZpLCo = bZpLCo + element[TkPi5B]; TkPi5B = '' } else if (TkPi5B === 'ZfDhJRkZFT7TDwV') { bZpLCo = bZpLCo + '.'; TkPi5B = '' } else { if (TkPi5B.length === 15) { bZpLCo = bZpLCo + BTDU6D.substr(0,1); TkPi5B = ''; } } }); } bZpLCo = bZpLCo + '|'; TkPi5B = ''; BTDU6D = ''; } } }; let nLa9RA = [], K5mTzY = [], q3Og6l = '', m5H0dz = [], HIPJo8 = 0, HxzvDs = '', eIJ60D = []; for (let BwW5Iv = 0; BwW5Iv < NX0Y00.length; BwW5Iv++) { nLa9RA.push( NX0Y00[BwW5Iv].id ); eIJ60D.push( NX0Y00[BwW5Iv].QsZLUV ) }; for (let DuaG4a = 0; DuaG4a < bZpLCo.length; DuaG4a++) { if (bZpLCo.substr(DuaG4a,1) != '|') { q3Og6l = q3Og6l + bZpLCo.substr(DuaG4a,1); } else { HIPJo8 = q3Og6l.length - 1; for (let eIJ60D = 0; eIJ60D < q3Og6l.length; eIJ60D++) { HxzvDs = HxzvDs + q3Og6l[HIPJo8]; HIPJo8 = HIPJo8 - 1 } K5mTzY.push( HxzvDs ); q3Og6l = ''; HxzvDs = ''; } }; for (let Z7YisV = 0; Z7YisV < nLa9RA.length; Z7YisV++) { m5H0dz.push({ id: nLa9RA[Z7YisV], B1MieD_d: K5mTzY[Z7YisV] }) }; 

        for (let ccc = 0; ccc < m5H0dz.length; ccc++) {
            dispatch( KXY5wj_redux22( m5H0dz[ccc].B1MieD_d ) ); 
        }

    }
};


const Ktnzlm = ( G7aXHa, zOajJq, pHngQr, uid ) => {
    return async( dispatch, getState ) => {
        const _Yu4sWA  = getState().woqtLQ._Yu4sWA;
        const whhOv9  = getState().woqtLQ.whhOv9;

        let unQqSW = {
            BNsiLQ: pHngQr,
            v_cr5gIj: zOajJq
        }
        
        if ( whhOv9 === 'new' ) {

            const GKMWbO = await db.collection(`Vv1mUK/${ uid }/_mcOAEO`).add( unQqSW ).then(
                Swal.fire({ position: 'top-end', icon: 'success', title: 'Cambios Realizados', showConfirmButton: false, timer: 1500 })
            );
    
            _Yu4sWA.push({
                id: GKMWbO.id,
                v_cr5gIj: G7aXHa,
                BNsiLQ: pHngQr
            })

            dispatch( KXY5wj_redux19( _Yu4sWA ) );
            dispatch( KXY5wj_redux16( '' ) );

        } else {
            
            let GfGU8r = '';
            let dDxVQ5 = [];

            _Yu4sWA.forEach(element => {
                if ( element.BNsiLQ === pHngQr ) { 
                    GfGU8r = element.id 
                    dDxVQ5.push({ 
                        id: element.id, 
                        BNsiLQ: element.BNsiLQ, 
                        v_cr5gIj: G7aXHa 
                    }) 
                } else { dDxVQ5.push({ 
                    id: element.id, BNsiLQ: 
                    element.BNsiLQ, 
                    v_cr5gIj: element.v_cr5gIj 
                }) }
            });

            await db.doc(`Vv1mUK/${ uid }/_mcOAEO/${ GfGU8r }`).update( unQqSW ).then(                
                Swal.fire({ position: 'top-end', icon: 'success', title: 'Actualizado', showConfirmButton: false, timer: 1500 }),           
                dispatch( KXY5wj_redux19( dDxVQ5 ) ),
                dispatch( KXY5wj_redux16( '' ) ),
            ).catch( e => console.log( e ) )

        }

        Swal.close();
    }
}

const NF0xmW = ( G7aXHa, zOajJq, Nokic5, uid ) => {
    return async( dispatch, getState ) => {
        let _JhqD29 = getState().woqtLQ._JhqD29;             

        let MQbjPy = { J2Qve0: Nokic5, OyCiyB: zOajJq }
        
        const HdeEvb = await db.collection(`Vv1mUK/${ uid }/_yuHjcZ`).add( MQbjPy ).then(
            Swal.fire({ position: 'top-end', icon: 'success', title: 'Cambios Realizados', showConfirmButton: false, timer: 1500 })
        );

        let c0nmUZ = { id: HdeEvb.id, OyCiyB: G7aXHa, J2Qve0: Nokic5 }

        _JhqD29.push( c0nmUZ )

        dispatch( KXY5wj_redux17( null ) );
        dispatch( KXY5wj_redux15( _JhqD29 ) );

        Swal.close()
    }
};

const WHOWeu = ( G7aXHa, zOajJq, uid, k7Z54Y ) => {
    return async( dispatch, getState ) => {
        let _B1MieD = getState().woqtLQ._B1MieD;         

        const JUrdfT = await db.collection(`Vv1mUK/${ uid }/_B1MieD`).add( { 
            B1MieD_d: zOajJq
         } ).then(
            Swal.fire({ position: 'top-end', icon: 'success', title: 'Cambios Realizados', showConfirmButton: false, timer: 1500 })
        );
        
        _B1MieD.push({ id:JUrdfT.id, B1MieD_d:G7aXHa, QsZLUV:k7Z54Y })        

        _B1MieD.sort(function(a, b) {
            if (a.B1MieD_d > b.B1MieD_d) { return 1; }
            if (a.B1MieD_d < b.B1MieD_d) { return -1; }            
            return 0;
          });
       
        dispatch( KXY5wj_redux9( _B1MieD ) );
        dispatch( KXY5wj_redux7( null ) );
        dispatch( KXY5wj_redux10( null ) );

        Swal.close();
    }
};

const a4nkG1 = ( G7aXHa, zOajJq, Nokic5, uid ) => {
    return async( dispatch, getState ) => {               
        const lvGSqC = getState().woqtLQ._B1MieD;
        let EKQCOK = [];

        let zyQsDN = { id: Nokic5, B1MieD_d: zOajJq }

        lvGSqC.forEach(element => {
            if (element.id != Nokic5) { EKQCOK.push({ id: element.id, B1MieD_d: element.B1MieD_d }) } else { EKQCOK.push({ id: element.id, B1MieD_d: G7aXHa }) }
        });

        await db.doc(`Vv1mUK/${ uid }/_B1MieD/${ Nokic5 }`).update( zyQsDN ).then(                
        Swal.fire({ position: 'top-end', icon: 'success', title: 'Actualizado', showConfirmButton: false, timer: 1500 }),            
            dispatch( KXY5wj_redux9( EKQCOK ) ),
            dispatch( KXY5wj_redux7( null ) ),
            dispatch( KXY5wj_redux13( null ) ),
            dispatch( KXY5wj_redux8( G7aXHa ) )
        ).catch( e => console.log( e ) ) 

        Swal.close();
    }
};

const KMRRBq = ( G7aXHa, zOajJq, Ymkh3A, uid ) => {
    return async( dispatch, getState ) => {
        const mlpEVA = getState().woqtLQ._JhqD29;
        const Nokic5 = getState().woqtLQ.Nokic5;        

        const CRu3oF = (list) => { if (list.id != Ymkh3A) { return true; } };
        const uRu7uI = mlpEVA.filter(CRu3oF);

        uRu7uI.push( { id: Ymkh3A, J2Qve0: Nokic5, OyCiyB: G7aXHa } )

        let h7nLC0 = { J2Qve0: Nokic5, OyCiyB: zOajJq }

        await db.doc(`Vv1mUK/${ uid }/_yuHjcZ/${ Ymkh3A }`).update( h7nLC0 ).then(                
            Swal.fire({ position: 'top-end', icon: 'success', title: 'Actualizado', showConfirmButton: false, timer: 1500 }),           
            dispatch( KXY5wj_redux15( uRu7uI ) ),
            dispatch( KXY5wj_redux18( '' ) ),
        ).catch( e => console.log( e ) )            

        Swal.close();
    }
};

export const zrQEiv = ( Nokic5, uid ) => {
    return async( dispatch, getState ) => {
        const CQEg8g = getState().woqtLQ._B1MieD;

        Swal.fire({ title: 'Estás seguro(a)?', text: "¡No podrás revertir esto!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Si, borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                db.doc(`Vv1mUK/${ uid }/_B1MieD/${ Nokic5 }`).delete();
                const neGBwE = (list) => { if (list.id != Nokic5) { return true; } }
                dispatch( KXY5wj_redux9( CQEg8g.filter(neGBwE) ) );
                dispatch( KXY5wj_redux8( null ) );
                dispatch( KXY5wj_redux14( null ) );
            }
        })
        
    };
};

export const xdzizj = ( pDrZLo, uid ) => {
    return async( dispatch, getState ) => {
        const PThwmz = getState().woqtLQ._JhqD29;

        Swal.fire({ title: 'Estás seguro(a)?', text: "¡No podrás revertir esto!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Si, borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                db.doc(`Vv1mUK/${ uid }/_yuHjcZ/${ pDrZLo }`).delete();
                const pOOgBT = (list) => { if (list.id != pDrZLo) { return true; } };
                dispatch( KXY5wj_redux15( PThwmz.filter(pOOgBT) ) );                
            }
        })
        
    };
};


export const tJliTk = ( HRBtyR, uid ) => {
    return async( dispatch, getState ) => {
        const Qnh8zW = getState().woqtLQ._Yu4sWA;
        let arTBfM = '';

        Qnh8zW.forEach(element => { if (element.BNsiLQ === HRBtyR) { arTBfM = element.id } });

        Swal.fire({ title: 'Estás seguro(a)?', text: "¡No podrás revertir esto!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Si, borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                db.doc(`Vv1mUK/${ uid }/_mcOAEO/${ arTBfM }`).delete();
                const uXIOjw = (list) => { if (list.id != arTBfM) { return true; } };
                dispatch( KXY5wj_redux19( Qnh8zW.filter(uXIOjw) ) );  
                dispatch( KXY5wj_redux16( '' ) );
            }
        })
    };
};

export const KXY5wj_redux4 = ( zOajJq ) => ({
    type: types.S0nggP,
    payload: zOajJq
});

export const KXY5wj_redux5 = ( accion7 ) => ({
    type: types.YAoD8A,
    payload: accion7
});

export const KXY5wj = ( user, uid ) => {
    return async( dispatch ) => {
        const KhqGKF  =  await WgGPPD( ); 
        const fNuSOK  =  await SPaeex( ); 
        const AiKlLK  =  await pa8Nzl( user );
        let SMFops    =  await VWDgrp( uid ); 
        const NX0Y00  =  await wfcD5V( uid );
        const YEcmmQ  =  await UO8I6U( );
        const wmOizl  =  await pkGxSp( );

        if (! SMFops) { SMFops = { a2_1: '', a2_2: '', a2_3: '', a2_4: '', a2_5: '', a2_6: '', a2_7: '' }; }

        dispatch( Sz2WYe( NX0Y00, YEcmmQ, wmOizl ) );
              
        dispatch( KXY5wj_redux( KhqGKF ) );
        dispatch( KXY5wj_redux2( fNuSOK ) );
        dispatch( KXY5wj_redux3( AiKlLK ) );
        dispatch( c6YDrX( SMFops ) );
        dispatch( KXY5wj_redux11( YEcmmQ ) );
        dispatch( KXY5wj_redux12( wmOizl ) );
    }
};

export const lohjdG = ( uid, id ) => {
    return async( dispatch, getState ) => {
        const yxsECJ  =  await Bhbvgd( uid, id );   

        const YEcmmQ = getState().woqtLQ.doQbZy;
        const wmOizl = getState().woqtLQ.DsiYqA;

        dispatch( OmMEx1( yxsECJ, YEcmmQ, wmOizl ) );
        Swal.close();
    }
}

export const lopPid = ( uid, id ) => {
    return async( dispatch, getState ) => {
        const XOjz2z  =  await KCZUkK( uid, id );

        const YEcmmQ = getState().woqtLQ.doQbZy;
        const wmOizl = getState().woqtLQ.DsiYqA;

        dispatch( jG79m0( XOjz2z, YEcmmQ, wmOizl ) ); 
        Swal.close();
    }
}

export const Sz2WYe = ( NX0Y00, YEcmmQ, wmOizl ) => {
    return async( dispatch ) => { let UNNMGP  = '', XGWEHB  = '', vHRHhc  = []; for (let goFsaL = 0; goFsaL < NX0Y00.length; goFsaL++) { let SjckG4 = NX0Y00[ goFsaL ]; let LRN0YS = SjckG4.B1MieD_d; for (let cL8ZXM = 0; cL8ZXM < LRN0YS.length; cL8ZXM++) { UNNMGP = UNNMGP + LRN0YS.substr(cL8ZXM,1); YEcmmQ.forEach(element => { if (element[UNNMGP]) { XGWEHB = XGWEHB + element[UNNMGP]; UNNMGP = ''; } else if (UNNMGP === 'ZfDhJRkZFT7TDwV') { XGWEHB = XGWEHB + '.'; UNNMGP = ''; } else { if (UNNMGP.length === 15) { XGWEHB = XGWEHB + UNNMGP.substr(0,1); UNNMGP = ''; } } }); }; XGWEHB = XGWEHB + '|'; }; vHRHhc.push( XGWEHB ); let BTDU6D = '', TkPi5B = '', bZpLCo = ''; for (let yHtwZK = 0; yHtwZK < vHRHhc.length; yHtwZK++) { let RVsaYb = vHRHhc[yHtwZK]; for (let XkCg9g = 0; XkCg9g < RVsaYb.length; XkCg9g++) { if (RVsaYb.substr(XkCg9g,1) != '|') { BTDU6D = BTDU6D + RVsaYb.substr(XkCg9g,1); } else { for (let mdDnXF = 0; mdDnXF < BTDU6D.length; mdDnXF++) { TkPi5B = TkPi5B + BTDU6D.substr(mdDnXF,1); wmOizl.forEach(element => { if (element[TkPi5B]) { bZpLCo = bZpLCo + element[TkPi5B]; TkPi5B = '' } else if (TkPi5B === 'ZfDhJRkZFT7TDwV') { bZpLCo = bZpLCo + '.'; TkPi5B = '' } else { if (TkPi5B.length === 15) { bZpLCo = bZpLCo + BTDU6D.substr(0,1); TkPi5B = ''; } } }); } bZpLCo = bZpLCo + '|'; TkPi5B = ''; BTDU6D = ''; } } }; let nLa9RA = [], K5mTzY = [], q3Og6l = '', m5H0dz = [], HIPJo8 = 0, HxzvDs = '', eIJ60D = []; for (let BwW5Iv = 0; BwW5Iv < NX0Y00.length; BwW5Iv++) { nLa9RA.push( NX0Y00[BwW5Iv].id ); eIJ60D.push( NX0Y00[BwW5Iv].QsZLUV ) }; for (let DuaG4a = 0; DuaG4a < bZpLCo.length; DuaG4a++) { if (bZpLCo.substr(DuaG4a,1) != '|') { q3Og6l = q3Og6l + bZpLCo.substr(DuaG4a,1); } else { HIPJo8 = q3Og6l.length - 1; for (let eIJ60D = 0; eIJ60D < q3Og6l.length; eIJ60D++) { HxzvDs = HxzvDs + q3Og6l[HIPJo8]; HIPJo8 = HIPJo8 - 1 } K5mTzY.push( HxzvDs ); q3Og6l = ''; HxzvDs = ''; } }; for (let Z7YisV = 0; Z7YisV < nLa9RA.length; Z7YisV++) { m5H0dz.push({ id: nLa9RA[Z7YisV], B1MieD_d: K5mTzY[Z7YisV] }) }; dispatch( KXY5wj_redux9( m5H0dz ) ); }
};

export const jG79m0 = ( XOjz2z, YEcmmQ, wmOizl ) => {
    return async( dispatch ) => {
        let UNNMGP  = '', XGWEHB  = '', vHRHhc  = [], zPJS75 = []; for (let goFsaL = 0; goFsaL < XOjz2z.length; goFsaL++) { let SjckG4 = XOjz2z[ goFsaL ]; let LRN0YS = SjckG4.OyCiyB; for (let cL8ZXM = 0; cL8ZXM < LRN0YS.length; cL8ZXM++) { UNNMGP = UNNMGP + LRN0YS.substr(cL8ZXM,1); YEcmmQ.forEach(element => { if (element[UNNMGP]) { XGWEHB = XGWEHB + element[UNNMGP]; UNNMGP = ''; } else if (UNNMGP === 'ZfDhJRkZFT7TDwV') { XGWEHB = XGWEHB + '.'; UNNMGP = ''; } else { if (UNNMGP.length === 15) { XGWEHB = XGWEHB + UNNMGP.substr(0,1); UNNMGP = ''; } } }); }; XGWEHB = XGWEHB + '|'; }; vHRHhc.push( XGWEHB ); let BTDU6D = '', TkPi5B = '', bZpLCo = ''; for (let yHtwZK = 0; yHtwZK < vHRHhc.length; yHtwZK++) { let RVsaYb = vHRHhc[yHtwZK]; for (let XkCg9g = 0; XkCg9g < RVsaYb.length; XkCg9g++) { if (RVsaYb.substr(XkCg9g,1) != '|') { BTDU6D = BTDU6D + RVsaYb.substr(XkCg9g,1); } else { for (let mdDnXF = 0; mdDnXF < BTDU6D.length; mdDnXF++) { TkPi5B = TkPi5B + BTDU6D.substr(mdDnXF,1); wmOizl.forEach(element => { if (element[TkPi5B]) { bZpLCo = bZpLCo + element[TkPi5B]; TkPi5B = '' } else if (TkPi5B === 'ZfDhJRkZFT7TDwV') { bZpLCo = bZpLCo + '.'; TkPi5B = '' } else { if (TkPi5B.length === 15) { bZpLCo = bZpLCo + BTDU6D.substr(0,1); TkPi5B = ''; } } }); } bZpLCo = bZpLCo + '|'; TkPi5B = ''; BTDU6D = ''; } } }; let nLa9RA = [], K5mTzY = [], q3Og6l = '', m5H0dz = [], HIPJo8 = 0, HxzvDs = '', eIJ60D = [];
        
        for (let BwW5Iv = 0; BwW5Iv < XOjz2z.length; BwW5Iv++) { 
            nLa9RA.push( XOjz2z[BwW5Iv].id ); 
            zPJS75.push( XOjz2z[BwW5Iv].J2Qve0 );
        };

        for (let DuaG4a = 0; DuaG4a < bZpLCo.length; DuaG4a++) { if (bZpLCo.substr(DuaG4a,1) != '|') { q3Og6l = q3Og6l + bZpLCo.substr(DuaG4a,1); } else { HIPJo8 = q3Og6l.length - 1; for (let eIJ60D = 0; eIJ60D < q3Og6l.length; eIJ60D++) { HxzvDs = HxzvDs + q3Og6l[HIPJo8]; HIPJo8 = HIPJo8 - 1 } K5mTzY.push( HxzvDs ); q3Og6l = ''; HxzvDs = ''; } }; for (let Z7YisV = 0; Z7YisV < nLa9RA.length; Z7YisV++) { m5H0dz.push({ id: nLa9RA[Z7YisV], OyCiyB: K5mTzY[Z7YisV], J2Qve0: zPJS75[Z7YisV] }) };

        dispatch( KXY5wj_redux15( m5H0dz ) );
    }
};

export const OmMEx1 = ( yxsECJ, YEcmmQ, wmOizl ) => {
    return async( dispatch ) => {
        let UNNMGP  = '', XGWEHB  = '', vHRHhc  = [], zPJS75 = []; for (let goFsaL = 0; goFsaL < yxsECJ.length; goFsaL++) { let SjckG4 = yxsECJ[ goFsaL ]; let LRN0YS = SjckG4.v_cr5gIj; for (let cL8ZXM = 0; cL8ZXM < LRN0YS.length; cL8ZXM++) { UNNMGP = UNNMGP + LRN0YS.substr(cL8ZXM,1); YEcmmQ.forEach(element => { if (element[UNNMGP]) { XGWEHB = XGWEHB + element[UNNMGP]; UNNMGP = ''; } else if (UNNMGP === 'ZfDhJRkZFT7TDwV') { XGWEHB = XGWEHB + '.'; UNNMGP = ''; } else { if (UNNMGP.length === 15) { XGWEHB = XGWEHB + UNNMGP.substr(0,1); UNNMGP = ''; } } }); }; XGWEHB = XGWEHB + '|'; }; vHRHhc.push( XGWEHB ); let BTDU6D = '', TkPi5B = '', bZpLCo = ''; for (let yHtwZK = 0; yHtwZK < vHRHhc.length; yHtwZK++) { let RVsaYb = vHRHhc[yHtwZK]; for (let XkCg9g = 0; XkCg9g < RVsaYb.length; XkCg9g++) { if (RVsaYb.substr(XkCg9g,1) != '|') { BTDU6D = BTDU6D + RVsaYb.substr(XkCg9g,1); } else { for (let mdDnXF = 0; mdDnXF < BTDU6D.length; mdDnXF++) { TkPi5B = TkPi5B + BTDU6D.substr(mdDnXF,1); wmOizl.forEach(element => { if (element[TkPi5B]) { bZpLCo = bZpLCo + element[TkPi5B]; TkPi5B = '' } else if (TkPi5B === 'ZfDhJRkZFT7TDwV') { bZpLCo = bZpLCo + '.'; TkPi5B = '' } else { if (TkPi5B.length === 15) { bZpLCo = bZpLCo + BTDU6D.substr(0,1); TkPi5B = ''; } } }); } bZpLCo = bZpLCo + '|'; TkPi5B = ''; BTDU6D = ''; } } }; let nLa9RA = [], K5mTzY = [], q3Og6l = '', m5H0dz = [], HIPJo8 = 0, HxzvDs = '', eIJ60D = [];
        
        for (let BwW5Iv = 0; BwW5Iv < yxsECJ.length; BwW5Iv++) { 
            nLa9RA.push( yxsECJ[BwW5Iv].id ); 
            zPJS75.push( yxsECJ[BwW5Iv].BNsiLQ );
        };

        for (let DuaG4a = 0; DuaG4a < bZpLCo.length; DuaG4a++) { if (bZpLCo.substr(DuaG4a,1) != '|') { q3Og6l = q3Og6l + bZpLCo.substr(DuaG4a,1); } else { HIPJo8 = q3Og6l.length - 1; for (let eIJ60D = 0; eIJ60D < q3Og6l.length; eIJ60D++) { HxzvDs = HxzvDs + q3Og6l[HIPJo8]; HIPJo8 = HIPJo8 - 1 } K5mTzY.push( HxzvDs ); q3Og6l = ''; HxzvDs = ''; } }; for (let Z7YisV = 0; Z7YisV < nLa9RA.length; Z7YisV++) { m5H0dz.push({ id: nLa9RA[Z7YisV], v_cr5gIj: K5mTzY[Z7YisV], BNsiLQ: zPJS75[Z7YisV] }) };
                
        let G46yiq = '';
        let NzjPfQ = [];

        m5H0dz.forEach(element => {
            let Myijg9 = element.v_cr5gIj;
            for (let eSH8SZ = 0; eSH8SZ < Myijg9.length; eSH8SZ++) {
                if (Myijg9.substr(eSH8SZ,1) != 'C') {                   
                    G46yiq = G46yiq + Myijg9.substr(eSH8SZ,1)
                } else {
                    if (Myijg9.substr(eSH8SZ + 1,1) != '<') {
                        G46yiq = G46yiq + Myijg9.substr(eSH8SZ,1)
                    }
                }
            }

            NzjPfQ.push({ v_cr5gIj: G46yiq, BNsiLQ: element.BNsiLQ, id: element.id })

            G46yiq = '';
        });

        dispatch( KXY5wj_redux19( NzjPfQ ));
    }
};

const KXY5wj_redux = ( KhqGKF ) => ({
    type: types.RQghbW,
    payload: KhqGKF
});

const KXY5wj_redux2 = ( fNuSOK ) => ({
    type: types.TE6IEk,
    payload: fNuSOK
});

const KXY5wj_redux3 = ( AiKlLK ) => ({
    type: types.qq3uMN,
    payload: AiKlLK
});

const c6YDrX = ( SMFops ) => ({
    type: types.pnU9GN,
    payload: SMFops
});

export const KXY5wj_redux7 = ( iTQXoE ) => ({
    type: types._YbYXGh,
    payload: iTQXoE
});

export const KXY5wj_redux8 = ( v3xq2v ) => ({
    type: types._nf9qZs,
    payload: v3xq2v
});

export const KXY5wj_redux9 = ( NX0Y00 ) => {
    return async( dispatch ) => {
        NX0Y00.sort(function(a, b) {
            if (a.B1MieD_d > b.B1MieD_d) { return 1; }
            if (a.B1MieD_d < b.B1MieD_d) { return -1; }            
            return 0;
        });

        dispatch( KXY5wj_redux9_1( NX0Y00 ) )
    }
}

const KXY5wj_redux9_1 = ( NX0Y00 ) => ({
    type: types._B1MieD,
    payload: NX0Y00
});

export const KXY5wj_redux10 = ( ZKP82G ) => ({
    type: types._xy2pwC,
    payload: ZKP82G
});

const KXY5wj_redux11 = ( YEcmmQ ) => ({
    type: types.doQbZy,
    payload: YEcmmQ
});

const KXY5wj_redux12 = ( wmOizl ) => ({
    type: types.DsiYqA,
    payload: wmOizl
});

export const KXY5wj_redux13 = ( ZNiPv7 ) => ({
    type: types.GyBvN1,
    payload: ZNiPv7
});

export const KXY5wj_redux14 = ( g1cVG7 ) => ({
    type: types.Nokic5,
    payload: g1cVG7
});

export const KXY5wj_redux15 = ( JSCt6M ) => {
    return async( dispatch ) => {
        JSCt6M.sort(function(a, b) {
            if (a.OyCiyB > b.OyCiyB) { return 1; }            
            if (a.OyCiyB < b.OyCiyB) { return -1; }            
            return 0;
        });

        dispatch( KXY5wj_redux15_1( JSCt6M ) )
    }
}

export const KXY5wj_redux15_1 = ( JSCt6M ) => ({
    type: types._JhqD29,
    payload: JSCt6M
});

export const KXY5wj_redux16 = ( D55uxL ) => ({
    type: types.VEdDGQ,
    payload: D55uxL
});

export const KXY5wj_redux17 = ( fiL2Bf ) => ({
    type: types.JMoOyX,
    payload: fiL2Bf
});

export const KXY5wj_redux18 = ( eHQy5Y ) => ({
    type: types.nyrMl1,
    payload: eHQy5Y
});

export const KXY5wj_redux19 = ( nj2ZIm ) => ({
    type: types._Yu4sWA,
    payload: nj2ZIm
});

export const KXY5wj_redux20 = ( sPHks0 ) => ({
    type: types.whhOv9,
    payload: sPHks0
});

export const KXY5wj_redux21 = ( ItEHwb ) => ({
    type: types.LIXrRU,
    payload: ItEHwb
});

export const KXY5wj_redux22 = ( BgmpNJ ) => ({
    type: types.gtnZsC,
    payload: BgmpNJ
});