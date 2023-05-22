import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";

type AchievementsHeaderType = {
    image?: ImageSourcePropType | null,
    title?: string;
    received?: number,
    all?: number,
    onPress?: () => void
}

const AchievementsHeader: React.FC<AchievementsHeaderType> = ({image=null, title = "Название.Проекта", received, all, onPress}) => {
    return (
        <View style={styles.achievementsHeader}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.achievementsHeader_header}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity style={styles.achievementsHeader_button} onPress={onPress} >
                            {image !== null && 
                                <Image source={image} style={styles.achievementsHeader_button_image} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.achievementsHeader_title}>{title}</Text>
                    </View>
                    <View style={styles.achievementsHeader_achievements}>
                        <Text style={styles.achievementsHeader_achievements_num}>{received ? received : "-"} / {all ? all : "-"}</Text>
                        <Image source={require("../../../../assets/img/achievement.png")} style={styles.achievementsHeader_achievements_image} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AchievementsHeader;

const styles = StyleSheet.create({
    achievementsHeader: {
        marginTop: 47,
        height: 50,
        justifyContent: "center",
    },
    achievementsHeader_header: {
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
    achievementsHeader_button: {
        width: 20,
        height: 20
    },
    achievementsHeader_button_image: {
        width: 20,
        height: 20
    },
    achievementsHeader_title: {
        marginLeft: 52,
        ...TYPOGRAPHY.h4
    },
    achievementsHeader_achievements: {
        marginHorizontal: 16,
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    achievementsHeader_achievements_num: {
        ...TYPOGRAPHY.h3,
        marginRight: 8,
        color: COLORS.black
    },
    achievementsHeader_achievements_image: {
        width: 20,
        height: 20
    },
})