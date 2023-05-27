import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import Card from "../../../../components/Card/Card";
import { defineTagStyle } from "../../../../config/defineTagStyle";

const courses = [
    {
        id: 1,
        percent: "50%",
        tag: "Изобразительное Искусство",
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

                {courses.map(course => {
                    return (
                        <Card key={course.id} top={course.percent} middle={course.tag} bottom={course.title} // image={item.image}
                           middleStyle={defineTagStyle(course.tag)} // onPress={() => navigation.navigate("Пост", { post: course})}
                           width={290} height={192}
                            />
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default YourCourses;

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
    }
})