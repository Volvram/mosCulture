import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import Card from "../../../../components/Card/Card";
import { formatPrice } from "../../../../config/formatPrice";
import { defineTagStyle } from "../../../../config/defineTagStyle";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { CourseType, InterestingCoursesStore } from "../../../../store/InterestingCoursesStore";
import React from "react";
import { observer } from "mobx-react-lite";

type InterestingCoursesProps = {
    navigation: any,
    onOpen: (value: CourseType) => void
}

const InterestingCourses: React.FC<InterestingCoursesProps> = ({ navigation, onOpen }) => {
    const interestingCoursesStore = useLocalStore(() => new InterestingCoursesStore());

    React.useEffect(() => {
        interestingCoursesStore.requestCourses();
    }, []);

    return (
        <View style={styles.interesting}>
            <Text style={styles.interesting_title}>Может быть интересно</Text>
            <ScrollView
                style={styles.interesting_list}
                horizontal
                contentContainerStyle={{
                    flexGrow: 1, flexDirection: 'row',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast">

                {interestingCoursesStore.courses ? interestingCoursesStore.courses.map(course => {
                    return (
                        <Card key={course.id} 
                            top={course.price !== 0 ? formatPrice(course.price) : "Бесплатно"} 
                            middle={course.art.name} 
                            bottom={course.name} 
                            image={course.image}
                            middleStyle={defineTagStyle(course.art.name)} 
                            width={290} height={192}  
                            onPress={() => {onOpen(course)}} 
                            />
                    )
                })
                : <ActivityIndicator style={styles.interesting_dataIsLoading} size="large" color={COLORS.blueAction} />
                }

            </ScrollView>
        </View>
    )
}

export default observer(InterestingCourses);

const styles = StyleSheet.create({
    interesting: {
        marginTop: 32,
    },
    interesting_title: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
        alignSelf: "center",
    },
    interesting_list: {
        marginTop: 16,
    },
    interesting_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        alignSelf: "center",
    }
})