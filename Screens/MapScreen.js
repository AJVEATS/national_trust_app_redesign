/**
 * @fileoverview This file represets the MapScreen which displays MapSearchComponent and the 
 * MapComponent
 */
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import MapComponent from '../Components/MapComponents'
import MapSearchComponent from '../Components/MapSearchComponent'

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.MapScreen}>
            <StatusBar hidden />
            <MapSearchComponent />
            <MapComponent />
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    MapScreen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
})