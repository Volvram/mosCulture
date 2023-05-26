import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Progress from 'react-native-progress';
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";
import { TestType } from "../../store/TaskModalStore";
import { observer } from "mobx-react-lite";
import { useLocalStore } from "../../utils/useLocalStore";
import { TestScreenStore } from "../../store/TestScreenStore";
import TestModal from "./components/TestModal/TestModal";

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
    test: TestType
}

const TestScreen: React.FC<TestScreenProps> = ({ route, navigation }) => {
    const { test } = route.params;

    const [isModalVisible, setModalVisible] = React.useState(false);

    const testScreenStore = useLocalStore(() => new TestScreenStore());

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
        testScreenStore.setCurrentQuestion(testScreenStore.currentQuestion + 1);
    }

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints image={require("../../assets/img/btnClose.png")} onPress={() => {navigation.goBack()}}/>
            <ScrollView style={styles.test}>
                
                <Progress.Bar progress={testScreenStore.currentQuestion / test.questions.length} 
                    width={null}
                    unfilledColor={COLORS.gray} 
                    borderColor={COLORS.white}/>
                {test.questions[testScreenStore.currentQuestion - 1].text && 
                    <Text style={styles.test_question}>{test.questions[testScreenStore.currentQuestion - 1].text}</Text>
                }
                {test.questions[testScreenStore.currentQuestion - 1].image &&
                    <Image source={{uri: test.questions[testScreenStore.currentQuestion - 1].image}} />
                }
                {/* {test.questions[currentQuestion - 1].video &&
                    <Image source={{uri: test.questions[currentQuestion - 1].image}} />
                }
                {test.questions[currentQuestion - 1].audio &&
                    <Image source={{uri: test.questions[currentQuestion - 1].image}} />
                } */}
                {test.questions[testScreenStore.currentQuestion - 1].answers.map((answer: AnswerType) => {
                    return (
                        <View key={answer.id} style={[styles.test_answers, 
                            answer.text && {alignItems: "center", width: 267, alignSelf: "center"}]}>

                            {answer.text && 
                                <TouchableOpacity style={[styles.test_answer]}
                                    onPress={() => testScreenStore.setChosenAnswer(answer)}>
                                    <Text style={[styles.test_answer_text, 
                                        { alignSelf: "center"}]}>
                                            {answer.text}
                                    </Text>
                                </TouchableOpacity>
                            }
                            {/* {answer.image && 
                                <Text>{answer.text}</Text>
                            } */}
                        </View>
                    )
                })
                }
                <View style={styles.test_notes}>
                    {testScreenStore.showNotes &&
                        <View>
                            <Text style={styles.test_notes_text}>
                                Примечание
                            </Text>
                            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                                <Text style={styles.test_notes_explanation}>
                                    {test.questions[testScreenStore.currentQuestion - 1].explanation}
                                </Text>
                            </View>
                        </View>
                    }
                </View>
                <TouchableOpacity style={styles.test_check} onPress={() => {
                    if (testScreenStore.chosenAnswer) {
                        checkAnswer(testScreenStore.chosenAnswer)
                    }
                }}>
                    <Text style={styles.test_check_text}>Проверить</Text>
                </TouchableOpacity>
            </ScrollView>
            <TestModal isModalVisible={isModalVisible} 
                setModalVisible={setModalVisible} 
                isCorrect={testScreenStore.correctAnswer}
                changeQuestion={changeQuestion}
                correctAnswer={test.questions[testScreenStore.currentQuestion - 1].answers.find((ans: AnswerType) => ans.isCorrect)}
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
        height: '100%',
        flex: 1,
    },
    test_question: {
        ...TYPOGRAPHY.h3,
        marginTop: 32,
        marginBottom: 10,
        color: COLORS.black,
        alignSelf: "center",
    },
    test_answers: {
        
    },
    test_answer: {
        marginVertical: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: COLORS.black,
        width: "100%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
    },
    test_answer_text: {
        ...TYPOGRAPHY.p1,
        textAlign: "center",
    },

    test_notes: {
        marginTop: 48,
        minHeight: 200,
        width: "100%",
        alignItems: "center",
    },
    test_notes_text: {
        marginVertical: 8,
        ...TYPOGRAPHY.h3,
        color: COLORS.gray,
        width: "100%",
        alignSelf: "center"
    },
    test_notes_explanation: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
        width: "100%",
        alignSelf: "center",
        textAlign: "center",
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