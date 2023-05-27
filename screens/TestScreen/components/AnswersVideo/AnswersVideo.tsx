import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AnswerType } from "../../TestScreen";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import VideoView from "../VideoView/VideoView";
import React from "react";

type AnswersVideoType = {
    answers: AnswerType[],
    onChoose: (value: AnswerType) => void
}

const AnswersVideo: React.FC<AnswersVideoType> = ({answers, onChoose}) => {
    const [activeAnswer, setActiveAnswer] = React.useState<AnswerType | null>(null);

    return (
        <View style={styles.answersVideo}>
            {answers.map(answer => {
                return (
                    <TouchableOpacity style={[styles.answersVideo_answer, 
                        answer === activeAnswer && styles.answersVideo_answer__active]}
                        onPress={() => {
                            onChoose(answer)
                            setActiveAnswer(answer);
                        }}>
                        { answer.video &&
                            <VideoView source={answer.video} />
                        }
                        <Text style={[styles.answersVideo_answer_text, 
                            answer === activeAnswer && styles.answersVideo_answer__active_text]}>
                            {answer.text}
                        </Text>
                    </TouchableOpacity>
                )
            }) 
            }
        </View>
    )
}

export default AnswersVideo;

const styles = StyleSheet.create({
    answersVideo: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center", 
        alignSelf: "center",
        justifyContent: "center"
    },
    answersVideo_answer: {
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.gray,
        flexBasis: "45%",
    },
    answersVideo_answer__active: {
        marginHorizontal: 6,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: COLORS.blueAction,
        borderRadius: 22,
    },
    answersVideo_video: {
        borderRadius: 16,
    },
    answersVideo_answer_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black,
        textAlign: "center",
    },
    answersVideo_answer__active_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    }
})