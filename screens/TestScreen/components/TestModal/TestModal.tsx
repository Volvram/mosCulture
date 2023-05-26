import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { AnswerType } from "../../TestScreen";

type TestModalType = {
    isModalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isCorrect: boolean | null,
    changeQuestion: () => void,
    correctAnswer: AnswerType,
}

const TestModal: React.FC<TestModalType> = ({isModalVisible, setModalVisible, isCorrect, changeQuestion, correctAnswer}) => {
    return (
        <Modal
            style={styles.testModal}
            isVisible={isModalVisible}
            animationIn="slideInUp"
            >
            <View style={styles.testModal_wrapper}>
                <Text style={styles.testModal_wrapper_correct}>Правильный ответ:</Text>
                <Text style={styles.testModal_wrapper_correct_answer}>{correctAnswer.text}</Text>
                <TouchableOpacity style={styles.testModal_wrapper} 
                    onPress={() => {
                        changeQuestion();
                        setModalVisible(false);
                    }}
                    >
                    <Text style={styles.testModal_button}>Далее</Text>
                </TouchableOpacity> 
            </View>
            
        </Modal>
    );
}

export default TestModal;

const styles = StyleSheet.create({
    testModal: {
        margin: 0,
    },
    testModal_wrapper: {
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    testModal_wrapper_correct: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black
    },
    testModal_wrapper_correct_answer: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    testModal_button: {

    }
})