/**
 * @fileoverview This file is for the weather api that gets the current weather for the place
 */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../colors';


const WeatherData = ({ lat, lon }) => {

    let apiKey = "c615be41df83e8620d84a99ecba2db62";

    const [temperature, setTemperature] = useState("");
    // const [condition, setCondition] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");

    // console.log(`latitiude${lat}`);
    // console.log(`longtitude${lon}`);

    function fetchWeather(lat, lon) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((responseJSON) => {
                setTemperature(responseJSON.main.temp);
                // setCondition(responseJSON.weather[0].main)
                if (responseJSON.weather[0].main === "Fog") {
                    setWeatherIcon(<Ionicons name={"cloud"} color={colors.ntGray} size={32} />)
                } else if (responseJSON.weather[0].main === "Rain") {
                    setWeatherIcon(<Ionicons name={"rainy-outline"} size={32} />)
                } else if (responseJSON.weather[0].main === "Clear") {
                    setWeatherIcon(<Ionicons name={"sunny-outline"} size={32} />)
                } else if (responseJSON.weather[0].main === "Clouds") {
                    setWeatherIcon(<Ionicons name="cloudy-outline" size={32} />)
                } else if (responseJSON.weather[0].main === "Snow") {
                    setWeatherIcon(<Ionicons name="snow-outline" size={32} />)
                }
            });
    }

    useEffect(() => {
        async function getData() {
            try {
                fetchWeather(lat, lon);
            } catch (error) {
                console.warn(error)
            }
        }
        getData();
    }, []);


    return (
        <View style={styles.weatherInfo}>
            <View style={styles.weatherIcon}>{weatherIcon}</View>
            <Text style={styles.weatherTemp}>{Math.round(temperature * 10) / 10}{"\u00B0"}C</Text>
        </View>
    );
}

export default WeatherData

const styles = StyleSheet.create({
    weatherInfo: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    weatherIcon: {
        marginRight: 10,
    },
    weatherTemp: {
        fontSize: 22,
    },
})