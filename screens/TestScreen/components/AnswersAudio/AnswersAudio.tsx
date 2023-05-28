import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AnswerType } from "../../TestScreen";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import AudioView from "../AudioView/AudioView";
import React from "react";

type AnswersAudioType = {
    answers: AnswerType[],
    onChoose: (value: AnswerType) => void
}

const AnswersAudio: React.FC<AnswersAudioType> = ({answers, onChoose}) => {
    const [activeAnswer, setActiveAnswer] = React.useState<AnswerType | null>(null);

    return (
        <View style={styles.answersAudio}>
            {answers.map(answer => {
                return (
                    <View key={answer.id} style={[styles.answersAudio_answer]}>
                        { answer.audio &&
                            <AudioView onClick={() => {
                                onChoose(answer)
                                setActiveAnswer(answer);
                            }}
                            currentAudio={activeAnswer && activeAnswer.text}
                            light={answer === activeAnswer ? true : false} 
                            title={answer.text} source={answer.audio} />
                        }
                    </View>
                )
            }) 
            }
        </View>
    )
}

export default AnswersAudio;

const styles = StyleSheet.create({
    answersAudio: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center", 
        alignSelf: "center",
        justifyContent: "space-between"
    },
    answersAudio_answer: {
        marginVertical: 6,
        marginHorizontal: 6,
        paddingVertical: "auto",
        borderRadius: 16,
        flexBasis: "46%",
    },
    answersAudio_answer__active: {
        marginHorizontal: 6,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: COLORS.blueAction,
    },
    answersAudio_answer_audio: {
        padding: 12,
        width: "100%",
        minWidth: 175,
        minHeight: 48,
        borderRadius: 24,
        backgroundColor: COLORS.lightGray,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    answersAudio_answer_audio__active: {
        padding: 12,
        width: "100%",
        minWidth: 175,
        minHeight: 48,
        borderRadius: 24,
        backgroundColor: COLORS.blueAction,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    answersAudio_audio_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.black,
        textAlign: "center",
    },
    answersAudio_audio__active_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.white,
        textAlign: "center",
    },
})