/**
 * @fileoverview This file represets the map component which displays the 
 * location of all national trust places on a map using MapView and Marker
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Dimensions, Button, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../colors';
import '../data/nt_places.json';

const MapComponent = () => {

    let nationalTrustPlaces = require('../data/nt_places.json');
    const navigation = useNavigation();

    const changeScreenOnPress = (item) => {
        navigation.push('PlaceScreen', { data: item.id });
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 50.736055,
                longitude: -1.892924,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
            }}
            loadingEnabled={true}>
            {Object.values(nationalTrustPlaces).map(item => {
                return <Marker
                    key={item.id}
                    coordinate={{ latitude: item.location.latitude, longitude: item.location.longitude }}
                    onCalloutPress={() => changeScreenOnPress(item)} >
                    <Callout style={styles.mapCallout}
                        tooltip={true}>
                        <View style={styles.markerView}>
                            <Text style={styles.markerTitle}>{item.title}</Text>
                            <Button style={styles.markerButton} title="find more" onProgress={() => navigation.push('PlaceScreen', { data: item.id })} />
                        </View>
                    </Callout>
                </Marker>
            })}
        </MapView>
    )
}

export default MapComponent

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
    },
    mapCallout: {
        backgroundColor: colors.white,
        width: 200,
    },
    markerView: {
        // width: '100%',
        alignItems: 'center',
        margin: 10,
    },
    markerTitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 10
    },
    markerButton: {
        backgroundColor: colors.ntGreen,
        paddingBottom: 10
    },
});