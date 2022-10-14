import { StyleSheet, View, ScrollView, Image, Text } from 'react-native'
import React from 'react'

import './nt_places.json';
import PlaceCardComponent from './PlaceCardComponent';

const ListViewComponent = () => {
    let nationalTrustPlaces = require('./nt_places.json')
    return (
        <ScrollView contentContainerStyle={styles.listViewComponent}>
            {Object.values(nationalTrustPlaces).map(index => {
                return (
                    <View key={index.id} style={styles.placeCard}>
                        <View style={styles.placeImageContainer}>
                            <Image style={styles.placeImage} source={{ uri: index.imageUrl }} />
                        </View>
                        <View style={styles.placeTextContainer}>
                            <Text>{index.title}</Text>
                            <Text>{index.subTitle}</Text>
                            <Text>{index.description}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default ListViewComponent

const styles = StyleSheet.create({
    listViewComponent: {
        flexGrow: 1,
        alignItems: 'center',
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