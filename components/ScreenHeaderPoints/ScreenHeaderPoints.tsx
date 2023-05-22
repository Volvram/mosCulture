import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { TYPOGRAPHY } from "../../config/typography";
import { COLORS } from "../../config/colors";

type ScreenHeaderPointsType = {
    image?: ImageSourcePropType | null,
    title?: string,
    points?: number,
    onPress?: () => void
}

const ScreenHeaderPoints: React.FC<ScreenHeaderPointsType> = ({image=null, title = "Название.Проекта", points, onPress}) => {
    return (
        <View style={styles.screenHeaderPoints}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.screenHeaderPoints_header}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity style={styles.screenHeaderPoints_button} onPress={onPress} >
                            {image !== null && 
                                <Image source={image} style={styles.screenHeaderPoints_button_image} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.screenHeaderPoints_title}>{title}</Text>
                    </View>
                    <View style={styles.screenHeaderPoints_score}>
                        <Text style={styles.screenHeaderPoints_score_text}>Очки:</Text>
                        <Text style={styles.screenHeaderPoints_score_points}>{points ? points : "-"}</Text>
                        <Image source={require("../../assets/img/gem.png")} style={styles.screenHeaderPoints_score_image} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScreenHeaderPoints;

const styles = StyleSheet.create({
    screenHeaderPoints: {
        marginTop: 47,
        height: 50,
        justifyContent: "center",
    },
    screenHeaderPoints_header: {
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
    screenHeaderPoints_button: {
        width: 20,
        height: 20
    },
    screenHeaderPoints_button_image: {
        width: 20,
        height: 20
    },
    screenHeaderPoints_title: {
        marginLeft: 52,
        ...TYPOGRAPHY.h4
    },
    screenHeaderPoints_score: {
        marginHorizontal: 16,
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeaderPoints_score_text: {
        ...TYPOGRAPHY.h4,
        marginRight: 8,
        color: COLORS.gray,
    },
    screenHeaderPoints_score_points: {
        ...TYPOGRAPHY.h3,
        marginRight: 8,
        color: COLORS.black
    },
    screenHeaderPoints_score_image: {
        width: 20,
        height: 20
    },
})