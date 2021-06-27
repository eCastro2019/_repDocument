import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { archivosActive, nomenclaturaArchiveDELETE } from '../../actions/nomenclatura';

export const ArchivosList = () => {

    const dispatch = useDispatch();
    const { s2021_01 } = useSelector( state => state.nomenclatura );    
    const [ formValues, handleInputChange ] = useForm( );

    let { 
        rebor13 = ''
        } = formValues;

    const busB202102 = () => {         

        let filter, table, tr, td, i, txtValue;

        filter = rebor13.toUpperCase();
        table = document.getElementById("myTadble");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
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

    const sortTable = () => {

        let table, rows, switching, i, x, y, shouldSwitch = '';
        table = document.getElementById("myTadble");
        switching = true;

        while (switching) {
            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[0];
                y = rows[i + 1].getElementsByTagName("td")[0];

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    };

    return (
        <>
            <center>
                <h3> Buscador de Datos </h3>                

                <hr />
                <input
                    type='text' 
                    id='rebor13'
                    className='input_bus'
                    name='rebor13'                                    
                    placeholder='Buscar...'
                    value={ rebor13 }
                    onKeyUp={ busB202102 }
                    onChange={ handleInputChange }                        
                >                    
                </input>
            </center>

            <br />

            <table className='table'>
                <thead style={ { textAlign:'center', backgroundImage:'url(https://res.cloudinary.com/df2ahfbvy/image/upload/v1617851281/perfil/wlwtz7fpdwd0jfd63ecb.jpg)', color: 'white' } }>
                    <tr><th colSpan='5'>Archivos y Variables</th></tr>
                </thead>  
            </table>

                <div style={{ height:'450px', overflowX:'auto' }}>
                    <table id='myTadble' className="table">                                
                        <thead className="table-dark" style={ { textAlign:'center' } }>   
                        </thead>                               
                        {
                            s2021_01.map( (ele2) => {                                
                                return(
                                    <tbody key={ ele2.id }>                                                        
                                        <tr>
                                            <td style={{ width: '10vw' }}>
                                                <b>
                                                    {ele2.np001}
                                                </b>
                                            </td>
                                            <td><i style={{ fontSize:'20px', width: '6vw' }} className="fas fa-long-arrow-alt-left"></i></td>
                                            <td style={{ textAlign:'left', width: '10vw' }}>{ ele2.l202104 }</td>
                                            <td style={{ width: '64vw' }}>
                                                { ele2.l202105 }
                                                <p style={{ display: 'none' }}>
                                                    { ele2.l202104 }
                                                    { ele2.np001 }
                                                </p>
                                            </td>  
                                            <td style={{ width: '5vw', cursor:'pointer' }} onClick={ () => { dispatch( archivosActive( ele2 ) ) } } id={ ele2.id } data-id='ddd123' > <i id={ ele2.id } data-id='ddd123' className="fas fa-edit"></i> </td>    
                                            <td style={{ width: '5vw', cursor:'pointer', fontSize:'24px' }} onClick={ () => { dispatch( nomenclaturaArchiveDELETE( ele2.id  ) ) } } className="fas fa-times" id={ ele2.id } > </td>                                                      
                                        </tr>
                                    </tbody>
                                )
                            }) 
                        }
                    </table> 
                </div>
        </>
    )
}
