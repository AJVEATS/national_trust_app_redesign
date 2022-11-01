/**
 * @fileoverview This file represets the bottom tab navigator used to navigate between the MapScreen
 * and the ListScreen.
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../colors';
import ListNavigator from './ListNavigator';
import MapNavigator from './MapNavigator';
import TestScreen from '../Screens/TestScreen';

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'List') {
                        iconName = focused
                            ? 'list'
                            : 'list-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused
                            ? 'earth'
                            : 'earth-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.ntGreen,
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="List" component={ListNavigator} />
            <Tab.Screen name="Test" component={TestScreen} />
            <Tab.Screen name="Map" component={MapNavigator} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator