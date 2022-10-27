import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../colors';

const PlaceButtonComponent = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable style={styles.backPressable} onPress={() => navigation.goBack()} >
                <Ionicons name="arrow-back" size={32} color={colors.white} />
            </Pressable>
            <Pressable style={styles.heartPressable}>
                <Ionicons name={"heart-outline"} size={32} color={colors.white} />
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