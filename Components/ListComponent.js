import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ListViewComponent from './ListViewComponent'
import '../data/nt_places.json'


const ListComponent = () => {
    const nationalTrustPlaces = require('../data/nt_places.json');
    const nationalTrustPlacesSize = Object.keys(nationalTrustPlaces).length;

    return (
        <View style={styles.listContainer}>
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
    )
}

export default ListComponent

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    },
    listTitleContainer: {
        backgroundColor: 'teal',
        width: '100%',
        alignItems: 'center',
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7
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