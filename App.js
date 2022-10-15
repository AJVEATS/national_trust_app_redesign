import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

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

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="List" component={ListView} />
      <Drawer.Screen name="Map" component={MapView} inactiveBackgroundColor={'blue'} />
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyDrawer />
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
