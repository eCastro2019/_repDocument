import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { actualizarArchivoNomen } from '../../actions/nomenclatura';

export const EditArchi = () => {

    const dispatch = useDispatch();
    const { activeArchi } = useSelector( state => state.nomenclatura );   
    const [ formValues, handleInputChange ] = useForm( activeArchi );

    const { id, np001, l202104, l202105 } = formValues;

    const actualizarArchivo = (e) => {
        e.preventDefault(); 

        dispatch( actualizarArchivoNomen( formValues ) );

    };

    return (
        <>
            <center>
                <label> Nombre del Proyecto </label> <br />
                <form onSubmit={ actualizarArchivo }><input type='text' name='np001' required value={ np001 } onChange={ handleInputChange } /></form>            
            </center>
            
            <div className='row'>
                <div className='col-6'>
                    <label> Codigo </label> <br />
                    <form onSubmit={ actualizarArchivo }> <input name='l202104' type='text' style={{ width:'150px', textAlign:'center' }} required value={ l202104 } onChange={ handleInputChange } ></input> </form>
                </div>

                <div className='col-6'>
                    <label> Descripcion </label> <br />
                    <form onSubmit={ actualizarArchivo }> <input type='text' style={{ width:'90%' }} name='l202105' required value={ l202105 } onChange={ handleInputChange }></input></form>                   
                </div>
            </div>
        </>
    )
}
