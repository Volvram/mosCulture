import { StyleSheet, Text, View, Image } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import FlippingCard from "../../../../components/FlippingCard/FlippingCard";

const DailyFact: React.FC = () => {
    return (
        <View style={styles.dailyFact}>
            <Text style={styles.dailyFact_title}>Факт дня</Text>
            <FlippingCard frontImage={require("../../../../assets/img/wine.jpg")} backText="Единственная проданная при жизни картина Ван Гога - «Красные виноградники в Арле»." />
        </View>
    )
}

export default DailyFact;

const styles = StyleSheet.create({
    dailyFact: {
        paddingHorizontal: 16,
    },
    dailyFact_title: {
        ...TYPOGRAPHY.h2,
        marginBottom: 16,
    },
})