import { StyleSheet, View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

type EntertainmentHeaderType = {
    title?: string;
    points?: number
}


const EntertainmentHeader: React.FC<EntertainmentHeaderType> = ({title = "Название.Проекта", points}) => {
    return (
        <View style={styles.screenHeader}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.screenHeader_header}>
                    <Text style={styles.screenHeader_title}>{title}</Text>
                    <View style={styles.screenHeader_score}>
                        <Text style={styles.screenHeader_score_text}>Очки:</Text>
                        <Text style={styles.screenHeader_score_points}>{points ? points : "-"}</Text>
                        <Image source={require("../../../../assets/img/gem.png")} style={styles.screenHeader_score_image} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EntertainmentHeader;

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
    screenHeader_title: {
        marginLeft: 52,
        ...TYPOGRAPHY.h4
    },
    screenHeader_score: {
        marginHorizontal: 16,
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeader_score_text: {
        ...TYPOGRAPHY.h4,
        marginRight: 8,
        color: COLORS.gray,
    },
    screenHeader_score_points: {
        ...TYPOGRAPHY.h3,
        marginRight: 8,
        color: COLORS.black
    },
    screenHeader_score_image: {
        width: 20,
        height: 20
    },
})