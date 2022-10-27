import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import colors from '../colors'

const NearbyPlaceComponent = () => {
    return (
        <View style={styles.nearby}>
            <Text style={styles.nearbyListTitle}>Nearby places</Text>
            <View style={styles.nearbyPlaces}>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431873744700-carnewascliffsnti1191453chrislacey.jpg" }} accessibilityLabel={"Carnewas at Bedruthan cliffs at dusk"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Castle Coole</Text>
                        <Text style={styles.nearbyLocation}>Enniskillen, County Fermanagh</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431755206533-cimg1907.jpg" }} accessibilityLabel={"A view of the scarp at Blackcap"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Blackcap</Text>
                        <Text style={styles.nearbyLocation}>near Lewes, East Sussex</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431755206533-cimg1907.jpg" }} accessibilityLabel={"A view of the scarp at Blackcap"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Blackcap</Text>
                        <Text style={styles.nearbyLocation}>near Lewes, East Sussex</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431873744700-carnewascliffsnti1191453chrislacey.jpg" }} accessibilityLabel={"Carnewas at Bedruthan cliffs at dusk"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Castle Coole</Text>
                        <Text style={styles.nearbyLocation}>Enniskillen, County Fermanagh</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431873744700-carnewascliffsnti1191453chrislacey.jpg" }} accessibilityLabel={"Carnewas at Bedruthan cliffs at dusk"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Castle Coole</Text>
                        <Text style={styles.nearbyLocation}>Enniskillen, County Fermanagh</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
                <View style={styles.nearbyPlace}>
                    <Image style={styles.nearbyPlaceImage} source={{ uri: "https://nt.global.ssl.fastly.net/images/1431755206533-cimg1907.jpg" }} accessibilityLabel={"A view of the scarp at Blackcap"} />
                    <View style={styles.nearbyInfo}>
                        <Text style={styles.nearbyTitle}>Blackcap</Text>
                        <Text style={styles.nearbyLocation}>near Lewes, East Sussex</Text>
                        <Text style={styles.nearbyDistance}>(6 miles)</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NearbyPlaceComponent

const styles = StyleSheet.create({
    nearby: {
        paddingVertical: 10
    },
    nearbyListTitle: {
        fontSize: 20,
    },
    nearbyPlaces: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    nearbyPlace: {
        width: '48.5%',
        marginTop: 10,
        overflow: 'hidden',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
        height: 'auto',
    },
    nearbyPlaceImage: {
        width: '100%',
        height: 100,
    },
    nearbyInfo: {
        backgroundColor: colors.ntGreen,
        color: "red",
        padding: 10,
    },
    nearbyTitle: {
        color: colors.white,
        paddingBottom: 10,
        fontSize: 18,
        fontFamily: 'serif',
    },
    nearbyLocation: {
        color: colors.white,
    },
    nearbyDistance: {
        color: colors.white
    }
})