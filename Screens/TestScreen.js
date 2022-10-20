import React from 'react'
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

function Screen1({ navigation }) {
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Button title="next screen"
                onPress={() => navigation.navigate('Screen2')}
            />
        </SafeAreaView>
    )
}

function Screen2({ navigation }) {
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Button title="last screen"
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    )
}

const testStack = createStackNavigator();

function ListStack() {
    return (
        <testStack.Navigator>
            <testStack.Screen name="Screen1" component={Screen1} />
            <testStack.Screen name="Screen2" component={Screen2} />
        </testStack.Navigator>
    )
}

const TestScreen = () => {

    return (
        <ListStack />
    )
}

export default TestScreen

const styles = StyleSheet.create({})