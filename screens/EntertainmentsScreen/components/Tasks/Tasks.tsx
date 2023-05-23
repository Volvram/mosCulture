import { StyleSheet, View, ScrollView, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";

type TasksProps = {
    navigation: any,
}

const Tasks: React.FC<TasksProps> = ({ navigation }) => {
    return (
        <View style={styles.tasks}>
            <ScrollView>
                {[1, 2, 3].map(task => {
                    return (
                        <TouchableOpacity key={task} style={styles.tasks_list_task} onPress={() => navigation.navigate("Задание")}>
                            <ImageBackground style={styles.tasks_list_task_details} 
                                source={require("../../../../assets/img/musicImg.png")}
                                resizeMode="cover">
                                <View>
                                    <Text style={styles.tasks_list_task_details_title}>Музыка</Text>
                                    <View style={{marginTop: 22}}>
                                        <Text style={styles.tasks_list_task_details_section}>Пройдено</Text>
                                        <View style={{flexDirection: "row", alignItems:"center"}}>
                                            <Image style={styles.tasks_list_task_details_section_img} 
                                                source={require("../../../../assets/img/file.png")}/>
                                            <Text style={styles.tasks_list_task_details_section_nums}>8 / 10</Text>
                                        </View>
                                    </View>
                                    <View style={{marginTop: 16}}>
                                        <Text style={styles.tasks_list_task_details_section}>Собрано</Text>
                                        <View style={{flexDirection: "row", alignItems:"center"}}>
                                            <Image style={styles.tasks_list_task_details_section_img} 
                                                source={require("../../../../assets/img/gem.png")}/>
                                            <Text style={styles.tasks_list_task_details_section_nums}>71 / 100</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                <CircularProgress
                                    value={75}
                                    radius={48}
                                    duration={2000}
                                    progressValueColor={COLORS.black}
                                    activeStrokeColor={COLORS.blueAction}
                                    inActiveStrokeColor={COLORS.gray}
                                    maxValue={100}
                                    valueSuffix={'%'}
                                    titleColor={'white'}
                                    titleStyle={{fontWeight: 'bold'}}
                                />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                    )
                })
                }
            </ScrollView>
        </View>
    )
}

export default Tasks;

const styles = StyleSheet.create({
    tasks: {
        flex: 1,
    },
    tasks_list: {
        width: "100%"
    },
    tasks_list_task: {
        marginVertical: 8,
        width: "100%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    },
    tasks_list_task_details: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tasks_list_task_details_title: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black
    },
    tasks_list_task_details_section: {
        ...TYPOGRAPHY.p1,
        marginBottom: 3,
        color: COLORS.gray
    },
    tasks_list_task_details_section_img: {
        width: 20,
        height: 20,
    },
    tasks_list_task_details_section_nums: {
        ...TYPOGRAPHY.h3,
        marginLeft: 8,
        color: COLORS.black
    }
})