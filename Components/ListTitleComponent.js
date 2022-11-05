/**
 * @fileoverview This file represets the ListTitleComponenet which is the title section for the ListScreen
 */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors'

const ListTitleComponent = () => {
    return (
        <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>National Trust</Text >
        </View>
    )
}

export default ListTitleComponent

const styles = StyleSheet.create({
    listTitleContainer: {
        backgroundColor: colors.ntGreen,
        width: '100%',
        alignItems: 'center',
    },
    listTitle: {
        color: 'white',
        marginVertical: 20,
        fontSize: 24,
        fontFamily: 'serif',
    },
})