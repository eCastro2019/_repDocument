import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { accionUno } from '../../actions/acciones';
import { nomenclaturaActive, nuevaNomenclaturaBD, actualizarNomenclatura, nomenclaturaDELETE } from '../../actions/nomenclatura';
import { useForm } from '../../hooks/useForm';

export const BaseData = () => {

    const dispatch = useDispatch();
    const { accion1 } = useSelector( state => state.acciones );
    const { nomenDB } = useSelector(state => state.nomenclatura);
    const { activeNomen } = useSelector(state => state.nomenclatura);
    const { id, cod1, des_db, cod2, des_ta, cod3, des_camp } = activeNomen;
    let [ formValues, handleInputChange ] = useForm( );
    let data = {};

    let { 
          rebor11, newCod1 = cod1, newDes1 = des_db, newCod2 = cod2, 
          newDes2 = des_ta, newCod3 = cod3, newDes3 = des_camp 
        } = formValues;

    const buscadorFilter = (e) => {
        let filter, table, tr, td, i, txtValue;
        let kif524 = e.target.getAttribute('id');
        
        filter = rebor11.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td  = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    };

    const buscador = (e) => { 

        let kif524 = e.target.getAttribute('id');
        dispatch( accionUno( kif524 ) );

    };    

    const nuevo = () => {
        let corr_id = (nomenDB.shift().Ye2T2Y * 1) + 1
        let nuevaBD = {
            cod1        : '',
            des_bd      : '',
            cod2        : '',
            des_ta      : '',
            cod3        : '',
            des_camp    : '',
            Ye2T2Y      : corr_id
        }

        dispatch( nuevaNomenclaturaBD( nuevaBD ) );
    };

    const guardarNomenBD = ( ) => {
        data = {
            id          :   id,
            cod1        :   newCod1,
            des_db      :   newDes1,
            cod2        :   newCod2,
            des_ta      :   newDes2,
            cod3        :   newCod3,
            des_camp    :   newDes3
        };        

        dispatch( actualizarNomenclatura( data ) );
    };
    
    return (
        <>
            <center>
                <h2><b>Base de Datos, Tablas y Campos</b></h2>

                <h3>Buscador de Datos</h3>   
                <input type="text" name='rebor11' className='input_bus' id={ accion1 } onKeyUp={ buscadorFilter } onChange={ handleInputChange } placeholder="Buscador.." />                
                <br /><br />

                <table className='table' style={{ fontSize: '16px', backgroundColor: 'white' }}>
                    <thead> 
                        <tr style={{ textAlign:'center', color: 'white' }}>
                            <th style={{ width:'60px' }}>
                                <i onClick={ nuevo } style={{ fontSize: '1.5em', cursor:'pointer', color: 'black' }} className="fas fa-plus"></i>                                        
                            </th>
                            <th colSpan='2' style={{ backgroundImage:'url(https://res.cloudinary.com/df2ahfbvy/image/upload/v1617851281/perfil/wlwtz7fpdwd0jfd63ecb.jpg)' }}> Base de Dato </th>
                            <th colSpan='2' style={{ backgroundImage:'url(https://res.cloudinary.com/df2ahfbvy/image/upload/v1617851281/perfil/wlwtz7fpdwd0jfd63ecb.jpg)' }}>Tabla</th>
                            <th colSpan='2' style={{ backgroundImage:'url(https://res.cloudinary.com/df2ahfbvy/image/upload/v1617851281/perfil/wlwtz7fpdwd0jfd63ecb.jpg)' }}>Campo</th>
                            <th></th>
                        </tr>                                    
                        {
                            ( ! activeNomen ) &&
                                <tr style={{ textAlign:'center', color: 'black' }} className="header">
                                    <th style={{ width:'5vw' }}> </th>
                                    <th className='tdGrande' id='1' style={{ cursor: 'pointer', width:  '15vw' }}>Id</th>
                                    <th className='tdPequeño' id='2' style={{ cursor: 'pointer', width: '15vw'  }}>Descripcion</th>
                                    <th className='tdGrande' id='3' style={{ cursor: 'pointer', width:  '15vw' }}>Id</th>
                                    <th className='tdPequeño' id='4' style={{ cursor: 'pointer', width: '15vw'  }}>Descripcion</th>
                                    <th className='tdGrande' id='5' style={{ cursor: 'pointer', width:  '15vw' }}>Id</th>
                                    <th className='tdPequeño' id='6' style={{ cursor: 'pointer', width: '15vw'  }}>Descripcion</th>
                                    <th style={{ width:'5vw' }}></th>
                                </tr>  
                        }                                 
                    </thead>                                
                </table>            
                                     
                <div style={{ height:'350px', overflowX:'auto', backgroundColor: 'white', fontSize: '16px', color: 'black' }}>
                    {
                        ( ! activeNomen ) &&
                            <table style={{ color:'black' }} id="myTable" className='table'>
                                <thead></thead>
                                {
                                    nomenDB.map( (list) => {
                                        return(
                                            <tbody key={ list.id }>
                                                <tr key={ list.id }>
                                                    <td onClick={ () => { dispatch( nomenclaturaActive( list ) ) } } style={ { cursor:'pointer', width:'5vw', textAlign:'center' } } > <i className="fas fa-edit"></i> </td>
                                                    <td className='tdGrande' style={{ textAlign:'center', width: '15vw'}}>
                                                        { list.cod1 }
                                                        <p style={{ display: 'none' }}>
                                                            { list.des_db }
                                                            { list.cod2 }
                                                            { list.des_ta }
                                                            { list.cod3 }
                                                            { list.des_camp }
                                                        </p>
                                                    </td>
                                                    <td className='tdPequeño' style={{ textAlign:'center', width: '15vw' }}> { list.des_db }</td>
                                                    <td className='tdGrande' style={{ textAlign:'center', width: '15vw'}}>{ list.cod2 }</td>
                                                    <td className='tdPequeño' style={{ textAlign:'center', width: '15vw' }}>{ list.des_ta }</td>
                                                    <td className='tdGrande' style={{ textAlign:'center', width: '15vw'}}>{ list.cod3 }</td>
                                                    <td className='tdPequeño' style={{ textAlign:'center', width: '15vw' }}>{ list.des_camp }</td>
                                                    <td onClick={ () => { dispatch( nomenclaturaDELETE( list.id  ) ) } } style={ { cursor:'pointer', fontSize:'24px', textAlign:'center', width: '5vw' } } > <i onClick={ () => { dispatch( nomenclaturaDELETE( list.id  ) ) } } className="fas fa-times"></i> </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }                        
                            </table>
                    }

                    {
                        ( activeNomen ) &&
                        <>
                            <center>
                                <h2>Actualizando Informacion</h2>

                                <div className='row'>
                                    <div className='col' style={{ cursor:'pointer' }} onClick={ () => { dispatch( nomenclaturaActive( '' ) ) } }>
                                        <h1><i className="fas fa-window-close"></i></h1>
                                    </div>
                                    <div className='col' style={{ cursor:'pointer' }} onClick={ guardarNomenBD }>
                                        <h1><i className="fas fa-save"></i></h1>
                                    </div>
                                </div>                                
                            </center>

                            <center>
                                <div className='row'>
                                    <div className='col-4'>
                                        <h4>Base de Dato</h4>

                                        <input type='text' id='newCod1' name="newCod1" value={ newCod1 } onChange={ handleInputChange }></input> <br /><br />
                                        <input type='text' id='newDes1' name="newDes1" value={ newDes1 } onChange={ handleInputChange } style={{ width:'100%' }}></input>
                                    </div>
                                    <div className='col-4'>
                                        <h4>Tabla</h4>

                                        <input type='text' id='newCod2' name="newCod2" value={ newCod2 } onChange={ handleInputChange }></input> <br /><br />
                                        <input type='text' id='newDes2' name="newDes2" value={ newDes2 } onChange={ handleInputChange } style={{ width:'100%' }}></input>
                                    </div>    
                                    <div className='col-4'>
                                        <h4>Campo</h4>

                                        <input type='text' id='newCod3' name="newCod3" value={ newCod3 } onChange={ handleInputChange }></input> <br /><br />
                                        <input type='text' id='newDes3' name="newDes3" value={ newDes3 } onChange={ handleInputChange } style={{ width:'100%' }}></input>
                                    </div>                                
                                </div>                                
                            </center>
                        </>
                    }
                </div>                

            </center>

        </>
    )
}