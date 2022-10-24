import { StyleSheet, View } from 'react-native';
import React from 'react';
import colors from '../colors';
import { TextInput } from 'react-native-gesture-handler';

const MapSearchComponent = () => {
    return (
        <View style={styles.MapButtonComponent}>
            <TextInput style={styles.searchBar}
                placeholder={"Search"}></TextInput>
        </View>
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