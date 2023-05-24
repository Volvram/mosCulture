import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import DailyWord from "./components/DailyWord/DailyWord";
import News from "./components/News/News";
import TrialTest from "./components/TrialTest/TrialTest";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type FeedScreenProps = {
    navigation: any,
}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {

    // function handleInfinityScroll(event: any) {
    //     let mHeight = event.nativeEvent.layoutMeasurement.height;
    //     let cSize = event.nativeEvent.contentSize.height;
    //     let Y = event.nativeEvent.contentOffset.y;
    //     if (Math.ceil(mHeight + Y) >= cSize) return true;
    //     return false;
    // }

    return (
        <View style={styles.container}>
            <ScreenHeader buttons={
                [{image: require("../../assets/img/search.png"), onClick: () => {}}, 
                {image: require("../../assets/img/sliders.png"), onClick: () => {}}]
                } />
            <View style={styles.feed}>
                <ScrollView onScroll={() => {}}>
                    <News navigation={navigation} />
                    <DailyWord />
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