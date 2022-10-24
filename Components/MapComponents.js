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
                    // icon={{ uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/320/round-pushpin_1f4cd.png' }}
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
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        zIndex: 1,
    },
    mapCallout: {
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    markerView: {
        width: '100%',
        alignItems: 'center',
        margin: 10,
    },
    markerTitle: {
        // fontSize: 24,
    },
    markerButton: {
        backgroundColor: colors.ntGreen
    },
});