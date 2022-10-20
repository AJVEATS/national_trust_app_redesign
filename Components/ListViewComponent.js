import { StyleSheet, View, Image, Text, FlatList, Pressable } from 'react-native'
import React from 'react'

import '../data/nt_places.json';

const ListViewComponent = ({ navigation }) => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const placesArray = Object.values(nationalTrustPlaces);


    const placesRenderItem = ({ item }) => {
        return (
            <Pressable key={item} style={styles.placeCard} >
                <View style={styles.placeImageContainer}>
                    <Image style={styles.placeImage} source={{ uri: item.imageUrl }} />
                </View>
                <View style={styles.placeTextContainer}>
                    <Text style={styles.placeText}>{item.title}</Text>
                    <Text style={styles.placeSubText}>{item.subTitle}</Text>
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
        height: 235,
    },
    placeImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    placeTextContainer: {
        width: '95%',
        height: 65,
        marginHorizontal: 2,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        // transform: [{ translateY: -10 }],
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
    },
    placeText: {
        fontSize: 18,
    },
    placeSubText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'teal'
    },
})