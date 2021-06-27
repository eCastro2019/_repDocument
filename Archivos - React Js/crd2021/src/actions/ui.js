import { types } from "../types/types";

export const setError = ( err ) => ({
    type: types.uiSetError, 
    payload: err
});
export const removeError = () => ({
    type: types.uiRemoveError
});

export const setPais = ( pais ) => ({
    type: types.uiSetPais, 
    payload: pais
});
export const removePais = () => ({
    type: types.uiRemovePais
});

export const startLoading = () => ({
    type: types.uiStartLoading
});
export const finishLoading = () => ({
    type: types.uiFinishLoading
});
