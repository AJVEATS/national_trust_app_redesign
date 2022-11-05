/**
 * @fileoverview This file represets the map component which contains a google auto-complete
 * search bar for searching through locations on the MapView. The MapView displays a Marker
 * for every place from the local version of the national trust JSON data
 */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Dimensions, Text, View, Pressable } from 'react-native';
import { Callout, Marker } from "react-native-maps";
import MapView from 'react-native-map-clustering';
import colors from '../colors';
import '../data/nt_places.json';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapComponent = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const mapRef = useRef();

    const animateToRegion = (latitude, longitude) => {
        let region = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
        };

        mapRef.current.animateToRegion(region, 2000);
    };

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const [region, setRegion] = useState({
        latitude: 50.736055,
        longitude: -1.892924,
        latitudeDelta: 1.5,
        longitudeDelta: 1.5,
    })

    let nationalTrustPlaces = require('../data/nt_places.json');
    const navigation = useNavigation();

    /**
     * Changes the screen on TouchableOpacity onPress
     * 
     * @param {item} The selected places id 
     */
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
                    // console.log(details.geometry);
                    animateToRegion(details.geometry.location.lat, details.geometry.location.lng)
                }}
                query={{
                    key: 'AIzaSyCRi_qZjvUzVaQbUD_9NaWvTf_SJTQuzok',
                    language: 'en',
                    components: 'country:uk'
                }}
                styles={{
                    container: {
                        flex: 0,
                        position: 'absolute',
                        zIndex: 100,
                        width: '95%',
                        top: 10,
                        alignSelf: 'center',
                    },
                    poweredContainer: {
                        display: 'none'
                    },
                }}
            />
            <MapView
                style={styles.map}
                ref={mapRef}
                clusterColor={colors.ntGreen}
                clusterTextColor={colors.white}
                initialRegion={region}
                showsUserLocation={true}
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