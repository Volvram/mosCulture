import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import React from "react";

type SignInScreenProps = {
    navigation: any,
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    const emailInput = React.useRef<any>(null);
    const passwordInput = React.useRef<any>(null);

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Авторизация" onPress={() => {navigation.goBack()}} />
            <View style={styles.signIn}>
                <TextInput
                    ref = {emailInput}
                    style={styles.signIn_input}
                    onChangeText={() => {}}
                    placeholder="Электронная почта"
                />
                <TextInput
                    ref = {passwordInput}
                    style={styles.signIn_input}
                    onChangeText={() => {}}
                    placeholder="Пароль"
                />
                <TouchableOpacity style={styles.signIn_submit} onPress={() => {
                    if (emailInput.current) {
                        console.log(emailInput.current.value);
                    }
                    if (passwordInput.current) {
                        console.log(passwordInput.current.value);
                    }
                    
                }}>
                    <Text style={styles.signIn_submit_text}>Войти</Text>
                </TouchableOpacity>
                <View style={styles.signIn_redirect}>
                    <Text>Нет аккаунта? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Зарегистрироваться")}>
                        <Text style={styles.signIn_redirect_signUp}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    signIn: {
        paddingHorizontal: 16,
        width: '100%',
        alignItems: "center",

    },
    signIn_input: {
        marginVertical: 10,
        width: "100%",
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    signIn_submit: {
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        maxWidth: 115,
        backgroundColor: "#18181B",
        borderRadius: 16,
    },
    signIn_submit_text: {
        color: COLORS.white,
        textAlign: "center",
    },
    signIn_redirect: {
        marginTop: 32,
        display: "flex",
        flexDirection: "row",
    },
    signIn_redirect_signUp : {
        color: "#FF5D9D"
    }
})