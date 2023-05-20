import { StyleSheet, View, Text } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

const Achievements: React.FC = () => {
    return (
        <View style={styles.achievements}>
            <Text style={styles.achievements_title}>Достижения</Text>
            <View style={styles.achievements_wrapper}></View>
        </View>
    );
}

export default Achievements;

const styles = StyleSheet.create({
    achievements: {
        marginTop: 32,
        width: '100%',
    },
    achievements_title: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
    },
    achievements_wrapper: {
        marginTop: 16,
        width: "100%",
        height: 128,
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    }
});