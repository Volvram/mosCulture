import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type EntertainmentScreenProps = {
    navigation: any,
}

const EntertainmentScreen: React.FC<EntertainmentScreenProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Развлечения" onPress={() => {navigation.goBack()}} />
            <View style={styles.entertainment}>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default EntertainmentScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    entertainment: {
        height: '100%',
    }
});