import { types } from "../types/types";

export const agregarRuta = ( value ) => ({
    type: types.rutValue,
    payload: value
});