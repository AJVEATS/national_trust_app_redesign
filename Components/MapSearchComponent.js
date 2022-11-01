/**
 * @fileoverview This file represets the search bar compononent for the MapScreen
 */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import colors from '../colors';
import { TextInput } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapSearchComponent = () => {
    return (
        // <View style={styles.MapButtonComponent}>
        //     <TextInput style={styles.searchBar}
        //         placeholder={"Search"}></TextInput>
        // </View>
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                setRegion
            }}
            query={{
                key: 'AIzaSyCRi_qZjvUzVaQbUD_9NaWvTf_SJTQuzok',
                language: 'en',
            }}
            styles={{
                container: {
                    flex: 0, position: 'absolute', zIndex: 100, width: '90%', top: 10, alignSelf: 'center'
                }
            }}
        />
    )
}

export default MapSearchComponent

const styles = StyleSheet.create({
    MapButtonComponent: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        alignItems: 'center',
        top: 20,
    },
    searchBar: {
        backgroundColor: colors.white,
        height: 40,
        width: '90%',
        borderRadius: 6,
        elevation: 5,
        paddingHorizontal: 15
    },
})