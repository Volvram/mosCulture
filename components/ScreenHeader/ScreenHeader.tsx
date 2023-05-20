import { StyleSheet, View, Text, Image, TouchableOpacity, useWindowDimensions, ImageSourcePropType } from "react-native";
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type MenuHeaderType = {
    image?: ImageSourcePropType | null;
    title?: string;
    onPress?: () => void;
    searchVisible?: boolean;
    filtersVisible?: boolean;
}

const ScreenHeader: React.FC<MenuHeaderType> = ({image = null, 
    title = "Название.Проекта", 
    onPress, 
    searchVisible=false, 
    filtersVisible=false}) => {

    const dimensions = useWindowDimensions();

    return (
        <View style={styles.screenHeader}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.screenHeader_header}>
                    {image !== null && 
                        <TouchableOpacity style={styles.screenHeader_button} onPress={onPress} >
                            <Image source={image} style={styles.screenHeader_button_image} />
                        </TouchableOpacity>
                    } 
                    <Text style={styles.screenHeader_title}>{title}</Text>
                    <View style={styles.screenHeader_functions}>
                        {searchVisible && 
                            <TouchableOpacity >
                                <Image style={styles.screenHeader_search} source={require("../../assets/img/search.png")} />
                            </TouchableOpacity>
                        }
                        {filtersVisible &&
                            <TouchableOpacity >
                                <Image style={styles.screenHeader_filters} source={require("../../assets/img/sliders.png")} />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
                <View style={styles.screenHeader_searchLine}>

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

    },
    screenHeader_button_image: {
        width: 20,
        height: 20
    },
    screenHeader_title: {
        marginLeft: 52,
        ...TYPOGRAPHY.h4
    },
    screenHeader_functions: {
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeader_search: {
        width: 20,
        height: 20,
    },
    screenHeader_filters: {
        width: 20,
        height: 20,
    },
    screenHeader_searchLine: {

    }
})