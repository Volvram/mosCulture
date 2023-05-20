import { StyleSheet, View, Text } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

const Statistics: React.FC = () => {
    return (
        <View style={styles.statistics}>
            <Text style={styles.statistics_title}>Статистика</Text>
            <View style={styles.statistics_wrapper}></View>
        </View>
    );
}

export default Statistics;

const styles = StyleSheet.create({
    statistics: {
        marginTop: 32,
        width: '100%',
    },
    statistics_title: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
    },
    statistics_wrapper: {
        marginTop: 16,
        width: "100%",
        height: 128,
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    }
});