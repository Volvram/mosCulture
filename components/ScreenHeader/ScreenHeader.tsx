import { StyleSheet, View, Text, Image, TouchableOpacity, useWindowDimensions, ImageSourcePropType } from "react-native";
import { TYPOGRAPHY } from "../../config/typography";

type MenuHeaderType = {
    image?: ImageSourcePropType | null;
    title?: string;
    onPress?: () => void;
}

const ScreenHeader: React.FC<MenuHeaderType> = ({image = null, title = "", onPress}) => {
    const dimensions = useWindowDimensions();

    return (
        <View style={styles.screenHeader}>
            {image !== null && dimensions.width <= 768 && 
                <TouchableOpacity style={styles.screenHeader_button} onPress={onPress} >
                    <Image source={image} style={styles.screenHeader_button_image} />
                </TouchableOpacity>
            }
            <Text style={styles.screenHeader_title}>{title}</Text>
        </View>
    )
}

export default ScreenHeader;

const styles = StyleSheet.create({
    screenHeader: {
        marginTop: 79,
        marginBottom: 50,
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    screenHeader_button: {
        marginLeft: 16,
    },
    screenHeader_button_image: {
        width: 50,
        height: 50
    },
    screenHeader_title: {
        marginLeft: 33,
        ...TYPOGRAPHY.h1
    }
})