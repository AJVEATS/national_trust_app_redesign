import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import ListViewComponent from '../Components/ListViewComponent'

import '../data/nt_places.json'

const ListScreen = () => {
    const nationalTrustPlaces = require('../data/nt_places.json');
    const nationalTrustPlacesSize = Object.keys(nationalTrustPlaces).length;

    return (
        <SafeAreaView style={styles.listViewContainer}>
            <StatusBar hidden />
            <View style={styles.listContainer}/*Ask Ben about this in the lab*/>
                <View style={styles.listTitleContainer}>
                    <View style={styles.listTitleImage}>
                        <Image source={require('../assets/images/leaf-solid.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View>
                        <Text style={styles.listTitle}>Explore {nationalTrustPlacesSize} places, starting from</Text >
                    </View>
                    <View>
                        <Text style={styles.listSubTitle}>Bournemouth, Dorset</Text>
                    </View>
                </View >
                <View style={styles.listScrollContainer}>
                    <ListViewComponent />
                </View>
            </View >
        </SafeAreaView>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    listViewContainer: {
        flex: 1,

    },
    listContainer: {
        width: '100%',
    },
    listTitleContainer: {
        backgroundColor: 'teal',
        width: '100%',
        alignItems: 'center',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    listTitleImage: {
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    listTitle: {
        color: 'white',
        marginTop: 10,
        fontSize: 17
    },
    listSubTitle: {
        color: 'white',
        marginTop: 5,
        fontStyle: 'italic',
        fontSize: 15,
        marginBottom: 10,
    },
    listScrollContainer: {

    },
})