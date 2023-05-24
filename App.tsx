import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from './components/Navigation/Navigation';
import { COLORS } from './config/colors';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import rootStore from './store/RootStore/instance';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
// @ts-ignore
window._frameTimestamp = null

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  React.useEffect(() => {
    rootStore.user.checkAuthorization();
  }, []);

  const [fontsLoaded] = useFonts({
    'DeeDee': require('./assets/fonts/DeeDee.ttf'),
    'DeeDee-Bold' : require('./assets/fonts/DeeDee-Bold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{width: "100%", height: "100%", backgroundColor: COLORS.white}} 
      onLayout={onLayoutRootView}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}