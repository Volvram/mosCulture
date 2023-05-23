import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import ScreenHeaderAchievements from "../../components/ScreenHeaderAchievements/ScreenHeaderAchievements";


type OneAchieveScreenProps = {
    route: any,
    navigation: any,
}

const OneAchieveScreen: React.FC<OneAchieveScreenProps> = ({ route, navigation }) => {
    const { achievement } = route.params;

    return (
        <View style={styles.container}>
            <ScreenHeaderAchievements image={require("../../assets/img/btnClose.png")} onPress={() => navigation.goBack()}/>
            <View style={styles.achievement}>
                <Text style={styles.achievement_title}>“Погрузился с головой” {/* achievement.name */}</Text>
                <Text style={styles.achievement_description}>
                    Получено за 100% прохождение теста
                    “Русская школа люминизма”, 10.08.2002.
                </Text>
                <View style={styles.achievement_card}>
                    <Image style={styles.achievement_card_image} source={achievement.url} resizeMode="contain"/>
                </View>
                <Text style={styles.achievement_artName}>Ладожское озеро</Text>
                <Text style={styles.achievement_artAuthor}>Архип Иванович Куинджи, 1873 г.</Text>
                <Text style={styles.achievement_artDescription}>
                    Картина является частью собрания Государственного Русского музея. Размер картины — 79,5 × 62,5 см.
                </Text>
            </View>
        </View>
    )
}

export default OneAchieveScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    achievement: {
        marginTop: 32,
        paddingHorizontal: 16,
        flex:1,
        width: "100%"
    },
    achievement_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
    },
    achievement_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray,
        textAlign: "center",
    },
    achievement_card: {
        marginVertical: 16,
        width: "100%",
        height: "100%",
        maxHeight: 379,
        justifyContent: "center",
        alignItems: "center",
    },
    achievement_card_image: {
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    achievement_artName: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
        alignSelf: "center"
    },
    achievement_artAuthor: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray,
        fontWeight: "700",
        alignSelf: "center",
    },
    achievement_artDescription: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center"
    }
})