import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { rutasReducer } from '../reducers/rutasReducer';
import { uiReducer } from '../reducers/uiReducer';
import { accionReducer } from '../reducers/accionReducer';
import { nomenclaturaReducer } from '../reducers/nomenclaturaReducer';
import { conexionesReducer } from '../reducers/conexionesReducer';
import { woqtLQ } from '../reducers/woqtLQ';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer, 
    ui: uiReducer, 
    rutas: rutasReducer,
    acciones: accionReducer,
    nomenclatura: nomenclaturaReducer,
    conexiones: conexionesReducer,
    woqtLQ: woqtLQ,
})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    ) 
);
