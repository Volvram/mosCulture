import React from "react";
import { StyleSheet, View, Text, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { menuSections} from '../../config/menuSections';
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type MenuProps = {
    navigation: any;
}

const Menu: React.FC<MenuProps> = ({ navigation }) => {
    const dimensions = useWindowDimensions();
    const [selectedSection, setSelectedSection] = React.useState<string>("main");

  return (
    <View style={styles.menu}>
        
        <LinearGradient
            colors={[
                '#ededed', '#e2e2e2', '#c6c6c6'
            ]}
             >
                <View style={{ height: 3, width: "100%"}} />
            </LinearGradient>
        <View style={styles.menu_details}>
            {menuSections.map(section => {
                return (
                    <TouchableOpacity key={section.id} 
                    style={styles.menu_details_button} 
                        onPress={() => {
                            setSelectedSection(section.id);
                            navigation.navigate(section.name);
                        }}>
                        {(section.image && section.imageActive) && 
                            <Image source={section.id !== selectedSection ? section.image : section.imageActive} 
                                style={styles.menu_details_button_image} 
                                resizeMode="contain"/>
                        }
                        <Text style={[styles.menu_details_button_text, 
                            section.id === selectedSection && styles.menu_details_button_text__active]}>{section.name}</Text>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    </View>
  );
}
export default Menu;

const styles = StyleSheet.create({
    menu: {
        height: 103,
        backgroundColor: COLORS.white,
    },
    menu_details: {
        paddingTop: 16,
        paddingHorizontal: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1,
    },
    menu_details_button: {
        alignItems: "center",
    },
    menu_details_button_image: {
        width: 24,
        height: 24,
    },
    menu_details_button_text: {
        ...TYPOGRAPHY.p2,
        color: COLORS.gray,
    },
    menu_details_button_text__active: {
        ...TYPOGRAPHY.p2,
        color: COLORS.blueAction,
    }
})