import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}