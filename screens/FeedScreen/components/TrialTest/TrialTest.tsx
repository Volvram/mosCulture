import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import rootStore from "../../../../store/RootStore/instance";

type TrialTestType = {
    navigation: any
}

const TrialTest: React.FC<TrialTestType> = ({navigation}) => {
    return (
        <View style={styles.trialTest}>
            <ImageBackground style={styles.trialTest_background} source={require("../../../../assets/img/trialTestBack.png")}>
                <ImageBackground style={styles.trialTest_background_text} source={require("../../../../assets/img/textTile.png")}>
                    <View style={styles.trialTest_content}>
                        <Text style={styles.trialTest_content_question}>
                            В честь какой известной балерины назвали десерт?
                        </Text>
                        <View style={styles.trialTest_content_answers}>
                            <TouchableOpacity style={styles.trialTest_content_answers_answer}>
                                <Text style={styles.trialTest_content_answers_answer_text}>
                                    Майя Плисецкая
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trialTest_content_answers_answer}>
                                <Text style={styles.trialTest_content_answers_answer_text}>
                                Анна Павлова
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trialTest_content_answers_answer}>
                                <Text style={styles.trialTest_content_answers_answer_text}>
                                Галина Уланова
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.trialTest_content_answers_answer}>
                                <Text style={styles.trialTest_content_answers_answer_text}>
                                Мари Рамберг
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.trialTest_content_more}>
                            <View style={styles.trialTest_content_more_feedBack}>
                                <View style={styles.trialTest_content_more_feedBack_result}>

                                </View>
                                <TouchableOpacity style={styles.trialTest_content_more_button}
                                    onPress={() => {
                                        rootStore.menu.setActiveSection("entertainments")
                                        navigation.navigate("Развлечения");
                                    }}>
                                    <Text style={styles.trialTest_content_more_button_text}>
                                        Больше тестов
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={require("../../../../assets/img/sculpture.png")} />
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    )
}

export default TrialTest;

const styles = StyleSheet.create({
    trialTest: {
        width: "100%",
        flex: 1,
        backgroundColor: COLORS.lightGray
    },
    trialTest_background: {
        width: "100%",
        height: "100%",
    },
    trialTest_background_text: {
        width: "100%",
        height: "100%",
    },
    trialTest_content: {
        paddingTop: 177,
        width: "100%",
        height: "100%",
    },
    trialTest_content_question: {
        ...TYPOGRAPHY.h2,
        paddingHorizontal: 16,
        color: COLORS.black,
        textAlign: "right"
    },
    trialTest_content_answers: {
        marginTop: 16,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    trialTest_content_answers_answer: {
        margin: 6,
        paddingVertical: 13,
        paddingHorizontal: 18,
        borderRadius: 24,
        borderColor: COLORS.black,
        borderStyle: "solid",
        borderWidth: 1,
        flexBasis: "46%",
        justifyContent: "center",
        alignItems: "center"
    },
    trialTest_content_answers_answer_text: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    trialTest_content_more: {
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    trialTest_content_more_feedBack: {

    },
    trialTest_content_more_feedBack_result: {
        height: 106,
    },
    trialTest_content_more_button: {
        marginTop: 54,
        marginBottom: 150,
        marginLeft: 16,
        paddingVertical: 12,
        paddingHorizontal: 35,
        backgroundColor: COLORS.black,
        borderRadius: 24,
    },
    trialTest_content_more_button_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
    }
})