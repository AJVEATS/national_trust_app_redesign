import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors'

const PlaceInfoComponent = (place) => {

    const hasActivities = (activities) => {
        if (activities != null) {
            return (
                <Text style={styles.placeActivity}>Available Activities: {activities}</Text>
            )
        }
    }

    return (
        <View>
            <Text style={styles.placeTitle}>{place.data.title}</Text>
            <Text style={styles.placeLocation}>{place.data.subTitle}</Text>
            <Text style={styles.openingTimeStatus}>{place.data.openingTimeStatus}</Text>
            <View style={styles.placeDescription}>
                <Text style={styles.placeDescriptionText}>{place.data.description}</Text>
            </View>
            {hasActivities(place.data.activityTagsAsCsv)}
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
        marginVertical: 5,
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