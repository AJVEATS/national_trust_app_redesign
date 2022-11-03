/**
 * @fileoverview This file represets the PlaceScreen which displays the PlaceButtonComponent,
 * PlaceInfoComponent, PlaceMapView and NearbyPlaceComponent. It displays all of the information
 * about the place that was select from the ListViewComponent.
 * 
 * It takes the key passed in from the ListViewComponent as fetches its data from the local 
 * national trust data
 * 
 */
import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'

import '../data/nt_places.json';
import NearbyPlaceComponent from '../Components/NearbyPlaceComponent';
import PlaceButtonComponent from '../Components/PlaceButtonComponent';
import PlaceMapView from '../Components/PlaceMapView';
import PlaceInfoComponent from '../Components/PlaceInfoComponent';

const PlaceScreen = (item) => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const place = nationalTrustPlaces[item.route.params.data];

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