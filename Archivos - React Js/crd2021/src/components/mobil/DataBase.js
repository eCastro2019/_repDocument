import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const DataBase = () => {

    const [ formValues, handleInputChange ] = useForm(); 
    const dispatch = useDispatch()
    const { nomenDB } = useSelector(state => state.nomenclatura);

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
                <h1>Nomenclaturas de Base de Datos</h1>

                <input 
                    type="text" 
                    id="myInput" 
                    name='buscador'
                    onKeyUp={ myFunction } 
                    style={ { textAlign:'center', borderRadius: '50px' } }
                    placeholder="Buscador de Datos" 
                    onChange={ handleInputChange }
                />

                <ul id="myUL" style={{ backgroundColor: 'white', border:'none' }}>                    
                    
                    {
                        nomenDB.map( (list) => {
                            return (
                                <li key={ list.id }>
                                    <a>
                                        {
                                            ( list.cod1 ) && <h3> <b>{ list.cod1 }</b> - { list.des_db } </h3>                                             
                                        }  
                                        {
                                            ( list.cod2 ) && <h3> <b>{ list.cod2 }</b> - { list.des_ta } </h3>     
                                        }    
                                        {
                                            ( list.cod3 ) && <h3> <b>{ list.cod3 }</b> - { list.des_camp } </h3>                                                                                   
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
