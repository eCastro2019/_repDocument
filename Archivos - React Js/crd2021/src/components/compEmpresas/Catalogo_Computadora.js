import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarComputadora, guardarComputadora } from '../../actions/conexiones';
import { useForm } from '../../hooks/useForm';

export const Catalogo_Computadora = () => {

    const dispatch = useDispatch();
    const { activePc } = useSelector(state => state.conexiones);
    const { activeEmpresa } = useSelector(state => state.conexiones);
    const [ formValues, handleInputChange, reset ] = useForm( activePc );
    const { listEmpresas } = useSelector(state => state.conexiones);
    const { listComputadorasCat } = useSelector(state => state.conexiones);
    const { accion4 } = useSelector(state => state.conexiones);
    let pcList = [];
    let updatePC = {};

    let { id_THgDam = 'Listado de Empresas', pcname = '', team_id = '', team_pass = '', any_id = '', any_pass = '', sup_id = '', sup_pass = '' } = formValues;
    
    if (id_THgDam !== 'Listado de Empresas') {
        ( listComputadorasCat ) &&
            listComputadorasCat.forEach(element => {
                if ( element.id_THgDam === id_THgDam ) {
                    pcList.push(
                        element.pcname
                    )
                }
            }); 
    };

    const saveComputadora = () => {
        if (id_THgDam !== 'Listado de Empresas' && pcList.includes( pcname ) === false) { 
            let saveList = {
                id_THgDam: id_THgDam,
                pcname: pcname,
                team_id: team_id,
                team_pass: team_pass,
                any_id: any_id,
                any_pass: any_pass,
                any_pass: any_pass,
                sup_id: sup_id,
                sup_pass: sup_pass
            }
                     
            dispatch( guardarComputadora( saveList ) );
            reset();
        }
    };

    const actualizarPc = () => {
        updatePC = {
            id: activePc.id,
            id_THgDam: id_THgDam,
            pcname: pcname,
            team_id: team_id,
            team_pass: team_pass,
            any_id: any_id,
            any_pass: any_pass,
            any_pass: any_pass,
            sup_id: sup_id,
            sup_pass: sup_pass
        };

        dispatch( actualizarComputadora( updatePC ) );
    };

    return (
        <div className='container formTam'>
            {
                ( ! activePc )
                ?
                    <button onClick={ saveComputadora } className='botton' type='button'>AGREGAR COMPUTADORA</button>
                :   <button onClick={ actualizarPc } className='botton' type='button'>ACTUALIZAR COMPUTADORA</button>
            } 
            
            <br /><br />
            
            <div className='row' style={{ textAlign:'left', backgroundColor: 'white' }}>
                <div className='col-4'>Empresa asignar</div>
                <div className='col-8'>
                    {
                        ( ! activePc ) &&
                        <select 
                            name='id_THgDam' 
                            value={ id_THgDam } 
                            onChange={handleInputChange}
                            style={{ width: '100%' }}
                        >
                            <option>
                                Listado de Empresas
                            </option>
                            {
                                listEmpresas.map(emp =>                         
                                    <option key={emp.id} value={emp.id}>
                                        {emp.name}
                                    </option>
                                )
                            }
                        </select>  
                    }

                    {
                        ( activePc ) &&
                        <h1>{ activeEmpresa.name }</h1>
                    }
                    {
                        ( accion4 ) &&
                        <h1>{ accion4.name }</h1>
                    }
                                      
                    { ( id_THgDam === 'Listado de Empresas' ) && <p className='error'>No ha seleccionado ninguna empresa.!</p> }
                </div>
            </div>

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>Nombre de la computadora</div>
                <div className='col-8'>
                    <input className='inputCR' type='text' name='pcname' onChange={ handleInputChange } value={ pcname } autoComplete="off"/>
                    { (pcList.includes( pcname ) && ! activePc) && <h1>Empresa ya existe !.</h1> } 
                </div>
            </div>

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>TeamViewer</div>
                <div className='col-8'> 
                    <input className='inputCR' type='text' name='team_id' value={ team_id } onChange={ handleInputChange } autoComplete="off" placeholder='ID' />
                    <input className='inputCR' type='text' name='team_pass' value={ team_pass } onChange={ handleInputChange }  autoComplete="off" placeholder='Password' />
                </div>
            </div>

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>AnyDesk</div>
                <div className='col-8'> 
                    <input className='inputCR' type='text' name='any_id' value={ any_id } onChange={ handleInputChange } autoComplete="off" placeholder='ID' />
                    <input className='inputCR' type='text' name='any_pass' value={ any_pass } onChange={ handleInputChange } autoComplete="off" placeholder='Password' />
                </div>
            </div>

            <div className='row' style={{ textAlign:'left' }}>
                <div className='col-4'>Supremo</div>
                <div className='col-8'> 
                    <input className='inputCR' type='text' name='sup_id' value={ sup_id } onChange={ handleInputChange } autoComplete="off" placeholder='ID' />
                    <input className='inputCR' type='text' name='sup_pass' value={ sup_pass } onChange={ handleInputChange } autoComplete="off" placeholder='Password' />
                </div>
            </div>
        </div>
    )
}
