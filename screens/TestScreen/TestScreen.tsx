import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import * as Progress from 'react-native-progress';
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

type TestScreenProps = {
    navigation: any
}

const TestScreen: React.FC<TestScreenProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScreenHeaderPoints image={require("../../assets/img/btnClose.png")} onPress={() => {navigation.goBack()}}/>
            <View style={styles.test}>
                <Progress.Bar progress={0.1} 
                    width={null}
                    unfilledColor={COLORS.gray} 
                    borderColor={COLORS.white}/>
                <Text style={styles.test_question}>Question</Text>


                <TouchableOpacity style={styles.test_check}>
                    <Text style={styles.test_check_text}>Проверить</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
        color: COLORS.black,
        alignSelf: "center",
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
        color: COLORS.gray
    }
})