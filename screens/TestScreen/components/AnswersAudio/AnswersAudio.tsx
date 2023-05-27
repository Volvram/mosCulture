import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AnswerType } from "../../TestScreen";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import VideoView from "../VideoView/VideoView";
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
                    <TouchableOpacity style={[styles.answersAudio_answer,
                        answer === activeAnswer && styles.answersAudio_answer__active]}
                        onPress={() => {
                            onChoose(answer)
                            setActiveAnswer(answer);
                        }}>
                        { answer.audio &&
                            <AudioView 
                            title={answer.text} source={answer.audio} />
                        }
                    </TouchableOpacity>
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
        justifyContent: "center"
    },
    answersAudio_answer: {
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.gray,
        flexBasis: "45%",
    },
    answersAudio_answer__active: {
        marginHorizontal: 6,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: COLORS.blueAction,
        borderRadius: 22,
    },
    answersAudio_audio: {
        borderRadius: 16,
    },
    answersAudio_answer_audio__active: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    }
})