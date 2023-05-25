import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import ListElement from "../../../../components/ListElement/ListElement";
import { formatPrice } from "../../../../config/formatPrice";
import { defineTagStyle } from "../../../../config/defineTagStyle";

type OtherProps = {
    navigation: any,
    onOpen: () => void;
}

const courses = [{id: "1", tag: "tagName", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "1000"}, 
{id: "2", tag: "Хореография", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "Бесплатно"},
{id: "3", tag: "Музыка", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "1500"},
{id: "4", tag: "Театр", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "Бесплатно"},
{id: "5", tag: "Изобразительное Искусство", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "Бесплатно"},
{id: "6", tag: "Театр", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "850"},
{id: "7", tag: "Музыка", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", price: "400"}]

const Other: React.FC<OtherProps> = ({ navigation, onOpen }) => {
    return (
        <View style={styles.other}>
            <Text style={styles.other_title}>Прочие</Text>
                {courses.map(course => {
                    return (
                        <ListElement key={course.id} top={course.tag} middle={course.title} bottom={formatPrice(course.price)} 
                         topStyle={defineTagStyle(course.tag)} onPress={() => {onOpen()}} />
                    )
                })
                }
        </View>
    )
}

export default Other;

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