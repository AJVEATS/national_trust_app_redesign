/**
 * @fileoverview This file represets the ListScreen which displays the title and includes the 
 * ListViewComponent
 */
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListViewComponent from '../Components/ListViewComponent';
import colors from '../colors';

const ListScreen = () => {
    const [nationalData, setnationalData] = useState({})
    const [value, onChangeText] = useState('')
    const [localData, setlocalData] = useState({})

    useEffect(() => {
        fetch('https://www.nationaltrust.org.uk/search/data/all-places')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                setnationalData(Object.values(responseJson));
                setlocalData(Object.values(responseJson));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSearch = (text) => {
        onChangeText(text);
        let items = localData;
        console.log(items[1]);
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
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>National Trust</Text >
                </View >
                <View style={styles.listSearchContainer}>
                    <TextInput
                        style={styles.listSearch}
                        onChangeText={(text) => handleSearch(text)}
                        keyboardType="default"
                        value={value}
                        underlineColorAndroid="transparent"
                        placeholder="Search by name"
                    />
                </View>
                <View style={styles.listScrollContainer}>
                    <ListViewComponent {...nationalData} />
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