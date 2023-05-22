import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import Card from "../../../../components/Card/Card";
import { formatPrice } from "../../../../config/formatPrice";

const courses = [
    {
        id: 1,
        price: "1000",
        tag: "Tag name",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        id: 2,
        price: "Бесплатно",
        tag: "Tag name",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
]

type InterestingProps = {
    navigation: any,
}

const Interesting: React.FC<InterestingProps> = ({navigation}) => {
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

                {courses.map(course => {
                    return (
                        <Card key={course.id} top={formatPrice(course.price)} middle={course.tag} bottom={course.title} // image={item.image}
                            // onPress={() => navigation.navigate("Пост", { post: course})} 
                            />
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default Interesting;

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
    }
})