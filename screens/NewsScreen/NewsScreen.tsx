import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/Navigation/Navigation";

type NewsScreenProp = StackNavigationProp<RootStackParamList, 'News'>;

const NewsScreen: React.FC = () => {
    const navigation = useNavigation<NewsScreenProp>();

    return (
        <ScrollView style={styles.container}>
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
    },
    news: {
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});