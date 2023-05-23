import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { TYPOGRAPHY } from "../../config/typography";
import ListElement from "../../components/ListElement/ListElement";

type TaskScreenProps = {
    navigation: any,
}

const tests = [
    {
        id: "1",
        difficulty: "Простой",
        title: "Художники конструктивисты",
        result: "Результат: 5 / 10"
    },
    {
        id: "2",
        difficulty: "Простой",
        title: "Художники конструктивисты",
        result: "Попыток не было"
    },
    {
        id: "3",
        difficulty: "Средний",
        title: "Художники конструктивисты",
        result: "Попыток не было"
    },
    {
        id: "4",
        difficulty: "Средний",
        title: "Художники конструктивисты",
        result: "Результат: 10 / 10"
    },
    {
        id: "5",
        difficulty: "Сложный",
        title: "Художники конструктивисты",
        result: "Результат: 7 / 10"
    },
]

const TaskScreen: React.FC<TaskScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeaderPoints image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()} />
            <View style={styles.task}>
                <View style={styles.task_title}>
                    <Text style={styles.task_title_text}>Музыка</Text>
                    <View style={styles.task_title_points}>
                        <Text style={styles.task_title_points_num}>71 / 100</Text>
                        <Image style={styles.task_title_points_image} source={require("../../assets/img/gem.png")} />
                    </View>
                </View>
                <ScrollView style={styles.task_list}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                        {tests.map(test => {
                            return (
                                <ListElement key={test.id} top={test.difficulty} middle={test.title} bottom={test.result} 
                                     onPress={() => {}} />
                            )
                        })
                        }
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default TaskScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    task: {
        marginTop: 16,
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
        flex: 1,
    },
    task_title: {
        paddingTop: 13,
        paddingBottom: 11,
        paddingHorizontal: 16,
        width: "100%",
        borderRadius: 24,
        backgroundColor: COLORS.lightGray,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    task_title_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
    },
    task_title_points: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    task_title_points_num: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black
    },
    task_title_points_image: {
        marginLeft: 8,
        width: 20,
        height: 20,
    },
    task_list: {
        marginTop: 16,
    }
});