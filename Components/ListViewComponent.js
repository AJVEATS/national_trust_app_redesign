import { StyleSheet, View, Image, Text, FlatList, Pressable } from 'react-native'
import React from 'react'

import '../data/nt_places.json';

const ListViewComponent = () => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const placesArray = Object.values(nationalTrustPlaces);


    const placesRenderItem = ({ item }) => {
        return (
            <Pressable key={item} style={styles.placeCard}>
                <View style={styles.placeImageContainer}>
                    <Image style={styles.placeImage} source={{ uri: item.imageUrl }} />
                </View>
                <View style={styles.placeTextContainer}>
                    <Text>{item.title}</Text>
                    <Text>{item.subTitle}</Text>
                    <Text>{item.description}</Text>
                </View>
            </Pressable>
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
    placeCard: {
        width: '100%',
        marginTop: 7,
        height: 300,
        alignItems: 'center',
    },
    placeImageContainer: {
        width: '95%',
        height: 200,
        borderTopEndRadius: 10
    },
    placeImage: {
        width: '100%',
        height: '100%',
    },
    placeTextContainer: {
        width: '95%',
        height: 100,
        marginHorizontal: 2,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        // transform: [{ translateY: -10 }],
        borderTopWidth: 5,
        borderTopColor: 'teal'
    }
})