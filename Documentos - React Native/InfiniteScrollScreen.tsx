import React, { useState } from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]) // este es el numero de imagenes que quiero que cargue de un solo

    const loadMore = () => {

        const newArray: number[] =[];
        for( let i = 0; i < 5; i++ ) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500 );


    }


    const renderItem = ( item: number ) => {
        return (
            <FadeInImage 
                uri={ `https://picsum.photos/id/${ item }/1024/1024` }
                style={{
                    width: '100%',
                    height: 400
                }}
            />
        );


        // <Image 
        //     source={{ uri: `https://picsum.photos/id/${ item }/500/400` }}
        //     style={{
        //         width: '100%',
        //         height: 400
        //     }}
        // />
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={ numbers }
                keyExtractor={ (item) => item.toString() }
                renderItem={ ({ item }) => renderItem(item) }

                ListHeaderComponent={ () => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                ) }

                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }


                ListFooterComponent={ () => ( // al llegar al final del carrusel que aparezca cargando... 
                                              // las siguientes imagenes, aqui tambien se puede controlar si ya no hay ninguna imagen que mostrar que accion 
                                              // o que informacion quiero que muestre
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent:'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={ 25 } color="#5856D6" />
                    </View>
                ) }
            
            />

        </View>
    )
}


const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});
