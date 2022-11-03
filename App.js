/**
 * @fileoverview This file represets the App which is the main file for the application.
 */
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}