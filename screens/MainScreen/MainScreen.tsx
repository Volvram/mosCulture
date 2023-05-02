import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type MainScreenProps = {
    navigation: any,
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const dimensions = useWindowDimensions();

    return (
        <ScrollView style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnNav.png")} title="Главная" onPress={() => {navigation.openDrawer()}} />
            <View style={styles.main}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    main: {
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});