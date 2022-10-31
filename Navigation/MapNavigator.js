/**
 * @fileoverview This file represets the stack navigator used to navigate between the MapScreen
 * and PlaceScreen
 */
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../Screens/MapScreen';
import PlaceScreen from '../Screens/PlaceScreen';

const MapNavigator = () => {
    const appStack = createStackNavigator();
    return (
        <appStack.Navigator screenOptions={{ headerShown: false }}>
            <appStack.Screen name="MapScreen" component={MapScreen} />
            <appStack.Screen name="PlaceScreen" component={PlaceScreen} />
        </appStack.Navigator>
    )
}

export default MapNavigator