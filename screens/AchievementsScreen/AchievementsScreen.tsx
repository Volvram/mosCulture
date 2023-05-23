import { StyleSheet, View, Text, ScrollView } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import Card from "../../components/Card/Card";
import React from "react";
import ScreenHeaderAchievements from "../../components/ScreenHeaderAchievements/ScreenHeaderAchievements";

type AchievementsScreenProps = {
    navigation: any
}

const achievements = [
    {
        id: "1",
        url: require("../../assets/img/achievement_1.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 175,
        received: false,
    },
    {
        id: "2",
        url: require("../../assets/img/achievement_2.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 262,
        received: true,
    },
    {
        id: "3",
        url: require("../../assets/img/achievement_3.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 262,
        received: false,
    },
    {
        id: "4",
        url: require("../../assets/img/achievement_4.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 262,
        received: true,
    },
    {
        id: "5",
        url: require("../../assets/img/achievement_5.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 100,
        received: true,
    },
    {
        id: "6",
        url: require("../../assets/img/achievement_6.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 175,
        received: false,
    },
    {
        id: "7",
        url: require("../../assets/img/achievement_2.png"),
        name: "Lorem ipsum dolor sit aet",
        width: 175,
        height: 262,
        received: false,
    },
]

const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ navigation }) => {

    // ### МЕТОД ДЛЯ ИЗВЛЕЧЕНИЯ РАЗМЕРОВ
    // React.useEffect(() => {
    //     const url = "https://www.androiddeveloper.co.in/blog/wp-content/uploads/2020/02/2.React-Native.png"

    //     Image.getSize(url, (width, height) => {
    //         console.log(width)
    //         console.log(height)
    //     });
    // }, []);
    

    return (
        <View style={styles.container}>
            <ScreenHeaderAchievements image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()}/>
            <View style={styles.achievements}>
                <Text style={styles.achievements_title}>Галерея Достижений</Text>
                <View style={styles.achievements_scroll}>
                    <ScrollView style={styles.achievements_scroll_list} 
                        showsVerticalScrollIndicator={false}>
                        {
                            achievements.slice(0,achievements.length/2).map(achievement => {
                                return (
                                    <Card key={achievement.id} cardStyle={achievement.received ? 
                                            styles.achievements_scroll_list_item 
                                            : styles.achievements_scroll_list_item_disabled}
                                        bottom={achievement.name}
                                        image={achievement.url} 
                                        resizeMode="contain" 
                                        width={achievement.width} 
                                        height={achievement.height}
                                        onPress={achievement.received 
                                            ? () => navigation.navigate("Достижение", {achievement: achievement}) 
                                            : () => {}}/>
                                )
                            })
                        }
                    </ScrollView>
                    <ScrollView style={styles.achievements_scroll_list} 
                        showsVerticalScrollIndicator={false}>
                        {achievements.slice(achievements.length/2,achievements.length).map(achievement => {
                                return (
                                    <Card key={achievement.id} cardStyle={achievement.received ? 
                                            styles.achievements_scroll_list_item 
                                            : styles.achievements_scroll_list_item_disabled}
                                        bottom={achievement.name}
                                        image={achievement.url} 
                                        resizeMode="contain" 
                                        width={achievement.width} 
                                        height={achievement.height}
                                        onPress={achievement.received 
                                            ? () => navigation.navigate("Достижение", {achievement: achievement}) 
                                            : () => {}}/>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    achievements: {
        marginTop: 32,
        flex:1,
        width: "100%"
    },
    achievements_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
    },
    achievements_scroll: {
        flex: 1,
        marginTop: 16,
        flexDirection: 'row',
    },
    achievements_scroll_list: {
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 6
    },
    achievements_scroll_list_item: {
        marginVertical: 6,
        alignSelf: "center"
    },
    achievements_scroll_list_item_disabled: {
        marginVertical: 6, 
        alignSelf: "center",
        opacity: 0.5,
    }
})