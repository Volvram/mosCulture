import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type MainScreenProps = {
    navigation: any,
}

const NewsScreen: React.FC<MainScreenProps> = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Новости" onPress={() => {navigation.goBack()}} />
            <View style={styles.news}>
                <Text>Here will be the news!</Text>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    news: {
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});