import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import DailyWord from "./components/DailyWord/DailyWord";
import News from "./components/News/News";
import TrialTest from "./components/TrialTest/TrialTest";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import AboutArt from "./components/AboutArt/AboutArt";
import QuestionsToTeacher from "./components/QuestionsToTeacher/QuestionsToTeacher";
import AppIntro from 'react-native-app-intro';

type FeedScreenProps = {
    navigation: any,
}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader buttons={
                [{image: require("../../assets/img/search.png"), onClick: () => {}}, 
                {image: require("../../assets/img/sliders.png"), onClick: () => {}}]
                } />
            <View style={styles.feed}>
                <ScrollView onScroll={() => {}}>
                    <News navigation={navigation} />
                    <DailyWord navigation={navigation} />
                    <AboutArt navigation={navigation} />
                    <QuestionsToTeacher navigation={navigation} />
                    <TrialTest navigation={navigation} />
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    feed: {
        height: '100%',
        flex: 1,
    }
});