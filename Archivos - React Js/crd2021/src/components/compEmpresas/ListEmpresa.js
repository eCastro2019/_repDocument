import React from 'react'
import { cargarConexiones, empresaActive } from '../../actions/conexiones';
import { useDispatch } from 'react-redux';
import '../../styles/components/efectText.scss';

export const ListEmpresa = ( list ) => {
    
    const dispatch = useDispatch();
    const { id, name, logo } = list;

    return (
        <>
            <div 
                onClick={ 
                    () => { 
                        dispatch( empresaActive( list ) ) 
                        dispatch( cargarConexiones( id ) )
                    } 
                } 
                className="card" 
                style={{ width: '18rem', cursor: 'pointer', fontSize: '16px' }}
            >                     
                <img className='card-img-top' src={ logo } alt={ name } height= '150px'></img>               
            </div>      
            <p style={{ fontSize: '12px' }}>{ name }</p>
        </>
    )
}
