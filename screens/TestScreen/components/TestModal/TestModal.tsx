import { StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { AnswerType } from "../../TestScreen";
import { ArticleType } from "../../../../store/DailyWordStore";

type TestModalType = {
    isModalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isCorrect: boolean | null,
    changeQuestion: () => void,
    correctAnswer: AnswerType,
    scorePerQuestion: number,
    setChosenAnswer: (chosenAnswer: AnswerType | null) => void
    explanation: string,
}

const TestModal: React.FC<TestModalType> = (
    {
        isModalVisible, 
        setModalVisible, 
        isCorrect, 
        changeQuestion, 
        correctAnswer, 
        scorePerQuestion, 
        setChosenAnswer,
        explanation
    }) => {
    return (
        <Modal
            style={styles.testModal}
            isVisible={isModalVisible}
            animationIn="slideInUp"
            backdropColor="rgba(220, 53, 69, 0)"
            >
            <View style={styles.testModal_wrapper}>
                <View style={[styles.testModal_wrapper_content, isCorrect ? {backgroundColor: "rgba(25, 135, 84, 0.15)"} 
                    : {backgroundColor: "rgba(220, 53, 69, 0.15)"}]}>
                    <Text style={styles.testModal_wrapper_title}>{isCorrect ? "Вы ответили верно" : "Правильный ответ:"}</Text>
                    {isCorrect ? 
                        <View style={styles.testModal_wrapper_win}>
                            <Text style={styles.testModal_wrapper_win_text}>+ {scorePerQuestion}</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../../../assets/img/gem.png")}/>
                        </View>
                    :   <Text style={styles.testModal_wrapper_answer}>{correctAnswer.text}</Text>
                    }
                    <View style={styles.testModal_notes}>
                        <View>
                            <Text style={styles.testModal_notes_text}>
                                Примечание
                            </Text>
                            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                                <Text style={styles.testModal_notes_explanation}>
                                    {explanation}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.testModal_button, isCorrect ? {backgroundColor: COLORS.green} 
                            : {backgroundColor: COLORS.red}]} 
                        onPress={() => {
                            changeQuestion();
                            setModalVisible(false);
                            setChosenAnswer(null)
                        }}
                        >
                        <Text style={styles.testModal_button_text}>Далее</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </Modal>
    );
}

export default TestModal;

const styles = StyleSheet.create({
    testModal: {
        margin: 0,
        justifyContent: "flex-end"
    },
    testModal_wrapper: {
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    testModal_wrapper_content: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    testModal_wrapper_win: {
        marginTop: 8,
        flexDirection: "row", 
        alignItems: "center", 
        alignSelf: "center"
    },
    testModal_wrapper_win_text: {
        ...TYPOGRAPHY.p1,
        marginRight: 8,
        color: COLORS.black
    },
    testModal_wrapper_title: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
        alignSelf: "center",
    },
    testModal_wrapper_answer: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.black,
        alignSelf: "center",
    },
    testModal_notes: {
        marginBottom: 16,
        width: "100%",
        alignItems: "center",
    },
    testModal_notes_text: {
        marginVertical: 8,
        ...TYPOGRAPHY.h3,
        color: COLORS.gray,
        width: "100%",
        alignSelf: "center"
    },
    testModal_notes_explanation: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
        width: "100%",
        alignSelf: "center",
        textAlign: "center",
    },
    testModal_button: {
        paddingVertical: 12,
        paddingHorizontal: 111,
        alignSelf: "center",
        borderRadius: 24,
    },
    testModal_button_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    }
})