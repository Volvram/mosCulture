import React from "react";
import { StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { menuSections, otherSections } from '../../config/menuSections';
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type MenuProps = {
    navigation: any;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => {
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
            <Text style={styles.menu_header_title}>Название</Text>
        </View>
        <TouchableOpacity style={styles.menu_account_details}
            onPress={() => navigation.navigate("Аккаунт")}>
            <View style={styles.menu_account_details_avatar}></View>
            {/* <Image style={styles.menu_account_details_avatar} source={} /> */}
            <Text style={styles.menu_account_details_username}>Username</Text>
        </TouchableOpacity>
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
        <View style={styles.menu_other}>
            <Text style={styles.menu_other_title}>Прочее</Text>
                {otherSections.map(section => {
                    return (
                        <TouchableOpacity key={section.id} style={styles.menu_other_button} 
                            onPress={() => {}}>
                            {section.image && 
                                <Image source={section.image} 
                                    style={styles.menu_other_button_image} 
                                    resizeMode="contain"/>
                            }
                            <Text style={styles.menu_other_button_text}>{section.name}</Text>
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
    menu_account_details: {
        marginTop: 64,
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menu_account_details_avatar: {
        width: 64,
        height: 64,
        backgroundColor: COLORS.gray400,
        borderRadius: 32,
    },
    menu_account_details_username: {
        ...TYPOGRAPHY.h4,
        color: COLORS.gray900,
        marginLeft: 16,
    },
    menu_details: {
        marginTop: 36,
        paddingHorizontal: 16,
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
    menu_other: {
        marginTop: 36,
        paddingHorizontal: 16,
    },
    menu_other_title: {
        paddingBottom: 19,
        color: COLORS.gray400,
        ...TYPOGRAPHY.small
    },
    menu_other_button: {
        paddingBottom: 24,
        paddingLeft: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    menu_other_button_image: {
        width: 20,
        height: 20,
    },
    menu_other_button_text: {
        marginLeft: 7,
        color: COLORS.gray900,
        ...TYPOGRAPHY.h4,
    },
})