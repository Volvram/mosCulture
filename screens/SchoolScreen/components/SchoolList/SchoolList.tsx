import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";
import { COLORS } from "../../../../config/colors";
import { SchoolType } from "../../../../store/SchoolScreenStore";
import { TYPOGRAPHY } from "../../../../config/typography";

type SchoolListProps = {
    navigation: any,
    schools: SchoolType[] | null
}

const SchoolList: React.FC<SchoolListProps> = ({ navigation, schools }) => {

    return (
        <ScrollView style={styles.schoolList}
            contentContainerStyle={{
                flexGrow: 1,
            }}>
                { schools && schools.length === 0 && <Text style={styles.schoolList_dataNotFound}>Данные не найдены</Text>}
                {schools && schools.length !== 0 ? schools.map(school => {
                    let tagStyle;
                    if (school.arts[0].name === "Музыка") {
                        tagStyle = {backgroundColor: COLORS.yellow}
                    } else if (school.arts[0].name === "Изобразительное искусство") {
                        tagStyle = {backgroundColor: COLORS.pink}
                    } else if (school.arts[0].name === "Театр") {
                        tagStyle = {backgroundColor: COLORS.purple}
                    } else {
                        tagStyle = {backgroundColor: COLORS.blue}
                    }

                    return(
                        <ListElement key={school.id} top={school.arts.map(el => el.name)} middle={school.name} bottom={school.district.name} 
                        onPress={() => {}} topStyle={{paddingVertical: 2, paddingHorizontal: 10, borderRadius: 8, ...tagStyle}} /> 
                    )
                })
                : <ActivityIndicator style={styles.schoolList_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
        </ScrollView>
    )
}

export default SchoolList;

const styles = StyleSheet.create({
    schoolList: {
        flex: 1,
    },
    schoolList_dataNotFound: {
        ...TYPOGRAPHY.p1,
        marginTop: 30,
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    schoolList_dataIsLoading: {
        width: "100%",
        alignSelf: "center",
    }
})