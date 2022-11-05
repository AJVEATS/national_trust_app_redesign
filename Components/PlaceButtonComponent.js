/**
 * @fileoverview This file represets the PlaceButtonComponent this includes a back pressable to navigate to
 * the previous screen and a favourite pressable.
 */
import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../colors';

const PlaceButtonComponent = () => {
    const navigation = useNavigation();
    const [heart, setHeart] = React.useState(false)

    return (
        <View>
            <Pressable style={styles.backPressable} onPress={() => navigation.goBack()} >
                <Ionicons name={"arrow-back"} size={32} color={colors.white} />
            </Pressable>
            <Pressable style={styles.heartPressable} onPress={() => { setHeart(!heart); }}>
                <Ionicons name={heart ? "heart" : "heart-outline"} size={32} color={colors.white} />
            </Pressable>
        </View>
    );
}

export default PlaceButtonComponent

const styles = StyleSheet.create({
    backPressable: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 100,
    },
    heartPressable: {
        position: 'absolute',
        top: 10,
        right: 15,
        zIndex: 100,
    },
})