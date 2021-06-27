import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { ArchivosList } from './ArchivosList';
import { nuevoArchivo } from '../../actions/nomenclatura';
import { EditArchi } from './EditArchi';

export const Archivo = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange, reset ] = useForm( );
    const { activeArchi } = useSelector( state => state.nomenclatura );   
    const { s2021_01 } = useSelector(state => state.nomenclatura);
    let resulSAve = {};
    let { 
        l202104 = '', np001 = '', l202105 = ''
        } = formValues;


    const guardarArchivos = (e) =>  {
        e.preventDefault(); 
        let corr_id = (s2021_01.shift().Ye2T2Y * 1) + 1

        if (l202104.replace(/ /g, "").length >= 1 && np001.replace(/ /g, "").length >= 1 && l202105.replace(/ /g, "").length >= 1) {
            
            resulSAve = {
                l202104: l202104,
                np001: np001,
                l202105: l202105,
                Ye2T2Y: corr_id
            };

            dispatch( nuevoArchivo( resulSAve ) );   
            reset();
        }        
    };

    return (
        <div style={{ backgroundColor: 'white', fontSize: '16px' }}>
            <center>
                <h1><b>Archivos y Variables</b></h1>
            </center>

            {
                ( ! activeArchi ) 
                ?
                    <div>
                        <center>
                            <label> Nombre del Proyecto </label> <br />
                            <form onSubmit={ guardarArchivos }><input type='text' name='np001' required value={ np001 } onChange={ handleInputChange } /></form>            
                        </center>
                        
                        <div className='row'>
                            <div className='col-6'>
                                <label> Codigo </label> <br />
                                <form onSubmit={ guardarArchivos }> <input name='l202104' type='text' style={{ width:'150px', textAlign:'center' }} required value={ l202104 } onChange={ handleInputChange } ></input> </form>
                            </div>

                            <div className='col-6'>
                                <label> Descripcion </label> <br />
                                <form onSubmit={ guardarArchivos }> <input type='text' style={{ width:'90%' }} name='l202105' required value={ l202105 } onChange={ handleInputChange }></input></form>                   
                            </div>
                        </div>     

                        <ArchivosList />            
                    </div>
                : <EditArchi />
            }  
        </div>      
    )
}
