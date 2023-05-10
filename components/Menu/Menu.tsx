import React from "react";
import { StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { menuSections } from '../../config/menuSections';
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type MenuProps = {
    navigation: any;
}

const Menu: React.FC<MenuProps> = ({navigation}) => {
    const dimensions = useWindowDimensions();

  return (
    <ScrollView style={styles.menu}>
        <View style={styles.menu_header} >
            {dimensions.width <= 768 && 
                <TouchableOpacity 
                    onPress={() => navigation.closeDrawer()} >
                    <Image source={require("../../assets/img/btnClose.png")} style={styles.menu_header_image} />
                </TouchableOpacity>
            }
            <Text style={styles.menu_header_title}>Product</Text>
        </View>
        <View style={styles.menu_details}>
            <Text style={styles.menu_details_title}>Меню</Text>
            {menuSections.map(section => {
                return (
                    <TouchableOpacity key={section.id} style={styles.menu_details_button} 
                        onPress={() => {
                            navigation.navigate(section.name)
                        }}>
                        {section.image && 
                            <Image source={section.image} 
                                style={styles.menu_details_button_image} 
                                resizeMode="contain"/>
                        }
                        <Text style={styles.menu_details_button_text}>{section.name}</Text>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    </ScrollView>
  );
}
export default Menu;

const styles = StyleSheet.create({
    menu: {},
    menu_header: {
        marginTop: 79,
        paddingLeft: 16,
        display: "flex",
        flexDirection: "row",
    },
    menu_header_image: {
        width: 50,
        height: 50
    },
    menu_header_title: {
        marginLeft: 33,
        ...TYPOGRAPHY.h1
    },
    menu_details: {
        marginTop: 64,
        marginLeft: 51,
    },
    menu_details_title: {
        paddingBottom: 19,
        color: COLORS.gray400,
        ...TYPOGRAPHY.small
    },
    menu_details_button: {
        paddingBottom: 24,
        paddingLeft: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    menu_details_button_image: {
        width: 20,
        height: 20,
    },
    menu_details_button_text: {
        marginLeft: 7,
        color: COLORS.gray900,
        ...TYPOGRAPHY.h4,
    },
})