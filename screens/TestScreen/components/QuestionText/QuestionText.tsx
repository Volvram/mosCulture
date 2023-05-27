import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";

type QuestionTextType = {
    question: string
}

const QuestionText: React.FC<QuestionTextType> = ({question}) => {
    return (
            <Text style={styles.questionText}>{question}</Text>
    )
}

export default QuestionText;

const styles = StyleSheet.create({
    questionText: {
        ...TYPOGRAPHY.h3,
        marginTop: 32,
        marginBottom: 10,
        color: COLORS.black,
        alignSelf: "center",
        textAlign: "center",
    },
})