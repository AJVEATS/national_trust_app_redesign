import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import MarkerComponent from './MarkerComponents';

// for (var key in nationalTrustPlaces) {
//   // console.log(`name: ${nationalTrustPlaces[key]['title']} - latitude: ${nationalTrustPlaces[key]['location']['latitude']}, longitude: ${nationalTrustPlaces[key]['location']['longitude']}`);
// }

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <MarkerComponent />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.736055,
          longitude: -1.892924,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        <Marker coordinate={{
          latitude: nationalTrustPlaces[1]['location']['latitude'],
          longitude: nationalTrustPlaces[1]['location']['longitude'],
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1
  },
});
