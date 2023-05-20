import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import DailyFact from "./components/DailyFact/DailyFact";
import Popular from "./components/Popular/Popular";

type MainScreenProps = {
    navigation: any,
}

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const dimensions = useWindowDimensions();

    return (
        <View style={styles.container}>
            <ScreenHeader searchVisible={true} filtersVisible={true} />
            <View style={styles.main}>
                <DailyFact />
                <Popular navigation={navigation} />
            </View>
            <StatusBar style="auto" />
        </View>
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
    }
});