import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";
import { COLORS } from "../../../../config/colors";
import { SchoolType } from "../../../../store/SchoolScreenStore";
import { TYPOGRAPHY } from "../../../../config/typography";
import React from "react";
import { defineTagStyle } from "../../../../config/defineTagStyle";

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
                {schools !== null && schools.length === 0 && <Text style={styles.schoolList_dataNotFound}>Данные не найдены</Text>}
                {schools ? schools.map(school => {
                    return(
                        <ListElement key={school.id} top={school.arts.map(el => el.name)}
                        image={school.image}
                        middle={school.name} bottom={school.district.name} 
                        onPress={() => navigation.navigate("Пост", { post: school, postType: "school"})} 
                        topStyle={defineTagStyle(school.arts[0].name)} /> 
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
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    schoolList_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        alignSelf: "center",
    }
})