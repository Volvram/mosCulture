import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import YourCourses from "./components/YourCourses/YourCourses";
import Interesting from "./components/Interesting/Interesting";
import Other from "./components/Other/Other";

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
            <ScrollView style={styles.courses}>
                <YourCourses navigation={navigation} />
                <Interesting navigation={navigation} />
                <Other navigation={navigation} />
            </ScrollView>
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