import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';

import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext( AuthContext ) // usamos el context para ejecutar una accion desde donde queramos
    const { isLoggedIn } = authState; // desestructurar el autState que es donde esta el campo si esta autenticado o no para usarlo como condicion de que muestre algo o no

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>ContactsScreen</Text>

            {
                !isLoggedIn && <Button title="SignIn" onPress={ signIn } />
                // esta es la forma de llamar una accion onPress={ accion }
            }            

        </View>
    )
}
