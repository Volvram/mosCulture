import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import React from "react";
import { TYPOGRAPHY } from "../../config/typography";
import Redirect from "./components/Redirect/Redirect";
import { useLocalStore } from "../../utils/useLocalStore";
import { SignInStore } from "../../store/SignInStore";
import { observer } from "mobx-react-lite";

type SignInScreenProps = {
    navigation: any,
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    const [hiddenPassword, setHiddenPassword] = React.useState(true);
    const [incorrectData, setIncorrectData] = React.useState(false);

    const signInStore = useLocalStore(() => new SignInStore());

    async function authorize(){
        const authorization = await signInStore.requestLogin();
        if (authorization) {
            navigation.goBack();
        } else if (authorization === false) {
            setIncorrectData(true);
        }
    }

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnClose.png")} onPress={() => {navigation.navigate("Лента")}} />
            <ScrollView style={styles.signIn}>
                <ImageBackground style={styles.signIn_background}
                    source={require("../../assets/img/decoration_2.png")}>
                    <View style={{marginHorizontal: 16}}>
                        <Text style={styles.signIn_title}>Авторизация</Text>

                        {incorrectData &&
                            <View style={styles.signIn_error}>
                                <Image style={{width: 20, height: 20}} source={require("../../assets/img/exclamation.png")} />
                                <Text style={styles.signIn_error_text}>Неверная электронная почта или пароль.</Text>
                            </View>
                        }
                        <TextInput
                            style={styles.signIn_input}
                            onChangeText={(value) => {signInStore.setEmail(value)}}
                            placeholder="Электронная почта"
                            placeholderTextColor={COLORS.gray}
                        />
                        <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
                            <TextInput
                                secureTextEntry={hiddenPassword}
                                style={styles.signIn_input}
                                onChangeText={(value) => {signInStore.setPassword(value)}}
                                placeholder="Пароль"
                                placeholderTextColor={COLORS.gray}
                            />
                            <TouchableOpacity style={styles.signIn_eye} onPress={() => setHiddenPassword(!hiddenPassword)}>
                                <Image style={styles.signIn_eye_image} 
                                    source={hiddenPassword ? require("../../assets/img/eye.png") 
                                    : require("../../assets/img/eye-slash.png")}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.signIn_submit} onPress={() => {
                            authorize();
                        }}>
                            <Text style={styles.signIn_submit_text}>Войти</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Redirect navigation={navigation} />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

export default observer(SignInScreen);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: COLORS.white
    },
    signIn: {
        width: '100%',
        flex: 1,
    },
    signIn_background: {
        paddingTop: 32,
    },
    signIn_title: {
        ...TYPOGRAPHY.h1,
        marginBottom: "50%",
        color: COLORS.black,
        alignSelf: "center",
    },
    signIn_error: {
        position: "absolute",
        top: "30%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: "#FAE1E3",
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    signIn_error_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: "#DC3545",
    },
    signIn_input: {
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
    signIn_eye: {
        marginLeft: -34,
    },
    signIn_eye_image: {
        width: 20,
        height: 20,
    },
    signIn_submit: {
        marginTop: 30,
        marginBottom: 64,
        paddingVertical: 12,
        paddingHorizontal: 77.5,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
        alignSelf: "center"
    },
    signIn_submit_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
        textAlign: "center",
    },
})