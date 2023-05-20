import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

const DailyWord: React.FC = () => {
    return (
        <View style={styles.dailyWord}>
            <View style={{position: 'absolute', top: -20, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.dailyWord_title}>
                    <Image style={styles.dailyWord_title_image} source={require("../../../../assets/img/lightbulb.png")} />
                    <Text style={styles.dailyWord_title_text}>Слово дня</Text>
                </View>
            </View>
            
            <View style={styles.dailyWord_description}>
                <Text style={styles.dailyWord_description_text}>
                    Пуа́нты — женские балетные туфли, неотъемлемая часть женского танца в классическом балете...
                </Text>
            </View>
            <TouchableOpacity style={styles.dailyWord_more}>
                <Text style={styles.dailyWord_more_text}>Подробнее</Text>
            </TouchableOpacity>
            <Image style={styles.dailyWord_image} source={require("../../../../assets/img/daily.png")}/>
        </View>
    )
}

export default DailyWord;

const styles = StyleSheet.create({
    dailyWord: {
        paddingTop: 36,
        paddingBottom: 176,
        paddingHorizontal: 16,
        backgroundColor: COLORS.lightGray,
        alignItems: "center"
    },
    dailyWord_title: {
        marginBottom: 16,
        paddingHorizontal: 16,
        width: 135,
        height: 40,
        backgroundColor: COLORS.yellow,
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dailyWord_title_text: {
        textAlign: "center"
    },
    dailyWord_title_image: {
        width: 20,
        height: 20,
    },
    dailyWord_description: {
        flex: 1,
    },
    dailyWord_description_text: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
        textAlign: "center",
    },
    dailyWord_more: {
        marginTop: 16,
    },
    dailyWord_more_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.blueAction
    },
    dailyWord_image: {
        marginTop: 16,
    }
})