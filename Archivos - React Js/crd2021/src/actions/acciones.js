import { types } from "../types/types";

export const accionUno = ( value ) => ({
    type: types.accUno,
    payload: value
});

export const accionDos = ( value ) => ({
    type: types.accionDos,
    payload: value
});