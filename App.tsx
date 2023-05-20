import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import { COLORS } from './config/colors';
import useFonts from './utils/useFonts';
import AppLoading from 'expo-app-loading';
import React from 'react';

export default function App() {
  const [IsReady, SetIsReady] = React.useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <View style={{width: "100%", height: "100%", backgroundColor: COLORS.white}}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}