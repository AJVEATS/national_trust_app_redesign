/**
 * @fileoverview This file represets the MapScreen which displays MapSearchComponent and the 
 * MapComponent
 */
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import MapComponent from '../Components/MapComponents';

const MapScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <MapComponent />
        </SafeAreaView>
    )
}

export default MapScreen