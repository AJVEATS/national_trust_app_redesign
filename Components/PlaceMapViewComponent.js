/**
 * @fileoverview This file represents the PlaceMapViewComponent which displays a MapView 
 * with a Marker of the place's location.
 */
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from "react-native-maps";
import React from 'react'

const PlaceMapView = (data) => {
    return (
        <View style={styles.mapViewContainer}>
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: data.latitude,
                    longitude: data.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
                mapType={"hybrid"}
                scrollEnabled={false}
                loadingEnabled={true}>
                <Marker
                    coordinate={{
                        latitude: data.latitude,
                        longitude: data.longitude
                    }}
                />
            </MapView>
        </View>
    );
}

export default PlaceMapView

const styles = StyleSheet.create({
    mapViewContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    mapView: {
        width: '100%',
        height: 200,
        paddingTop: 10
    },
})