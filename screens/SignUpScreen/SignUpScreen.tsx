import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import React from "react";
import { StatusBar } from "expo-status-bar";

type SignUpScreenProps = {
    navigation: any,
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const nameInput = React.useRef<any>(null);
    const emailInput = React.useRef<any>(null);
    const passwordInput = React.useRef<any>(null);

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Регистрация" onPress={() => {navigation.goBack()}} />
            <View style={styles.signUp}>
            <TextInput
                    ref = {nameInput}
                    style={styles.signUp_input}
                    onChangeText={() => {}}
                    placeholder="Ваше имя"
                />
                <TextInput
                    ref = {emailInput}
                    style={styles.signUp_input}
                    onChangeText={() => {}}
                    placeholder="Электронная почта"
                />
                <TextInput
                    ref = {passwordInput}
                    style={styles.signUp_input}
                    onChangeText={() => {}}
                    placeholder="Пароль"
                />
                <TouchableOpacity style={styles.signUp_submit} onPress={() => {
                    if (nameInput.current) {
                        console.log(nameInput.current.value);
                    }
                    if (emailInput.current) {
                        console.log(emailInput.current.value);
                    }
                    if (passwordInput.current) {
                        console.log(passwordInput.current.value);
                    }
                    
                }}>
                    <Text style={styles.signUp_submit_text}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <View style={styles.signUp_redirect}>
                    <Text>Уже есть аккаунт? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Войти")}>
                        <Text style={styles.signUp_redirect_signIn}>Войти</Text>
                    </TouchableOpacity>
                </View>
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
        paddingHorizontal: 16,
        width: '100%',
        alignItems: "center",

    },
    signUp_input: {
        marginVertical: 10,
        width: "100%",
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    signUp_submit: {
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        maxWidth: 240,
        backgroundColor: "#18181B",
        borderRadius: 16,
    },
    signUp_submit_text: {
        color: COLORS.white,
        textAlign: "center",
    },
    signUp_redirect: {
        marginTop: 32,
        display: "flex",
        flexDirection: "row",
    },
    signUp_redirect_signIn : {
        color: "#FF5D9D"
    }
})