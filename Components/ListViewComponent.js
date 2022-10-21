import React from 'react'
import { StyleSheet, View, Image, Text, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import '../data/nt_places.json';
import colors from '../colors';

const ListViewComponent = () => {

    const nationalTrustPlaces = require('../data/nt_places.json');
    const placesArray = Object.values(nationalTrustPlaces);

    const navigation = useNavigation();

    const changeScreenOnPress = (item) => {
        navigation.push('PlaceScreen', { data: item.id });
    }

    const placesRenderItem = ({ item }) => {
        return (
            <Pressable key={item} style={styles.placeCard} onPress={() => changeScreenOnPress(item)} >
                <View style={styles.placeImageContainer}>
                    <Image style={styles.placeImage} source={{ uri: item.imageUrl }} />
                </View>
                <View style={styles.placeTextContainer}>
                    <Text style={styles.placeText}>{item.title}</Text>
                    <Text style={styles.placeSubText}>{item.subTitle}</Text>
                </View>
            </Pressable>
        )
    };

    return (
        <FlatList
            data={placesArray}
            renderItem={placesRenderItem}
            keyExtractor={item => item.id}
        />
    );
}


export default ListViewComponent

const styles = StyleSheet.create({
    placeCard: {
        width: '100%',
        marginTop: 7,
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
        paddingHorizontal: 10,
        backgroundColor: 'white',
        // transform: [{ translateY: -10 }],
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
    },
    placeText: {
        fontSize: 18,
    },
    placeSubText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: colors.ntGreen
    },
})