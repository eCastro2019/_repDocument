import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startLogout } from '../../actions/auth';


export const JournalScreen = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div>
            JournalScreen

            <button                 
                onClick={ hanleLogout }
            >
                Logout
            </button>
        </div>
    )
}
