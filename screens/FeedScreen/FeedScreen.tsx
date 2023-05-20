import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import DailyWord from "./components/DailyWord/DailyWord";
import News from "./components/News/News";

type FeedScreenProps = {
    navigation: any,
}

const FeedScreen: React.FC<FeedScreenProps> = ({ navigation }) => {
    const dimensions = useWindowDimensions();

    // function handleInfinityScroll(event: any) {
    //     let mHeight = event.nativeEvent.layoutMeasurement.height;
    //     let cSize = event.nativeEvent.contentSize.height;
    //     let Y = event.nativeEvent.contentOffset.y;
    //     if (Math.ceil(mHeight + Y) >= cSize) return true;
    //     return false;
    // }

    return (
        <View style={styles.container}>
            <ScreenHeader searchVisible={true} filtersVisible={true} />
            <View style={styles.feed}>
                <ScrollView onScroll={() => {}}>
                    <News navigation={navigation} />
                    <DailyWord />
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