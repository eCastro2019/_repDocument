import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { actualizarEmpresas, guardarEmpresa } from '../../actions/conexiones';

export const Catalogo_Empresa = () => {

    const dispatch = useDispatch();
    const { activeEmpresa } = useSelector(state => state.conexiones );    
    const { listEmpresas } = useSelector(state => state.conexiones );
    const emp = [];
    let ruta = '';
    let isUpd = '';
    let saveList = {};

    listEmpresas.forEach(element => {
        emp.push(
            element.name
        )
    });      

    const [state, setstate] = useState( '' )
    const [ formValues, handleInputChange ] = useForm( activeEmpresa );

    let { name = '', direccion = '', dropbox = '', logo = '' } = formValues;

    const handleImagen = (e) => {        
        setstate (
            e.target.files[0]
        )
    };

    const saveEmpresas = () => {

        if ( emp.includes( name.toUpperCase() ) === false ) {
            if (name.replace(/ /g, "").length >= 1 && direccion.replace(/ /g, "").length >= 1 && dropbox.replace(/ /g, "").length >= 1) {
            
                if ( state !== '' ) {
                    saveList = {
                        name: name.toUpperCase(),
                        state,
                        direccion: direccion,
                        dropbox: dropbox
                    };    
        
                    dispatch( guardarEmpresa( saveList ) );
                    document.getElementById("file").value = "";
                };            
                
            }
        };        
                
    };

    const actualizar = () => {
        if ( state === '' ) {
            ruta = logo       
            isUpd = 'no'
        } else {
            ruta = state
            isUpd = 'si'
        }     
        
        saveList = {
            id: activeEmpresa.id,
            name: name.toUpperCase(),
            ruta,
            direccion: direccion,
            dropbox: dropbox,     
            isUpd: isUpd       
        };

        dispatch( actualizarEmpresas( saveList ) );
    };

    return (
        <div className='container formTam'>
            {
                ( ! activeEmpresa )
                ?
                    <button onClick={ saveEmpresas } className='botton' type='button'>AGREGAR EMPRESA</button>
                :   <button onClick={ actualizar } className='botton' type='button'>ACTUALIZAR EMPRESA</button>
            } 

            <br />
            <br />

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>Nombre de la empresa</div>
                <div className='col-8'> 
                    { (emp.includes( name.toUpperCase() ) && ! activeEmpresa) && <h1>Empresa ya existe !.</h1> }
                    <input className='inputCR' type='text' id='name' name='name' value={ name } autoComplete="off" style={{ textTransform: 'uppercase'}} onChange={ handleInputChange } required/> 
                    { ( name.replace(/ /g, "").length < 1 ) && <p className='error'>No puede estar vacio.!</p> }
                </div>
            </div>

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>Logo</div>
                <div className='col-8'> 
                    {
                        ( activeEmpresa ) &&
                            <img src={ logo } style={{ width: '150px', height: '80px' }} alt='logo' />
                    }
                    <input type='file' id='file' style={{ width: '100%' }} autoComplete="off" name='file' onChange={ handleImagen } /> 
                </div>
            </div>

            <div className='row' style={{ textAlign:'left', paddingTop:'10px' }}>
                <div className='col-4'>Direccion</div>
                <div className='col-8'> 
                    <textarea className='inputCR' name='direccion' value={ direccion } autoComplete="off" onChange={ handleInputChange } required/> 
                    { ( direccion.replace(/ /g, "").length < 1 ) && <p className='error'>No puede estar vacio.!</p> }
                </div>                            
            </div>

            <div className='row' style={{ textAlign:'left', paddingTop:'10px' }}>
                <div className='col-4'>Cuentas de dropbox</div>
                <div className='col-8'> 
                    <textarea className='inputCR' name='dropbox' value={ dropbox } autoComplete="off" onChange={ handleInputChange } required/> 
                    { ( dropbox.replace(/ /g, "").length < 1 ) && <p className='error'>No puede estar vacio.!</p> }
                </div>
            </div> 
        </div>
    )
}
