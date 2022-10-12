import React from 'react';
import { Text } from 'react-native';
import { Marker } from "react-native-maps";
import './nt_json.json';

const MarkerComponent = () => {
    let nationalTrustPlaces = require('./nt_json.json');

    return <Text>{nationalTrustPlaces[key]['title']}</Text>
}

export default MarkerComponent