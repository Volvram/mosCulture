import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import React from "react";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { QuestionsToTeacherStore } from "../../../../store/QuestionsToTeacher";
import { formatDate } from "../../../../config/formatDate";
import { observer } from "mobx-react-lite";

type QuestionsToTeacherProps = {
    navigation: any
}

const QuestionsToTeacher: React.FC<QuestionsToTeacherProps> = ({navigation}) => {
    const questionsToTeachersStore = useLocalStore(() => new QuestionsToTeacherStore());

    React.useEffect(() => {
        questionsToTeachersStore.requestQuestions();
    }, []);

    return (
        <View style={styles.questions}>
            <Text style={styles.questions_title}>Вопросы педагогу</Text>
            {questionsToTeachersStore.questions && 
                <View style={{alignSelf: "center", zIndex: 0}}>
                    <Text style={styles.questions_description}>
                        {questionsToTeachersStore.questions 
                        && questionsToTeachersStore.questions[0].description}
                    </Text>
                    <ImageBackground style={styles.questions_background} 
                        imageStyle={{borderRadius: 16}} 
                        source={{uri: questionsToTeachersStore.questions[0].image}}>
                        <View style={styles.questions_content}>
                            <Text style={styles.questions_content_date}>
                                {formatDate(questionsToTeachersStore.questions[0].createdAt)}
                            </Text>
                            <Text style={styles.questions_content_name}>
                                {questionsToTeachersStore.questions[0].name}
                            </Text>
                            <View>
                                {questionsToTeachersStore.questions[0].arts && questionsToTeachersStore.questions[0].arts.map(art => {
                                    return (
                                        <View key={art.id} style={styles.questions_content_art}>
                                            <Text style={styles.questions_content_art_text}>
                                                {art.name}
                                            </Text>
                                        </View>
                                    )
                                })
                                }   
                            </View>                  
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.questions_watch}
                        onPress={() => {
                            if (questionsToTeachersStore.questions) {
                                navigation.navigate("Пост", { post: questionsToTeachersStore.questions[0], postType: "article"})
                            }
                        }}>
                        <Text style={styles.questions_watch_text}>Смотреть Видео</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default observer(QuestionsToTeacher);

const styles = StyleSheet.create({
    questions: {
        paddingHorizontal: 16,
        width: "100%",
        flex: 1,
        backgroundColor: 'transparent'
    },
    questions_title: {
        ...TYPOGRAPHY.h1,
        marginTop: -50,
        color: COLORS.black,
        alignSelf: "center",
    },
    questions_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center"
    },
    questions_background: {
        marginTop: 16,
        minHeight: 200,
    },
    questions_content: {
        paddingHorizontal: 32,
        width: "100%",
        minHeight: 200,
        backgroundColor: "rgba(24, 24, 27, 0.33)",
        borderRadius: 16,
        alignItems: "center",
        alignSelf: "center",
    },
    questions_content_date: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.white
    },
    questions_content_name: {
        ...TYPOGRAPHY.h3,
        marginTop: 30,
        color: COLORS.white,
        textAlign: "center"
    },
    questions_content_art: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 8,
    },
    questions_content_art_text: {
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
        textAlign: "center"
    },
    questions_watch: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 29,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        alignSelf: "center",
    },
    questions_watch_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black
    }
})