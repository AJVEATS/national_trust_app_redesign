import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MapScreen from './Screens/MapScreen';
import ListScreen from './Screens/ListScreen';
import PlaceScreen from './Screens/PlaceScreen';
import TestScreen from './Screens/TestScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const appStack = createStackNavigator();

function PlaceStack() {
  return (
    <appStack.Navigator screenOptions={{ headerShown: false }}>
      <appStack.Screen name="ListScreen" component={ListScreen} />
      <appStack.Screen name="PlaceScreen" component={PlaceScreen} />
    </appStack.Navigator >
  )
}

function MapStack() {
  return (
    <appStack.Navigator screenOptions={{ headerShown: false }}>
      <appStack.Screen name="MapScreen" component={MapScreen} />
      <appStack.Screen name="PlaceScreen" component={PlaceScreen} />
    </appStack.Navigator>
  )
}


function AppNavigator() {
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
              ? 'map'
              : 'map-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="List" component={PlaceStack} />
      <Tab.Screen name="Map" component={MapStack} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  home: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
