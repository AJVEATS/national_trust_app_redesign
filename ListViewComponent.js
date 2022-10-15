import { StyleSheet, View, ScrollView, Image, Text, FlatList, ListRenderItem } from 'react-native'
import React from 'react'

import './nt_places.json';
import PlaceCardComponent from './PlaceCardComponent';

const ListViewComponent = () => {

    const nationalTrustPlaces = require('./nt_places.json');
    const placesArray = Object.values(nationalTrustPlaces);


    const placesRenderItem = ({ item }) => {
        return (

            <View key={item} style={styles.placeCard}>
                <View style={styles.placeImageContainer}>
                    <Image style={styles.placeImage} source={{ uri: item.imageUrl }} />
                </View>
                <View style={styles.placeTextContainer}>
                    <Text>{item.title}</Text>
                    <Text>{item.subTitle}</Text>
                    <Text>{item.description}</Text>
                </View>
            </View>
        )
    };

    return (
        <FlatList
            data={placesArray}
            renderItem={placesRenderItem}
            keyExtractor={item => item.id}
        />
    );
}

export default ListViewComponent

const styles = StyleSheet.create({
    listViewComponent: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'lightgray',
    },
    placeCard: {
        width: '100%',
        marginTop: '2%',
        height: 300,
    },
    placeImageContainer: {
        width: '100%',
        height: '75%',
    },
    placeImage: {
        width: '100%',
        height: '100%',
    },
    placeTextContainer: {
        width: '95%',
        height: '25%',
        marginHorizontal: '2.5%',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        // transform: [{ translateY: -10 }],
        borderTopWidth: 5,
        borderTopColor: 'teal'
    }
})