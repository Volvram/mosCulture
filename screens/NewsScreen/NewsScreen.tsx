import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { observer } from "mobx-react-lite";
import NewsScreenStore from "../../store/NewsScreenStore";
import { useLocalStore } from "../../utils/useLocalStore";
import { TYPOGRAPHY } from "../../config/typography";
import NewsList from "./components/NewsList/NewsList";

type MainScreenProps = {
    navigation: any,
}

const NewsScreen: React.FC<MainScreenProps> = ({ navigation }) => {

    const newsScreenStore = useLocalStore(() => new NewsScreenStore());

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Новости" onPress={() => {navigation.goBack()}} />
            <View style={styles.news}>
                <View style={{height: 35, width: "100%"}}>
                    <ScrollView style={styles.news_tags} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast">
                        {["Все", "Культура", "Образование", "Искусство", "Музыка"].map(tag => {
                            return (
                                <TouchableOpacity 
                                    style={newsScreenStore.activeTags.find(el => el === tag) 
                                        ? styles.news_tags_tag__active 
                                        : styles.news_tags_tag} 
                                    key={tag} onPress={() => {newsScreenStore.toggleActiveTag(tag)}}>

                                    <Text style={newsScreenStore.activeTags.find(el => el === tag) 
                                        ? styles.news_tags_tag__active_text 
                                        : styles.news_tags_tag_text}>{tag}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>
                <NewsList activeTags={newsScreenStore.activeTags} navigation={navigation} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default observer(NewsScreen);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    news: {
        paddingHorizontal: 16,
        flex:1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    news_tags: {
        display: 'flex',
        flexDirection: 'row',
    },
    news_tags_tag: {
        marginHorizontal: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: COLORS.gray100,
        borderRadius: 16,
    },
    news_tags_tag_text: {
        ...TYPOGRAPHY.small,
        color: COLORS.gray400
    },
    news_tags_tag__active: {
        marginHorizontal: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: COLORS.gray900,
        borderRadius: 16,
    },
    news_tags_tag__active_text: {
        ...TYPOGRAPHY.small,
        color: COLORS.white
    },
});