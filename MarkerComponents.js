import React from 'react';
import { Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import './nt_json.json';

const MarkerComponent = () => {
    let nationalTrustPlaces = require('./nt_json.json');

    const styles = StyleSheet.create({
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignContent: 'center',
            justifyContent: 'center',
            flex: 1
        },
    });

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 50.736055,
                longitude: -1.892924,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04,
            }}>
            {Object.values(nationalTrustPlaces).map(index => {
                return <Marker key={index.id} coordinate={{ latitude: index.location.latitude, longitude: index.location.longitude }} icon={{ uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/round-pushpin_1f4cd.png' }} />
            })}
        </MapView>
    )
}

export default MarkerComponent