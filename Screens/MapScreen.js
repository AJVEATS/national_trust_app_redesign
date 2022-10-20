import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import MapComponent from '../Components/MapComponents'

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <StatusBar hidden />
            <MapComponent />
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({

    homeContainer: {
        justifyContent: 'center',
        flex: 1,
        alignContent: 'center',
    },
})