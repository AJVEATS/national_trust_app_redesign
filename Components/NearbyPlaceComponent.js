import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import colors from '../colors'
import '../data/nt_places.json'

const NearbyPlaceComponent = () => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    var keys = Object.keys(nationalTrustPlaces);
    const nearby1 = nationalTrustPlaces[keys[keys.length * Math.random() << 0]];
    const nearby2 = nationalTrustPlaces[keys[keys.length * Math.random() << 0]];

    return (
        <View style={styles.nearby}>
            <Text style={styles.nearbyListTitle}>Other places</Text>
            <View style={styles.nearbyPlaces}>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: nearby1.imageUrl }} accessibilityLabel={nearby1.imageDescription} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>{nearby1.title}</Text>
                        <Text style={styles.nearbyLocation}>{nearby1.subTitle}</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: nearby2.imageUrl }} accessibilityLabel={nearby2.imageDescription} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>{nearby2.title}</Text>
                        <Text style={styles.nearbyLocation}>{nearby2.subTitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NearbyPlaceComponent

const styles = StyleSheet.create({
    nearby: {
        paddingVertical: 10
    },
    nearbyListTitle: {
        fontSize: 22,
        borderBottomColor: 'black'
    },
    nearbyPlaces: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    nearbyPlace: {
        width: '100%',
        marginTop: 10,
        overflow: 'hidden',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 'auto',
    },
    nearbyPlaceImage: {
        width: '30%',
        height: 100,
    },
    nearbyInfo: {
        backgroundColor: colors.ntGreen,
        color: "red",
        padding: 10,
        width: '70%',
    },
    nearbyTitle: {
        color: colors.white,
        paddingBottom: 5,
        fontSize: 20,
    },
    nearbyLocation: {
        color: colors.white,
        fontSize: 14,
    },
})