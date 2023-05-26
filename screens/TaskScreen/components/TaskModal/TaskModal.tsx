import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import React from "react";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { TaskModalStore } from "../../../../store/TaskModalStore";
import { observer } from "mobx-react-lite";

type TaskModalType = {
    navigation: any,
    isModalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    chosenTest: number | null
}

const TaskModal: React.FC<TaskModalType> = ({navigation, isModalVisible, setModalVisible, chosenTest}) => {

    const taskModalStore = useLocalStore(() => new TaskModalStore(chosenTest));

    React.useEffect(() => {
        taskModalStore.setTaskId(chosenTest);
        taskModalStore.requestTask();
    }, [chosenTest]);

    return (
        <Modal
            style={styles.taskModal}
            isVisible={isModalVisible}
            animationIn="slideInUp"
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => setModalVisible(false)}>

            {taskModalStore.task ? 
                <View style={styles.taskModal_wrapper}>
                <Image style={styles.taskModal_wrapper_image} 
                    source={{uri: taskModalStore.task.image}} 
                    resizeMode="cover"/>
                <View style={styles.taskModal_wrapper_details}>
                    <View style={styles.taskModal_wrapper_details_top}>
                        <View style={styles.taskModal_wrapper_details_top_difficulty}>
                            <Text style={styles.taskModal_wrapper_details_top_difficulty_text}>
                                {taskModalStore.task.difficulty}
                            </Text>
                        </View>
                        <View style={styles.taskModal_wrapper_details_top_reward}>
                            <Text style={styles.taskModal_wrapper_details_top_reward_text}>Награда:</Text>
                            <Text style={styles.taskModal_wrapper_details_top_reward_num}>
                                {taskModalStore.task.scorePerQuestion}
                                ×
                                {taskModalStore.task.questions.length}
                            </Text>
                            <Image style={{width: 20, height: 20}} source={require("../../../../assets/img/gem.png")} />
                        </View>
                    </View>
                    <Text style={styles.taskModal_wrapper_title}>{taskModalStore.task.title}</Text>
                    <Text style={styles.taskModal_wrapper_description}>
                     {taskModalStore.task.description}
                    </Text>
                    <Text style={styles.taskModal_wrapper_rule}>За повторное прохождение очки не начисляются!</Text>
                    <View style={styles.taskModal_wrapper_bottom}>
                        <TouchableOpacity style={styles.taskModal_wrapper_bottom_back} 
                            onPress={() => {setModalVisible(false)}}>
                            <Text style={styles.taskModal_wrapper_bottom_back_text}>Назад</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.taskModal_wrapper_bottom_start} 
                            onPress={() => navigation.navigate("Тест", {test: taskModalStore.task})}>
                            <Text style={styles.taskModal_wrapper_bottom_start_text}>Начать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            : <ActivityIndicator style={styles. taskModal_dataIsLoading} size="large" color={COLORS.blueAction} />
        }
            
        </Modal>
    )
}

export default observer(TaskModal);

const styles = StyleSheet.create({
    taskModal: {
        margin: 0,
        minHeight: 542,
        justifyContent: "flex-end"
    },
    taskModal_wrapper: {
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    taskModal_wrapper_image: {
        width: "100%",
        minHeight: 220,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    taskModal_wrapper_details: {
        paddingTop: 16,
        paddingBottom: 40,
        paddingHorizontal: 16,
    },
    taskModal_wrapper_details_top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    taskModal_wrapper_details_top_difficulty: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: COLORS.lightGray
    },
    taskModal_wrapper_details_top_difficulty_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    },
    taskModal_wrapper_details_top_reward: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    taskModal_wrapper_details_top_reward_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    },
    taskModal_wrapper_details_top_reward_num: {
        ...TYPOGRAPHY.h3,
        marginHorizontal: 8,
        color: COLORS.black
    },
    taskModal_wrapper_title: {
        ...TYPOGRAPHY.h3,
        marginTop: 16,
        color: COLORS.black
    },
    taskModal_wrapper_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray
    },
    taskModal_wrapper_rule: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.blueAction
    },
    taskModal_wrapper_bottom: {
        marginTop: 32,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    taskModal_wrapper_bottom_back: {
        paddingVertical: 12,
        paddingHorizontal: 65.5,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
    },
    taskModal_wrapper_bottom_back_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    },
    taskModal_wrapper_bottom_start: {
        paddingVertical: 12,
        paddingHorizontal: 61.5,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    taskModal_wrapper_bottom_start_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    },
    taskModal_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        alignSelf: "center",
    }
})