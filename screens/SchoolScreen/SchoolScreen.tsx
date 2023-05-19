import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Platform } from "react-native";
import Map from "./components/Map/Map";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import React from "react";
import { COLORS } from "../../config/colors";

type SchoolScreenProps = {
    navigation: any
}

const SchoolScreen: React.FC<SchoolScreenProps> =  ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScreenHeader image={require("../../assets/img/btnBack.png")} title="Школы" onPress={() => {navigation.goBack()}} />
            <View style={styles.schools}>
                {/* {Platform.OS !== "web" && <Map navigation={navigation} />} */}
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

    },
})