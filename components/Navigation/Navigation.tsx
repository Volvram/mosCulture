import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../../screens/MainScreen/MainScreen';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import Menu from '../Menu/Menu';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  Main: undefined,
  News: undefined,
}

export default function Navigation() {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Главная" backBehavior="history"
        drawerContent={(props) => <Menu {...props} />}
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
          drawerStyle: {
            width: dimensions.width >= 768 ? '15%' : '85%'
          }
        }}
      >
        <Drawer.Screen name="Главная" component={MainScreen} />
        <Drawer.Screen name="Новости" component={NewsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}