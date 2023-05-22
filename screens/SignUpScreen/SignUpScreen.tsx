import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import React from "react";
import { TYPOGRAPHY } from "../../config/typography";
import Redirect from "./components/Redirect/Redirect";

type SignUpScreenProps = {
    navigation: any,
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [hiddenPassword, setHiddenPassword] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnClose.png")} onPress={() => {navigation.goBack()}} />
            <View style={styles.signUp}>
                <ImageBackground style={styles.signUp_background}
                    source={require("../../assets/img/decoration_2.png")}>
                    <View style={{marginHorizontal: 16}}>
                        <Text style={styles.signUp_title}>Регистрация</Text>
                        <TextInput
                            style={styles.signUp_input}
                            onChangeText={(value) => {setEmail(value)}}
                            placeholder="Ваше имя"
                            placeholderTextColor={COLORS.gray}
                        />
                        <TextInput
                            style={styles.signUp_input}
                            onChangeText={(value) => {setEmail(value)}}
                            placeholder="Электронная почта"
                            placeholderTextColor={COLORS.gray}
                        />
                        <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
                            <TextInput
                                secureTextEntry={hiddenPassword}
                                style={styles.signUp_input}
                                onChangeText={(value) => {setPassword(value)}}
                                placeholder="Пароль"
                                placeholderTextColor={COLORS.gray}
                            />
                            <TouchableOpacity style={styles.signUp_eye} onPress={() => setHiddenPassword(!hiddenPassword)}>
                                <Image style={styles.signUp_eye_image} 
                                    source={hiddenPassword ? require("../../assets/img/eye.png") 
                                    : require("../../assets/img/eye-slash.png")}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.signUp_submit} onPress={() => {
                            console.log(email);
                            console.log(password);
                        }}>
                            <Text style={styles.signUp_submit_text}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Redirect navigation={navigation} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    signUp: {
        width: '100%',
    },
    signUp_background: {
        paddingTop: 32,
    },
    signUp_title: {
        ...TYPOGRAPHY.h1,
        marginBottom: "30%",
        color: COLORS.black,
        alignSelf: "center",
    },
    signUp_input: {
        ...TYPOGRAPHY.p1,
        marginVertical: 6,
        width: "100%",
        paddingTop: 13,
        paddingBottom: 11,
        paddingLeft: 16,
        paddingRight: 42,
        backgroundColor: COLORS.white,
        borderRadius: 24,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DEE2E6",
    },
    signUp_eye: {
        marginLeft: -34,
    },
    signUp_eye_image: {
        width: 20,
        height: 20,
    },
    signUp_submit: {
        marginTop: 30,
        marginBottom: 64,
        paddingVertical: 12,
        paddingHorizontal: 26,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
        alignSelf: "center"
    },
    signUp_submit_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    },
})