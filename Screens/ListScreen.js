/**
 * @fileoverview This file represets the ListScreen which displays the ListTitleComponent and includes a
 * filtering text input for the list of all places which is displayed with the ListViewComponent.
 */
import { StyleSheet, View, SafeAreaView, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListViewComponent from '../Components/ListViewComponent';
import colors from '../colors';
import ListTitleComponent from '../Components/ListTitleComponent';
import '../data/nt_places.json';

const ListScreen = () => {
    const [nationalData, setnationalData] = useState({})
    const [value, onChangeText] = useState('')
    const [localData, setlocalData] = useState({})

    /**
     * This function is for setting the nationalData and localData using the local JSON data store 
     * version of the national trust all places API data 
     */
    useEffect(() => {
        // !!!! Stopped using the all places API data as it no longer exists, now uses the local JSON version.
        // fetch('https://www.nationaltrust.org.uk/search/data/all-places')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         // console.log(responseJson);
        //         setnationalData(Object.values(responseJson));
        //         setlocalData(Object.values(responseJson));
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        const nationalTrustPlaces = require('../data/nt_places.json');
        setnationalData(Object.values(nationalTrustPlaces));
        setlocalData(Object.values(nationalTrustPlaces));
    }, []);

    /**
     * @param {text} The text inputted into the text input by the user
     * 
     * This function is for taking in the text inputed into the text input 
     * and the filters the data comparing the input the the national trust 
     * places title. It then returns the filtered data.
     */
    const handleSearch = (text) => {
        onChangeText(text);
        let items = localData;
        let newData = items;

        if (text) {
            newData = items.filter(item => {
                const itemData = item.title.toLowerCase();
                const textData = text.toLowerCase();

                return itemData.indexOf(textData) > -1;
            });
        }
        setnationalData(newData);
    }

    return (
        <SafeAreaView style={styles.listViewContainer}>
            <StatusBar hidden />
            <View style={styles.listContainer}>
                <ListTitleComponent />
                <View style={styles.listSearchContainer}>
                    <TextInput
                        style={styles.listSearch}
                        inlineImageLeft="search_icon"
                        onChangeText={(text) => handleSearch(text)}
                        keyboardType="default"
                        value={value}
                        underlineColorAndroid="transparent"
                        placeholder="🔍 Search places"
                    />
                </View>
                <ListViewComponent {...nationalData} />
            </View >
        </SafeAreaView>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    listViewContainer: {
        flex: 1,
    },
    listSearch: {
        backgroundColor: colors.white,
        height: 50,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: 15
    },
})