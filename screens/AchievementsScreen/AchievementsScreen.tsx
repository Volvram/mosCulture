import { StyleSheet, View, Text, ScrollView } from "react-native";
import { COLORS } from "../../config/colors";
import AchievementsHeader from "./components/AchievementsHeader/AchievementsHeader";

type AchievementsScreenProps = {
    navigation: any
}

const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AchievementsHeader image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()}/>
            <View style={styles.achievements}>
                <ScrollView style={styles.achievements_scroll}>
                    <View style={styles.achievements_scroll_list} >

                    </View>
                    <View style={styles.achievements_scroll_list} >

                    </View>
                    <View style={styles.achievements_scroll_list} >

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    achievements: {
        marginTop: 32,
        flex:1,
    },
    achievements_scroll: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    achievements_scroll_list: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 5
    }
})