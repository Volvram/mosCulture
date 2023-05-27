import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import AudioView from "../AudioView/AudioView";
import React from "react";

type QuestionAudioType = {
    question: string,
    audio: string
}

const QuestionAudio: React.FC<QuestionAudioType> = ({question, audio}) => {

    return (
        <View style={styles.questionAudio}>
            <Text style={styles.questionAudio_text}>{question}</Text>
            {audio &&
                <AudioView source={audio} style={styles.questionAudio_audio}/>
            }
        </View> 
    )
}

export default QuestionAudio;

const styles = StyleSheet.create({
    questionAudio: {
        marginBottom: 40,
    },
    questionAudio_text: {
        ...TYPOGRAPHY.h3,
        marginTop: 32,
        marginBottom: 10,
        color: COLORS.black,
        alignSelf: "center",
        textAlign: "center",
    },
    questionAudio_audio: {
        height: 20,
        width: "50%",
        alignSelf: "center",
        backgroundColor: COLORS.lightGray,
    },
})