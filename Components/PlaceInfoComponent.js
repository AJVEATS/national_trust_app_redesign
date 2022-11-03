/**
 * @fileoverview This file displays all of the information for each place
 */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors'
import WeatherData from '../api/WeatherData'

const PlaceInfoComponent = (place) => {

    // const { latitude, longitude } = place.data.location
    const latitude = place.data.location.latitude;
    const longitude = place.data.location.longitude;
    // console.log("placeInfo lat " + latitude);
    // console.log("placeInfo lon " + longitude);

    const hasActivities = (activities) => {
        if (activities != null) {
            return (
                <Text style={styles.placeActivity}>Available Activities: {activities}</Text>
            )
        }
    }

    const hasOpeningTime = (openingStatus) => {
        if (openingStatus != null) {
            return (
                <Text style={styles.openingTimeStatus}>{openingStatus}</Text>
            )
        }
    }

    return (
        <View>
            <Text style={styles.placeTitle}>{place.data.title}</Text>
            <Text style={styles.placeLocation}>{place.data.subTitle}</Text>
            {hasOpeningTime(place.data.openingTimeStatus)}
            <View style={styles.placeDescription}>
                <Text style={styles.placeDescriptionText}>{place.data.description}</Text>
            </View>
            {hasActivities(place.data.activityTagsAsCsv)}
            <WeatherData lat={latitude} lon={longitude} />
        </View>
    )
}

export default PlaceInfoComponent

const styles = StyleSheet.create({

    placeTitle: {
        width: '100%',
        color: colors.titleText,
        fontSize: 28,
        fontFamily: 'serif',
    },
    placeLocation: {
        fontSize: 20,
        marginTop: 5,
        fontStyle: 'italic',
        color: colors.ntGray,
        opacity: 0.7
    },
    openingTimeStatus: {
        fontSize: 18,
    },
    placeDescription: {
        backgroundColor: colors.ntGreen,
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
    },
    placeDescriptionText: {
        color: 'white',
        fontSize: 15
    },
    placeActivity: {
        marginBottom: 10,
        fontSize: 18,
    },
})