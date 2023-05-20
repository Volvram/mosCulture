import { StyleSheet, View, Text, ScrollView } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";

type SchoolListProps = {
    navigation: any,
}

const SchoolList: React.FC<SchoolListProps> = ({ navigation }) => {
    return (
        <ScrollView style={styles.schoolList}
            contentContainerStyle={{
                flexGrow: 1,
            }}>
                {[{id: "1", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"}, 
                {id: "2", tag: "Изобразительное", title: "Детская школа искусств № 17", district: "САО"},
                {id: "3", tag: "Театральная", title: "Московская театральная школа Олега Табакова", district: "СЗАО"},
                {id: "4", tag: "Музыкальная", title: "Детская музыкальная школа № 100", district: "ЦАО"},
                {id: "5", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"},
                {id: "6", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"},
                {id: "7", tag: "Музыкальная", title: "Детская музыкальная школа имени...", district: "ЦАО"}]
                .map(school => {
                    return(
                        <ListElement key={school.id} top={school.tag} middle={school.title} bottom={school.district} 
                        onPress={() => {}} />
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