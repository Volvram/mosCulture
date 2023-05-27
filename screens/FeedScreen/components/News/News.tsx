import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import NewsList from "./components/NewsList/NewsList";
import React from "react";

type NewsProps = {
    navigation: any,
}

const News: React.FC<NewsProps> = ({ navigation }) => {
    return (
        <View style={styles.news}>
            <View style={styles.news_header}>
                <Text style={styles.news_title}>Новости</Text>
            </View>
            <NewsList navigation={navigation} />
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    news: {
        marginTop: 32,
        flex: 1,
        backgroundColor: COLORS.white,
    },
    news_header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    news_title: {
        ...TYPOGRAPHY.h1,
        paddingHorizontal: 16,
    },
})