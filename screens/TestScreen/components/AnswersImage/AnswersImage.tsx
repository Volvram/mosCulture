import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { AnswerType } from "../../TestScreen";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type AnswersImageType = {
    answers: AnswerType[],
    onChoose: (value: AnswerType) => void
}

const AnswersImage: React.FC<AnswersImageType> = ({answers, onChoose}) => {
    const [activeAnswer, setActiveAnswer] = React.useState<AnswerType | null>(null);

    return (
        <View style={styles.answersImage}>
            {answers.map(answer => {
                return (
                    <TouchableOpacity key={answer.id} style={[styles.answersImage_answer,
                        answer === activeAnswer && styles.answersImage_answer__active]}
                        onPress={() => {
                            onChoose(answer)
                            setActiveAnswer(answer);
                        }}>
                            {answer.image &&
                                <ImageBackground imageStyle={{borderRadius: 16,}} 
                                    style={styles.answersImage_image} 
                                    source={{uri: answer.image}}>
                                    <LinearGradient
                                        colors={[
                                        'rgba(24, 24, 27, 0)',
                                        'rgba(24, 24, 27, 0.8)',
                                        ]}
                                        style={styles.answersImage_answer_gradient}>
                                        <Text style={[styles.answersImage_answer_text, 
                                            answer === activeAnswer && styles.answersImage_answer__active_text]}>
                                            {answer.text}
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            }
                    </TouchableOpacity>
                )
            }) 
            }
        </View>
    )
}

export default AnswersImage;

const styles = StyleSheet.create({
    answersImage: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center", 
        alignSelf: "center",
        justifyContent: "center"
    },
    answersImage_answer: {
        marginVertical: 6,
        marginHorizontal: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.gray,
    },
    answersImage_answer__active: {
        marginHorizontal: 6,
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: COLORS.blueAction,
        borderRadius: 22,
    },
    answersImage_answer_gradient: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    answersImage_image: {
        borderRadius: 16,
        width: 160,
        height: 160,
        justifyContent: "flex-end"
    },
    answersImage_answer_text: {
        ...TYPOGRAPHY.p1,
        marginBottom: 16,
        color: COLORS.white,
        textAlign: "center",
        alignSelf: "center"
    },
    answersImage_answer__active_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    }
})