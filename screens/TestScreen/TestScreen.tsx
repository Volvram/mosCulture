import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import * as Progress from 'react-native-progress';
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

import { observer } from "mobx-react-lite";
import { useLocalStore } from "../../utils/useLocalStore";
import { TestScreenStore } from "../../store/TestScreenStore";
import TestModal from "./components/TestModal/TestModal";
import QuestionText from "./components/QuestionText/QuestionText";
import QuestionImage from "./components/QuestionImage/QuestonImage";
import QuestionVideo from "./components/QuestionVideo/QuestionVideo";
import QuestionAudio from "./components/QuestionAudio/QuestionAudio";
import AnswersImage from "./components/AnswersImage/AnswersImage";
import AnswersText from "./components/AnswersText/AnswersText";
import AnswersVideo from "./components/AnswersVideo/AnswersVideo";
import AnswersAudio from "./components/AnswersAudio/AnswersAudio";

export type AnswerType = {
    id: number,
    text: string,
    video: string | null,
    audio: string | null,
    image: string | null,
    isCorrect: boolean
}

type TestScreenProps = {
    route: any,
    navigation: any,
}

const TestScreen: React.FC<TestScreenProps> = ({ route, navigation }) => {
    const { test } = route.params;
    const [isModalVisible, setModalVisible] = React.useState(false);
    const scroll = React.useRef<ScrollView | null>(null);

    const testScreenStore = useLocalStore(() => new TestScreenStore());

    React.useEffect(() => {
        testScreenStore.setCurrentAnswers(test.questions[testScreenStore.currentQuestion - 1].answers);

        scroll.current && scroll.current.scrollTo({x: 0, y: 0})
    }, [test, testScreenStore.currentQuestion]);

    const checkAnswer = (answer: AnswerType) => {
        setModalVisible(true);
        if (answer.isCorrect) {
            testScreenStore.setScore(testScreenStore.score + test.scorePerQuestion);
            testScreenStore.setCorrectAnswer(true);
        } else {
            testScreenStore.setCorrectAnswer(false);
        }
        testScreenStore.setShowNotes(true);
    }

    const changeQuestion = () => {
        if (testScreenStore.currentQuestion !== test.questions.length) {
            testScreenStore.setCurrentQuestion(testScreenStore.currentQuestion + 1);
        } else {

        }
    }

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints image={require("../../assets/img/btnClose.png")} onPress={() => {navigation.goBack()}}/>
                <View style={[styles.test]}>
                    <Progress.Bar progress={testScreenStore.currentQuestion / test.questions.length} 
                        width={null}
                        unfilledColor={COLORS.gray} 
                        borderColor={COLORS.white}/>
                    <ScrollView ref={scroll} style={{marginBottom: 20}}>


                        {test.questions[testScreenStore.currentQuestion - 1].image 
                            ? <QuestionImage image={test.questions[testScreenStore.currentQuestion - 1].image} 
                                question={test.questions[testScreenStore.currentQuestion - 1].text} />
                            : test.questions[testScreenStore.currentQuestion - 1].video 
                            ? <QuestionVideo video={test.questions[testScreenStore.currentQuestion - 1].video}
                                question={test.questions[testScreenStore.currentQuestion - 1].text} />
                            : test.questions[testScreenStore.currentQuestion - 1].audio
                            ?   <QuestionAudio audio={test.questions[testScreenStore.currentQuestion - 1].audio}
                                question={test.questions[testScreenStore.currentQuestion - 1].text} />
                            : <QuestionText question={test.questions[testScreenStore.currentQuestion - 1].text} />
                        }


                        {testScreenStore.currentAnswers && 
                            testScreenStore.currentAnswers[0].image
                            ? <AnswersImage answers={testScreenStore.currentAnswers} 
                                onChoose={(value) => {testScreenStore.setChosenAnswer(value)}}/>
                            : testScreenStore.currentAnswers 
                                && testScreenStore.currentAnswers[0].video
                            ? <AnswersVideo answers={testScreenStore.currentAnswers}  
                                onChoose={(value) => {testScreenStore.setChosenAnswer(value)}}/>
                            : testScreenStore.currentAnswers 
                            && testScreenStore.currentAnswers[0].audio
                            ? <AnswersAudio answers={testScreenStore.currentAnswers}  
                                onChoose={(value) => {testScreenStore.setChosenAnswer(value)}}/>
                            : <AnswersText answers={testScreenStore.currentAnswers} 
                            onChoose={(value) => {testScreenStore.setChosenAnswer(value)}}/> 
                        }


                    </ScrollView>
                    <TouchableOpacity style={styles.test_check} onPress={() => {
                        if (testScreenStore.chosenAnswer) {
                            checkAnswer(testScreenStore.chosenAnswer)
                        }
                    }}>
                        <Text style={styles.test_check_text}>Проверить</Text>
                    </TouchableOpacity>
                </View>
            <TestModal isModalVisible={isModalVisible} 
                setModalVisible={setModalVisible} 
                isCorrect={testScreenStore.correctAnswer}
                changeQuestion={changeQuestion}
                correctAnswer={test.questions[testScreenStore.currentQuestion - 1].answers.find((ans: AnswerType) => ans.isCorrect)}
                scorePerQuestion={test.scorePerQuestion}
                setChosenAnswer={testScreenStore.setChosenAnswer}
                explanation={test.questions[testScreenStore.currentQuestion - 1].explanation}
                />
            <StatusBar style="auto" />
        </View>
    )
}

export default observer(TestScreen);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: COLORS.white,
    },
    test: {
        marginTop: 16,
        paddingHorizontal: 16,
        width: '100%',
        flex: 1,
    },

    test_check: {
        marginTop: "auto",
        marginBottom: 32,
        paddingVertical: 12,
        paddingHorizontal: 94.5,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        alignSelf: "center"
    },
    test_check_text: {
        marginTop: "auto",
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    }
})