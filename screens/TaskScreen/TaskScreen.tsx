import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { COLORS } from "../../config/colors";
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { TYPOGRAPHY } from "../../config/typography";
import ListElement from "../../components/ListElement/ListElement";
import TaskModal from "./components/TaskModal/TaskModal";
import { useLocalStore } from "../../utils/useLocalStore";
import { TaskScreenStore } from "../../store/TaskScreenStore";
import rootStore from "../../store/RootStore/instance";
import { observer } from "mobx-react-lite";

type TaskScreenProps = {
    route: any,
    navigation: any,
}

const TaskScreen: React.FC<TaskScreenProps> = ({ route, navigation }) => {
    const { artId, userScore, scoreSum, name } = route.params;
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [chosenTest, setChosenTest] = React.useState<number | null>(null);

    const taskScreenStore = useLocalStore(() => new TaskScreenStore());

    React.useEffect(() => {
        taskScreenStore.setArtId(artId);
    }, [artId]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints image={require("../../assets/img/btnBack.png")} 
                onPress={() => navigation.goBack()} 
                points={rootStore.user.score}/>
            <View style={styles.task}>
                <View style={styles.task_title}>
                    <Text style={styles.task_title_text}>{name}</Text>
                    <View style={styles.task_title_points}>
                        <Text style={styles.task_title_points_num}>{userScore ? userScore : " - "} / {scoreSum ? scoreSum : " - "}</Text>
                        <Image style={styles.task_title_points_image} source={require("../../assets/img/gem.png")} />
                    </View>
                </View>
                <ScrollView style={styles.task_list}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}>
                        {taskScreenStore.tests && taskScreenStore.tests.map(test => {
                            return (
                                <ListElement key={test.title} 
                                    top={test.difficulty} 
                                    middle={test.title} 
                                    bottom={test.score ? `Результат: ${test.score} / ${scoreSum}` : "Попыток не было"} 
                                    onPress={() => {
                                        setChosenTest(test.id); 
                                        toggleModal()
                                    }} 
                                    image={test.image}
                                    resizeMode="cover"
                                />
                            )
                        })
                        }
                </ScrollView>
            </View>
            <TaskModal navigation={navigation} 
                isModalVisible={isModalVisible} 
                setModalVisible={setModalVisible} 
                chosenTest={chosenTest}
                />
            <StatusBar style="auto" />
        </View>
    );
}
export default observer(TaskScreen);

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