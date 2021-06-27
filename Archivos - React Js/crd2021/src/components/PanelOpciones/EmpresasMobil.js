import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accionRedux, accionRedux4, empresaActive } from '../../actions/conexiones';
import { useForm } from '../../hooks/useForm';
import { Catalogo } from '../compEmpresas/Catalogo';
import { VistaMovil } from '../mobil/VistaMovil';

export const EmpresasMobil = () => {

    const [ formValues, handleInputChange ] = useForm(); 
    const dispatch = useDispatch();
    const { accion } = useSelector( state => state.conexiones );
    const { accion4 } = useSelector( state => state.conexiones );
    const { accion5 } = useSelector( state => state.conexiones );
    const { listEmpresas } = useSelector( state => state.conexiones );

    const { bus22 } = formValues;    

    const buscadorFilter = () => {
        let input, filter, ul, li, a, i, txtValue;

        input = document.getElementById("myInput");
        filter = bus22.toUpperCase();
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

    const accionViewMobil = (e) => {
        let accion4 = {};

        listEmpresas.forEach(element => {
            if (element.id === e.target.getAttribute('id')) {
                accion4 ={
                    ...element
                }
            }
        });

        dispatch( accionRedux4( accion4 ) );                
    };

    return (
        <>
            <center>
                <div style={{ backgroundColor: 'white' }}>
                    <h1>Conexiones Remotas</h1>                    

                    {
                        ( ! accion4 ) &&
                            ( ! accion ) &&
                                <h1><i onClick={ () => { dispatch( accionRedux( 'catalogo' ) ); dispatch( empresaActive( '' ) ) } } style={{ cursor: 'pointer' }} className="far fa-plus-square"> <b>Catalogo</b></i></h1>
                    }

                    {
                        ( accion ) &&
                        <Catalogo />
                    }

                    {
                        ( ! accion4 ) &&
                            ( ! accion ) &&
                            <>
                                <input 
                                    type="text" 
                                    id="myInput" 
                                    name='bus22'
                                    onKeyUp={ buscadorFilter } 
                                    style={ { textAlign:'center', borderRadius:'50px' } }
                                    placeholder="Buscador de Datos" 
                                    onChange={ handleInputChange }
                                />
                                
                                <ul id="myUL" style={{ backgroundColor: 'white',  border:'none' }}>                                          
                                    {
                                        listEmpresas.map(list => {
                                            return(
                                                <li onClick={ accionViewMobil } key={ list.id } style={{ paddingTop: '10px' }}>
                                                    <a style={{ textAlign: 'center' }}>
                                                        <p style={{ display: 'none' }}>{ list.name }</p>
                                                        <div className="card" style={{ width: '100%', cursor: 'pointer' }}>
                                                            <img id={ list.id } className='card-img-top' src={ list.logo } alt={ list.name } height= '150px'></img>
                                                            <p style={{ fontSize: '10px' }}>{ list.name }</p>
                                                        </div>
                                                    </a>
                                                </li>                                                                                            
                                            )
                                        })
                                    }                            
                                </ul>
                                
                            </>
                    }

                    {
                        ( accion4 && ! accion5 ) &&
                            <VistaMovil />
                    }
                                        
                </div>

                <br />

            </center>
        </>
    )
}
