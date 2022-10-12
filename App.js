import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MarkerComponent from './MarkerComponents';

function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <MarkerComponent />
    </SafeAreaView>
  )
}

function SecondScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text>Second screen</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Discover" component={Home} inactiveBackgroundColor={'blue'} />
      <Drawer.Screen name="Second Screen" component={SecondScreen} />
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
  home: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
