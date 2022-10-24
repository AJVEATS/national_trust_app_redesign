import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import '../data/nt_places.json';
import colors from '../colors';
import MapView, { Marker } from "react-native-maps";

const PlaceScreen = (item) => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const place = nationalTrustPlaces[item.route.params.data];
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.place}>
            <View>
                <Pressable style={styles.backPressable} onPress={() => navigation.goBack()} >
                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Pressable>
            </View>
            <View style={styles.placeImageContainer}>
                <Image style={styles.placeImage} source={{ uri: place.imageUrl }} accessibilityLabel={place.imageDescription} />
            </View>
            <View style={styles.placeInfoContainer}>
                <View style={styles.placeTitle}>
                    <Text style={styles.placeTitleText}>{place.title}</Text>
                </View>
                <View style={styles.placeLocation}>
                    <Text style={styles.placeLocationText}>{place.subTitle}</Text>
                </View>
                <View style={styles.placeDescription}>
                    <Text style={styles.placeDescriptionText}>{place.description}</Text>
                </View>
                <MapView
                    style={styles.placeMapView}
                    initialRegion={{
                        latitude: place.location.latitude,
                        longitude: place.location.longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04,
                    }}
                    mapType={"satellite"}
                    scrollEnabled={false}
                    loadingEnabled={true}>
                    <Marker
                        key={place}
                        coordinate={{
                            latitude: place.location.latitude,
                            longitude: place.location.longitude
                        }}
                        icon={{ uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/320/round-pushpin_1f4cd.png' }} />
                </MapView>
            </View>
        </ScrollView>
    );
}

export default PlaceScreen

const styles = StyleSheet.create({
    backPressable: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 100,
    },
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
    placeTitle: {
        width: '100%',
    },
    placeTitleText: {
        color: colors.titleText,
        fontSize: 24,
    },
    placeLocation: {},
    placeLocationText: {
        fontSize: 20,
        marginTop: 5
    },
    placeDescription: {
        backgroundColor: colors.ntGreen,
        padding: 10,
        marginVertical: 10
    },
    placeDescriptionText: {
        color: 'white',
        fontSize: 15
    },
    placeMapView: {
        width: '100%',
        height: 275,
        paddingTop: 10,
    },
})