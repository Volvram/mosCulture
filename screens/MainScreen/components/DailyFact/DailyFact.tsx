import { StyleSheet, Text, View, Image } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

const DailyFact: React.FC = () => {
    return (
        <View style={styles.dailyFact}>
            <Text style={styles.dailyFact_title}>Факт дня</Text>
            <View style={styles.dailyFact_block}>
                <Image style={styles.dailyFact_block_image} source={require("../../../../assets/img/fact.png")} />
                <Text style={styles.dailyFact_block_text}>
                    Единственная проданная при жизни картина Ван Гога - «Красные виноградники в Арле».
                </Text>
            </View>
        </View>
    )
}

export default DailyFact;

const styles = StyleSheet.create({
    dailyFact: {
    },
    dailyFact_title: {
        ...TYPOGRAPHY.h2,
    },
    dailyFact_block: {
        marginTop: 16,
        padding: 16,
        height: 100,
        width: "100%",
        backgroundColor: COLORS.peach,
        borderRadius: 16,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    dailyFact_block_image: {
        width: 48,
        height: 48,
    },
    dailyFact_block_text: {
        ...TYPOGRAPHY.small,
        marginLeft: 16,
        maxWidth: "80%",
        color: COLORS.gray900,
    }
})