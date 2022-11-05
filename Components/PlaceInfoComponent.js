/**
 * @fileoverview This file represents the PlaceInfoComponent which displays
 * information for each place including the Title, subTitle and description.
 * If the place has an opening status or an activity list it will display them.
 * The file calls the fetchWeather() function and passes the places location to 
 * get its current weather.
 */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors'
import WeatherData from '../api/WeatherData'

const PlaceInfoComponent = (place) => {
    const latitude = place.data.location.latitude;
    const longitude = place.data.location.longitude;

    /**
     * Checks if the place's activityTagsAsCSV is not null, if it isn't null
     * it displays the place's activities.
     * 
     * @param {activities} The place's activityTagsAsCSV item  
     */
    const hasActivities = (activities) => {
        if (activities != null) {
            return (
                <Text style={styles.placeActivity}>Available Activities: {activities}</Text>
            )
        }
    }

    /**
     * Checks if the place's openingTimeStatus is not null, if it isn't null
     * it displays the place's openingTimeStatus.
     * 
     * @param {openingStatus} The place's openingTimeStatius item  
     */
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