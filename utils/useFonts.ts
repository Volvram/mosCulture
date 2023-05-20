import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    "DeeDee": require('../assets/fonts/DeeDee.ttf'),
    "DeeDee-Bold": require('../assets/fonts/DeeDee-Bold.ttf'),
});

export default useFonts