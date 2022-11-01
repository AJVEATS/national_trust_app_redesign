/**
 * @fileoverview This file represets the map component which displays the 
 * location of all national trust places on a map using MapView and Marker
 */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Button, Text, View, Pressable } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import colors from '../colors';
import '../data/nt_places.json';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapComponent = () => {

    const [region, setRegion] = useState({
        latitude: 50.736055,
        longitude: -1.892924,
        latitudeDelta: 3,
        longitudeDelta: 3,
    })

    let nationalTrustPlaces = require('../data/nt_places.json');
    const navigation = useNavigation();

    const changeScreenOnPress = (item) => {
        navigation.push('PlaceScreen', { data: item.id });
    }

    return (
        <SafeAreaView>
            <GooglePlacesAutocomplete
                placeholder='Search'
                autoFocus={true}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(details.geometry);
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        longitudeDelta: 0.09,
                        latitudeDelta: 0.09,
                    })
                }}
                query={{
                    key: 'AIzaSyCRi_qZjvUzVaQbUD_9NaWvTf_SJTQuzok',
                    language: 'en',
                    components: 'country:uk'
                }}
                styles={{
                    container: {
                        flex: 0, position: 'absolute', zIndex: 100, width: '90%', top: 10, alignSelf: 'center'
                    }
                }}
            />

            <MapView
                style={styles.map}
                region={region}
                loadingEnabled={true}>
                {Object.values(nationalTrustPlaces).map(item => {
                    return <Marker
                        key={item.id}
                        coordinate={{ latitude: item.location.latitude, longitude: item.location.longitude }}
                        onCalloutPress={() => changeScreenOnPress(item)} >
                        <Callout style={styles.mapCallout}
                            tooltip={true}>
                            <View style={styles.markerView}>
                                <Text style={styles.markerTitle}>{item.title}</Text><Pressable style={styles.markerPressable} onPress={() => navigation.push('PlaceScreen', { data: item.id })}>
                                    <Text style={styles.markerPressableText}>See more</Text>
                                </Pressable>
                            </View>
                        </Callout>
                    </Marker>
                })}
            </MapView>
        </SafeAreaView>
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
        backgroundColor: 'transparent',
        width: 200,
    },
    markerView: {
        backgroundColor: colors.white,
        alignItems: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderStyle: 'solid',
        padding: 10,
        flex: 1,
    },
    markerTitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 10
    },
    markerPressable: {
        backgroundColor: colors.ntGreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    markerPressableText: {
        color: colors.white,
    },
});