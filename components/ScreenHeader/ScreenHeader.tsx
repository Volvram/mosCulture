import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type headerButtonType = {
    image: ImageSourcePropType,
    onClick: () => void
}

type ScreenHeaderType = {
    image?: ImageSourcePropType | null;
    title?: string;
    onPress?: () => void;
    buttons?: headerButtonType[]
}

const ScreenHeader: React.FC<ScreenHeaderType> = ({image = null, 
    title = "Мос.Культура",
    onPress,
    buttons}) => {

    return (
        <View style={styles.screenHeader}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.screenHeader_header}>
                    
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity style={styles.screenHeader_button} onPress={onPress} >
                            {image !== null && 
                                <Image source={image} style={styles.screenHeader_button_image} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.screenHeader_title}>{title}</Text>
                    </View>
                    <View style={styles.screenHeader_functions}>
                        {buttons?.map((button, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {button.onClick()}}>
                                    <Image style={styles.screenHeader_functions_function} source={button.image} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScreenHeader;

const styles = StyleSheet.create({
    screenHeader: {
        marginTop: 47,
        height: 50,
        zIndex: 1,
        justifyContent: "center",
    },
    screenHeader_header: {
        paddingHorizontal: 16,
        width: "100%",
        height: 50,

        shadowColor: COLORS.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: COLORS.white,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeader_button: {
        width: 20,
        height: 20
    },
    screenHeader_button_image: {
        width: 20,
        height: 20
    },
    screenHeader_title: {
        marginLeft: 16,
        ...TYPOGRAPHY.h4
    },
    screenHeader_functions: {
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeader_functions_function: {
        width: 20,
        height: 20
    }
})