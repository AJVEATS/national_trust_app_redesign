/**
 * @fileoverview This file represets the ListViewComponent which displays the flatlist of
 * all of the national trust places
 */
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import colors from '../colors';

const ListViewComponent = (data) => {

    const navigation = useNavigation();

    /**
     * Changes the screen on button press
     * 
     * @param {item} The palces data 
     */
    const changeScreenOnPress = (item) => {
        navigation.push('PlaceScreen', { data: item.id });
    }

    const placeCard = ({ item }) => {
        return (
            <TouchableOpacity key={item} style={styles.placeCard} onPress={() => changeScreenOnPress(item)} >
                <View style={styles.placeImageContainer}>
                    <Image style={styles.placeImage} source={{ uri: item.imageUrl }} accessibilityLabel={item.imageDescription} />
                </View>
                <View style={styles.placeTextContainer}>
                    <Text style={styles.placeText}>{item.title}</Text>
                    <Text style={styles.placeSubText}>{item.subTitle}</Text>
                </View>
            </TouchableOpacity >
        )
    };

    return (
        <FlatList
            data={Object.values(data)}
            renderItem={placeCard}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => {
                return (
                    <Text style={styles.noItems}>No places</Text>
                )
            }}
            ListFooterComponent={() => {
                return (
                    <View style={styles.flatListFooter}></View>
                )
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={styles.flatListSeperator}></View>
                )
            }}
            ListHeaderComponent={() => {
                return (
                    <View style={styles.flatListHeader}></View>
                )
            }}
        />
    );
}

export default ListViewComponent

const styles = StyleSheet.create({
    noItems: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 18,
        color: colors.ntGray,
        opacity: 0.8,
    },
    flatListHeader: {
        height: 7,
    },
    flatListFooter: {
        height: 250,
    },
    flatListSeperator: {
        height: 7,
    },
    placeCard: {
        width: '100%',
        // marginTop: 7,
        height: 275,
        alignItems: 'center',
    },
    placeImageContainer: {
        width: '95%',
        height: 200,
    },
    placeImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    placeTextContainer: {
        width: '95%',
        height: 75,
        marginHorizontal: 2,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        elevation: 5,
    },
    placeText: {
        fontSize: 18,
    },
    placeSubText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: colors.ntGreen,
    },
})