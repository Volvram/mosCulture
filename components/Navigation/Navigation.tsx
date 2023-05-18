import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../../screens/MainScreen/MainScreen';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import Menu from '../Menu/Menu';
import NewsPostScreen from '../../screens/NewsPostScreen/NewsPostScreen';
import IntroScreen from '../../screens/IntroScreen/IntroScreen';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  Main: undefined,
  News: undefined,
}

export default function Navigation() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Интро" backBehavior="history"
        drawerContent={(props) => <Menu {...props} />}
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
          drawerStyle: {
            width: dimensions.width >= 768 ? '20%' : '85%'
          }
        }}
      >
        <Drawer.Screen name="Интро" component={IntroScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Главная" component={MainScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Войти" component={SignInScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Зарегистрироваться" component={SignUpScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Аккаунт" component={AccountScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Новости" component={NewsScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Новость" component={NewsPostScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}