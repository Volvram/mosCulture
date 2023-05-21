import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Platform, TouchableOpacity } from "react-native";
import Map from "./components/Map/Map";
import React from "react";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import SchoolList from "./components/SchoolList/SchoolList";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";

type SchoolScreenProps = {
    navigation: any
}

const SchoolScreen: React.FC<SchoolScreenProps> =  ({ navigation }) => {
    const [selected, setSelected] = React.useState<string>("Список");

    const handleChange = (value: string) => {
        setSelected(value);
    }

    return (
        <View style={styles.container}>
            <ScreenHeader buttons={
                [{image: require("../../assets/img/search.png"), onClick: () => {}}, 
                {image: require("../../assets/img/sliders.png"), onClick: () => {}}]
                } />
            <View style={styles.schools}>
                <ToggleButton firstSelection="Список" secondSelection="Карта" onChange={handleChange} />
                {selected === "Список" && <SchoolList navigation={navigation}/>}
                {Platform.OS !== "web" && selected === "Карта" && <Map navigation={navigation} />}
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