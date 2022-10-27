import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native'

import '../data/nt_places.json';
import colors from '../colors';
import NearbyPlaceComponent from '../Components/NearbyPlaceComponent';
import PlaceButtonComponent from '../Components/PlaceButtonComponent';
import PlaceMapView from '../Components/PlaceMapView';
import PlaceInfoComponent from '../Components/PlaceInfoComponent';

const PlaceScreen = (item) => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const place = nationalTrustPlaces[item.route.params.data];

    const hasActivities = (activities) => {
        if (activities != null) {
            return (
                <Text style={styles.placeActivity}>Available Activities: {activities}</Text>
            )
        }
    }

    return (
        <ScrollView style={styles.place}>
            <PlaceButtonComponent />
            <View style={styles.placeImageContainer}>
                <Image style={styles.placeImage} source={{ uri: place.imageUrl }} accessibilityLabel={place.imageDescription} />
            </View>
            <View style={styles.placeInfoContainer}>
                <PlaceInfoComponent data={place} />
                <PlaceMapView latitude={place.location.latitude} longitude={place.location.longitude} />
                <NearbyPlaceComponent />
            </View>
        </ScrollView>
    );
}

export default PlaceScreen

const styles = StyleSheet.create({
    place: {
        width: '100%',
    },
    placeImageContainer: {
        width: '100%',
        height: 250,
    },
    placeImage: {
        width: '100%',
        height: '100%',
    },
    placeInfoContainer: {
        width: '95%',
        marginHorizontal: '2.5%',
        paddingTop: 10,
    },
})