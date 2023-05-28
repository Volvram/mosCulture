import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import Card from "../../../../components/Card/Card";
import { defineTagStyle } from "../../../../config/defineTagStyle";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { YourCoursesStore } from "../../../../store/YourCoursesStore";
import React from "react";
import { observer } from "mobx-react-lite";

const courses = [
    {
        id: 1,
        percent: "50%",
        tag: "Изобр. искусство",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        id: 2,
        percent: "43%",
        tag: "Музыка",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        id: 3,
        percent: "85%",
        tag: "Театр",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        id: 4,
        percent: "7%",
        tag: "Хореография",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
]

type YourCousesProps = {
    navigation: any,
}

const YourCourses: React.FC<YourCousesProps> = ({navigation}) => {
    const yourCoursessStore = useLocalStore(() => new YourCoursesStore());

    React.useEffect(() => {
        yourCoursessStore.requestCourses();
    }, [])

    return (
        <View style={styles.yourCourses}>
            <Text style={styles.yourCourses_title}>Ваши курсы</Text>
            <ScrollView
                style={styles.yourCourses_list}
                horizontal
                contentContainerStyle={{
                    flexGrow: 1, flexDirection: 'row',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast">

                {yourCoursessStore.courses ? yourCoursessStore.courses.map(course => {
                    return (
                        <Card key={course.id} middle={course.art.name} bottom={course.name} 
                           image={course.image}
                           middleStyle={defineTagStyle(course.art.name)} 
                           width={290} height={192}
                           // onPress={() => navigation.navigate("Пост", { post: course})}
                            />
                    )
                })
                : <ActivityIndicator style={styles.yourCourses_dataIsLoading} size="large" color={COLORS.blueAction} />
            }

            </ScrollView>
        </View>
    )
}

export default observer(YourCourses);

const styles = StyleSheet.create({
    yourCourses: {
        marginTop: 32,
    },
    yourCourses_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
    },
    yourCourses_list: {
        marginTop: 16,
    },
    yourCourses_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        alignSelf: "center",
    },
})