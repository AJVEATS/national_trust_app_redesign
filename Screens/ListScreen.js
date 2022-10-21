import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import ListViewComponent from '../Components/ListViewComponent'

const ListScreen = () => {

    return (

        <SafeAreaView style={styles.listViewContainer}>
            <StatusBar hidden />
            <View style={styles.listContainer}/*Ask Ben about this in the lab*/>
                <View style={styles.listTitleContainer}>
                    <View>
                        <Text style={styles.listTitle}>National Trust</Text >
                    </View>
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
        backgroundColor: '#007A3B',
        width: '100%',
        alignItems: 'center',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    listTitle: {
        color: 'white',
        marginVertical: 20,
        fontSize: 24,
    },
})