import { StyleSheet, Text, ScrollView, View, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import '../data/nt_places.json';

const PlaceScreen = (item) => {
    const nationalTrustPlaces = require('../data/nt_places.json');
    const place = nationalTrustPlaces[item.route.params.data];

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.place}>
            <View>
                <Button title="Go Back" style={styles.backButton} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.placeImageContainer}>
                <Image style={styles.placeImage} source={{ uri: place.imageUrl }} />
            </View>
            <View style={styles.placeTitle}>
                <Text style={styles.placeTitleText}>{place.title}</Text>
            </View>

        </ScrollView>
    );
}

export default PlaceScreen

const styles = StyleSheet.create({
    backButton: {
    },
    place: {
        width: '100%',
    },
    placeImageContainer: {
        width: '100%',
        height: 300,
    },
    placeImage: {
        width: '100%',
        height: '100%',
    },
    placeTitle: {
        backgroundColor: 'teal',

    },
    placeTitleText: {
        color: 'white',
    },
})