import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type MenuProps = {
    navigation: any;
}

const Menu: React.FC<MenuProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.menu}>
        <View style={{display: 'flex'}}>
            <Image source={{uri: ""}} /> 
            <Text style={styles.menu_title}>Product</Text>
        </View>
        <View style={styles.menu_details}>
            <Text style={styles.menu_details_title}>Меню</Text>
            <TouchableOpacity style={styles.menu_details_button} onPress={() => navigation.navigate("Главная")}>
                <Text style={styles.menu_details_button_text}>Главная</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu_details_button} onPress={() => navigation.navigate("Новости")}>
                <Text style={styles.menu_details_button_text}>Новости</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
export default Menu;

const styles = StyleSheet.create({
    menu: {
        paddingTop: 79,
    },
    menu_title: {
        marginLeft: 33,
        // font-family: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 48,
        color: '#18181B',
    },
    menu_details: {
        marginTop: 64,
        marginLeft: 51,
    },
    menu_details_title: {
        paddingBottom: 19,
        // fontFamily: 'SF Pro Display';
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#A1A1AA',
    },
    menu_details_button: {
        paddingBottom: 24,
        paddingLeft: 18,
    },
    menu_details_button_text: {
        // fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24,
        color: '#18181B',
    },
})