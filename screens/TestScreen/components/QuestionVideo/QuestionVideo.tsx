import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import VideoView from "../VideoView/VideoView";
import React from "react";

type QuestionVideoType = {
    question: string,
    video: string,
    stop?: boolean
}

const QuestionVideo: React.FC<QuestionVideoType> = ({question, video, stop}) => {

    return (
        <View>
            <Text style={styles.questionVideo_text}>{question}</Text>
            <VideoView source={video} stop={stop}/>
        </View> 
    )
}

export default QuestionVideo;

const styles = StyleSheet.create({
    questionVideo_text: {
        ...TYPOGRAPHY.h3,
        marginTop: 32,
        marginBottom: 10,
        color: COLORS.black,
        alignSelf: "center",
        textAlign: "center",
    },
    questionVideo_video: {
        marginBottom: 10,
        width: "100%",
        alignSelf: "center",
        borderRadius: 16,
    },
})