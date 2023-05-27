import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AnswerType } from "../../TestScreen";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import React from "react";

type AnswersTextType = {
    answers: AnswerType[] | null,
    onChoose: (value: AnswerType) => void
}

const AnswersText: React.FC<AnswersTextType> = ({answers, onChoose}) => {
    const [activeAnswer, setActiveAnswer] = React.useState<AnswerType | null>(null);

    return (
        <View style={styles.answersText}>
            {answers && answers.map(answer => {
                return (
                    <TouchableOpacity key={answer.id} style={[styles.answersText_answer, 
                        answer === activeAnswer && styles.answersText_answer__active]}
                        onPress={() => {
                            onChoose(answer)
                            setActiveAnswer(answer);
                        }}>
                        <Text style={[styles.answersText_answer_text, 
                            answer === activeAnswer && styles.answersText_answer__active_text]}>
                            {answer.text}
                            </Text>
                    </TouchableOpacity>
                )
            }) 
            }
        </View>
    )
}

export default AnswersText;

const styles = StyleSheet.create({
    answersText: {
        width: "100%",
        flex: 1,
        alignItems: "center", 
        alignSelf: "center",
    },
    answersText_answer: {
        marginVertical: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: COLORS.black,
        width: "80%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
    },
    answersText_answer__active: {
        marginVertical: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: COLORS.black,
        width: "80%",
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    answersText_answer_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black,
        textAlign: "center",
    },
    answersText_answer__active_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    }
})