/**
 * @fileoverview This file represets the ListNavigator which is used to navigate between the ListScreen
 * and the PlaceScreen
 */
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../Screens/ListScreen';
import PlaceScreen from '../Screens/PlaceScreen';

const ListNavigator = () => {
    const appStack = createStackNavigator();
    return (
        <appStack.Navigator screenOptions={{ headerShown: false }}>
            <appStack.Screen name="ListScreen" component={ListScreen} />
            <appStack.Screen name="PlaceScreen" component={PlaceScreen} />
        </appStack.Navigator>
    )
}

export default ListNavigator