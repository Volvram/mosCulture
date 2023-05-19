import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen/MainScreen';
import FeedScreen from '../../screens/FeedScreen/FeedScreen';
import Menu from '../Menu/Menu';
import FeedPostScreen from '../../screens/FeedPostScreen/FeedPostScreen';
import IntroScreen from '../../screens/IntroScreen/IntroScreen';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import SignInScreen from '../../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SchoolScreen from '../../screens/SchoolScreen/SchoolScreen';
import EntertainmentScreen from '../../screens/EntertainmentsScreen/EntertainmentsScreen';
import CoursesScreen from '../../screens/CoursesScreen/CoursesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Main: undefined,
  News: undefined,
}

export default function Navigation() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Интро">
          <Stack.Screen name="Интро" component={IntroScreen} options={{headerShown: false}} />
          <Stack.Screen name="Приложение" component={TabBar} options={{headerShown: false}} />

          <Stack.Screen name="Войти" component={SignInScreen} options={{headerShown: false}} />
          <Stack.Screen name="Зарегистрироваться" component={SignUpScreen} options={{headerShown: false}} />
          <Stack.Screen name="Аккаунт" component={AccountScreen} options={{headerShown: false}} />
          
          <Stack.Screen name="Лента" component={FeedScreen} options={{headerShown: false}} />
          <Stack.Screen name="Пост" component={FeedPostScreen} options={{headerShown: false}} />
          <Stack.Screen name="Развлечения" component={EntertainmentScreen} options={{headerShown: false}} />
          <Stack.Screen name="Курсы" component={CoursesScreen} options={{headerShown: false}} />
          <Stack.Screen name="Школы" component={SchoolScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const TabBar = () => {
  return(
    <Tab.Navigator initialRouteName="Главная" backBehavior="history" tabBar={(props) => <Menu {...props} />} >
      <Tab.Screen name="Главная" component={MainScreen} options={{headerShown: false, tabBarStyle: {paddingBottom: 2}}}/>
      <Tab.Screen name="Лента" component={FeedScreen} options={{headerShown: false}} />
      <Tab.Screen name="Развлечения" component={EntertainmentScreen} options={{headerShown: false}} />
      <Tab.Screen name="Курсы" component={CoursesScreen} options={{headerShown: false}} />
      <Tab.Screen name="Школы" component={SchoolScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}