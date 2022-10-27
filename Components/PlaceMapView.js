import { StyleSheet, View } from 'react-native'
import React from 'react'

import MapView, { Marker } from "react-native-maps";

const PlaceMapView = (props) => {
    return (
        <View style={styles.mapViewContainer}>
            <MapView
                style={styles.mapView}
                initialRegion={{
                    latitude: props.latitude,
                    longitude: props.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
                mapType={"satellite"}
                scrollEnabled={false}
                loadingEnabled={true}>
                <Marker
                    coordinate={{
                        latitude: props.latitude,
                        longitude: props.longitude
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