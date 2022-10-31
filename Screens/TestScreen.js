import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Blink = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 100);

        return () => clearInterval(toggle);
    })

    if (!isShowingText) {
        return null;
    }

    return <Text style={{ color: props.color }}>{props.text}</Text>;
}

const TestScreen = () => {
    return (
        <View>
            <Blink text="test" color="green" />
            <Blink text="more text" />
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({})