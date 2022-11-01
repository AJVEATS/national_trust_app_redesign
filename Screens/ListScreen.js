/**
 * @fileoverview This file represets the ListScreen which displays the title and includes the 
 * ListViewComponent
 */
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListViewComponent from '../Components/ListViewComponent';
import colors from '../colors';
import '../data/nt_places.json';

const ListScreen = () => {
    const [newData, setNewData] = useState([])
    const [localData, setLocalData] = useState([])

    return (
        <SafeAreaView style={styles.listViewContainer}>
            <StatusBar hidden />
            <View style={styles.listContainer}>
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>National Trust</Text >
                </View >
                <View style={styles.listSearchContainer}>
                    <TextInput
                        style={styles.listSearch}
                        // onChangeText={}
                        keyboardType="default"
                        placeholder="Search by name"
                    />
                </View>
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
    listSearchContainer: {},
    listSearch: {
        backgroundColor: colors.white,
        height: 50,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: 15
    },
})