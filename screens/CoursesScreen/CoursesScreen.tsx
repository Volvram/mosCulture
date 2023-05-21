import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type CoursesScreenProps = {
    navigation: any,
}

const CoursesScreen: React.FC<CoursesScreenProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScreenHeader buttons={
                [{image: require("../../assets/img/search.png"), onClick: () => {}}, 
                {image: require("../../assets/img/sliders.png"), onClick: () => {}}]
                } />
            <View style={styles.courses}>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    courses: {
        height: '100%',
    }
});