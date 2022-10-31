/**
 * @fileoverview This file represets the ListScreen which displays the title and includes the 
 * ListViewComponent
 */
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import ListViewComponent from '../Components/ListViewComponent';
import colors from '../colors';

const ListScreen = () => {

    return (
        <SafeAreaView style={styles.listViewContainer}>
            <StatusBar hidden />
            <View style={styles.listContainer}>
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>National Trust</Text >
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