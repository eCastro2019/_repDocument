import { types } from "../types/types";

const initialState = {
    BFUstM: null,
    RQghbW: [],
    TE6IEk: [],
    doQbZy: [],
    qq3uMN: null,
    S0nggP: null,
    YAoD8A: null,
    DsiYqA: null,
    pnU9GN: {
        a2_1: '', a2_2: '', a2_3: '', a2_4: '', a2_5: '', a2_6: '', a2_7: ''
    },
    _YbYXGh: null,
    _xy2pwC: null,
    _nf9qZs: null,
    _B1MieD: [],
    _JhqD29: [],
    _Yu4sWA: [],
    GyBvN1: null,
    Nokic5: null,
    VEdDGQ: '',
    JMoOyX: null,
    nyrMl1: '',
    whhOv9: null,
    LIXrRU: false,
    gtnZsC: '',
}

export const woqtLQ = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.BFUstM:                       
            return {
                ...state,
                BFUstM: action.payload
            }        

        case types.RQghbW:
            return {
                ...state,
                RQghbW: action.payload
            }

        case types.TE6IEk:
            return {
                ...state,
                TE6IEk: action.payload
            }   

        case types.doQbZy:
            return {
                ...state,
                doQbZy: action.payload
            }  
        
        case types.qq3uMN:
            return {
                ...state,
                qq3uMN: action.payload
            } 

        case types.S0nggP:
            return {
                ...state,
                S0nggP: action.payload
            } 

        case types.YAoD8A:
            return {
                ...state,
                YAoD8A: action.payload
            } 

        case types.DsiYqA:
            return {
                ...state,
                DsiYqA: action.payload
            }

        case types.pnU9GN:
            return {
                ...state,
                pnU9GN: action.payload
            }
            
        case types._YbYXGh:
            return {
                ...state,
                _YbYXGh: action.payload
            }

        case types._nf9qZs:
            return {
                ...state,
                _nf9qZs: action.payload
            }

        case types._B1MieD:
            return {
                ...state,
                _B1MieD: action.payload                
            }

        case types._JhqD29:
            return {
                ...state,
                _JhqD29: action.payload                
            }

        case types._Yu4sWA:
            return {
                ...state,
                _Yu4sWA: action.payload
            }

        case types._xy2pwC:
            return {
                ...state,
                _xy2pwC: action.payload                
            }    
            
        case types.GyBvN1:
            return {
                ...state,
                GyBvN1: action.payload                
            } 

        case types.Nokic5:
            return {
                ...state,
                Nokic5: action.payload                
            } 

        case types.VEdDGQ:
            return {
                ...state,
                VEdDGQ: action.payload
            }

        case types.JMoOyX:
            return {
                ...state,
                JMoOyX: action.payload
            }

        case types.nyrMl1:
            return {
                ...state,
                nyrMl1: action.payload
            }

        case types.whhOv9:
            return {
                ...state,
                whhOv9: action.payload
            }

        case types.LIXrRU:
            return {
                ...state,
                LIXrRU: action.payload
            }

        case types.gtnZsC:
            return {
                ...state,
                gtnZsC: action.payload
            }
        
        case types.purgar:
            return {
                BFUstM: null,
                RQghbW: [],
                TE6IEk: [],
                doQbZy: [],
                qq3uMN: null,
                S0nggP: null,
                YAoD8A: null,
                DsiYqA: null,
                pnU9GN: {
                    a2_1: '', a2_2: '', a2_3: '', a2_4: '', a2_5: '', a2_6: '', a2_7: ''
                },
                _YbYXGh: null,
                _xy2pwC: null,
                _nf9qZs: null,
                _B1MieD: [],
                _JhqD29: [],
                _Yu4sWA: [],
                GyBvN1: null,
                Nokic5: null,    
                VEdDGQ: '',      
                JMoOyX: null,   
                nyrMl1: '',
                whhOv9: null,
                LIXrRU: false,
                gtnZsC: '',
            }

        default:
            return state;        
    }
}
