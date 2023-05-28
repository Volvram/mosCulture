import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import ListElement from "../../../../components/ListElement/ListElement";
import { formatPrice } from "../../../../config/formatPrice";
import { defineTagStyle } from "../../../../config/defineTagStyle";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { OtherCoursesStore } from "../../../../store/OtherCoursesStore";
import React from "react";
import { observer } from "mobx-react-lite";
import { CourseType } from "../../../../store/InterestingCoursesStore";

type OtherCoursesProps = {
    navigation: any,
    onOpen: (value: CourseType) => void;
}

const OtherCourses: React.FC<OtherCoursesProps> = ({ navigation, onOpen }) => {
    const otherCoursesStore = useLocalStore(() => new OtherCoursesStore());

    React.useEffect(() => {
        otherCoursesStore.requestCourses();
    }, []);

    return (
        <View style={styles.other}>
            <Text style={styles.other_title}>Прочие</Text>
                {otherCoursesStore.courses && otherCoursesStore.courses.map(course => {
                    return (
                        <ListElement key={course.id} top={course.art.name} middle={course.name} 
                            bottom={course.price !== 0 ? formatPrice(course.price) : "Бесплатно"}
                            image={course.image}
                            topStyle={defineTagStyle(course.art.name)} 
                            onPress={() => {onOpen(course)}} />
                    )
                })
                }
        </View>
    )
}

export default observer(OtherCourses);

const styles = StyleSheet.create({
    other: {
        marginTop: 32,
        paddingHorizontal: 16,
        flex: 1,
    },
    other_title: {
        ...TYPOGRAPHY.h2,
        marginBottom: 16,
        color: COLORS.black,
        alignSelf: "center"
    }
})