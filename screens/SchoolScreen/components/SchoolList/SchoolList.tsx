import { StyleSheet, View, Text, ScrollView } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";
import { COLORS } from "../../../../config/colors";

type SchoolListProps = {
    navigation: any,
}

const schools = [{id: "1", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"}, 
{id: "2", tag: "Художественная", title: "Детская школа искусств № 17", district: "САО"},
{id: "3", tag: "Театральная", title: "Московская театральная школа Олега Табакова", district: "СЗАО"},
{id: "4", tag: "Музыкальная", title: "Детская музыкальная школа № 100", district: "ЦАО"},
{id: "5", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"},
{id: "6", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"},
{id: "7", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"}]

const SchoolList: React.FC<SchoolListProps> = ({ navigation }) => {

    return (
        <ScrollView style={styles.schoolList}
            contentContainerStyle={{
                flexGrow: 1,
            }}>
                {
                schools.map(school => {
                    let tagStyle;
                    if (school.tag === "Музыкальная") {
                        tagStyle = {backgroundColor: COLORS.yellow}
                    } else if (school.tag === "Художественная") {
                        tagStyle = {backgroundColor: COLORS.pink}
                    } else if (school.tag === "Театральная") {
                        tagStyle = {backgroundColor: COLORS.purple}
                    }

                    return(
                        <ListElement key={school.id} top={school.tag} middle={school.title} bottom={school.district} 
                        onPress={() => {}} topStyle={{paddingVertical: 2, paddingHorizontal: 10, borderRadius: 8, ...tagStyle}} />
                    )
                })
                }
        </ScrollView>
    )
}

export default SchoolList;

const styles = StyleSheet.create({
    schoolList: {

    }
})