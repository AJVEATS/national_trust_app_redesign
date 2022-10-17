import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import MapComponent from './Components/MapComponents';
import ListComponent from './Components/ListComponent';

function MapView() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <MapComponent />
    </SafeAreaView>
  )
}

function ListView() {
  return (
    <SafeAreaView style={styles.listViewContainer}>
      <StatusBar hidden />
      <ListComponent />
    </SafeAreaView>
  )
}


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = focused
              ? 'list'
              : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          if (route.name === 'Map') {
            iconName = focused
              ? 'map'
              : 'map-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="List" component={ListView} />
      <Tab.Screen name="Map" component={MapView} />
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
  homeContainer: {
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
  },
  listViewContainer: {
    flex: 1,

  },
  home: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
