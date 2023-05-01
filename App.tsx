import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <View style={{width: "100%", height: "100%"}}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}