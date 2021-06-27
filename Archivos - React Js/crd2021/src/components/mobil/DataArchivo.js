import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const DataArchivo = () => {
    
    const [ formValues, handleInputChange ] = useForm(); 
    const { s2021_01 } = useSelector(state => state.nomenclatura);

    const { buscador } = formValues;

    const myFunction = () => {
        let input, filter, ul, li, a, i, txtValue;

        input = document.getElementById("myInput");
        filter = buscador.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    };

    return (
        <>
            <center>
                <h1>Nomenclaturas de Archivos y Variables</h1>

                <input 
                    type="text" 
                    id="myInput" 
                    name='buscador'
                    onKeyUp={ myFunction } 
                    style={ { textAlign:'center', borderRadius:'50px' } }
                    placeholder="Buscador de Datos" 
                    onChange={ handleInputChange }
                />

                <ul id="myUL" style={{ backgroundColor: 'white',  border:'none', width: '100vw'  }}>                    
                    {
                        s2021_01.map( (list) => {
                            return (
                                <li key={ list.id }>
                                    <a style={{ textAlign: 'center' }}>
                                        {
                                            ( list.l202104 ) && <h3> <b>{ list.l202104 }</b> </h3>                                            
                                        }    
                                        {
                                            ( list.np001 ) && <h5> { list.np001 } </h5>
                                        }       
                                        {
                                            ( list.l202105 ) && <h2> { list.l202105 } </h2>
                                        }                                                                                                               
                                    </a>
                                    <hr />
                                </li>  
                            )
                        })
                    }                                     
                </ul>
            </center>
        </>
    )
}
