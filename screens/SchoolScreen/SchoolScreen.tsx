import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Platform, TouchableOpacity } from "react-native";
import Map from "./components/Map/Map";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import React from "react";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import SchoolList from "./components/SchoolList/SchoolList";

type SchoolScreenProps = {
    navigation: any
}

const SchoolScreen: React.FC<SchoolScreenProps> =  ({ navigation }) => {
    const [selectedButton, setSelectedButton] = React.useState<string>("Список");


    return (
        <View style={styles.container}>
            <ScreenHeader searchVisible={true} filtersVisible={true}/>
            <View style={styles.schools}>
                <View style={styles.schools_toggle}>
                    <TouchableOpacity onPress={() => {setSelectedButton("Список")}}
                        style={[styles.schools_toggle_button, selectedButton === "Список" && styles.schools_toggle_button__active]} >
                        <Text style={[styles.schools_toggle_button_text, 
                            selectedButton === "Список" && styles.schools_toggle_button__active_text]}>Список</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.schools_toggle_button, 
                        selectedButton === "Карта" && styles.schools_toggle_button__active]} onPress={() => {setSelectedButton("Карта")}}>
                        <Text style={[styles.schools_toggle_button_text, 
                            selectedButton === "Карта" && styles.schools_toggle_button__active_text]}>Карта</Text>
                    </TouchableOpacity>
                </View>
                {selectedButton === "Список" && <SchoolList navigation={navigation}/>}
                {Platform.OS !== "web" && selectedButton === "Карта" && <Map navigation={navigation} />}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default SchoolScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white
    },
    schools: {
        paddingHorizontal: 16,
        flex:1,
        backgroundColor: COLORS.white
    },
    schools_toggle: {
        marginVertical: 16,
        width: "100%",
        height: 48,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    schools_toggle_button: {
        width: "50%",
        height: 48,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    schools_toggle_button_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    },
    schools_toggle_button__active: {
        height: 48,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    schools_toggle_button__active_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    },
})