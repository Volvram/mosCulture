import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from "../../config/colors";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import Rating from "./components/Rating/Rating";
import Tasks from "./components/Tasks/Tasks";
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";

type EntertainmentScreenProps = {
    navigation: any,
}

const EntertainmentScreen: React.FC<EntertainmentScreenProps> = ({ navigation }) => {
    const [selected, setSelected] = React.useState<string>("Задания");

    const handleChange = (value: string) => {
        setSelected(value);
    }

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints />
            <View style={styles.entertainment}>
                <ToggleButton firstSelection="Задания" secondSelection="Рейтинг" onChange={handleChange} />
                {selected === "Задания" && <Tasks />}
                {selected === "Рейтинг" && <Rating />}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
export default EntertainmentScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    entertainment: {
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
        flex: 1,
    }
});