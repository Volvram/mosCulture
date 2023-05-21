import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";

type ToggleButtonProps = {
    firstSelection: string,
    secondSelection: string,
    onChange: (value: string) => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({firstSelection, secondSelection, onChange}) => {
    const [selectedButton, setSelectedButton] = React.useState<string>(firstSelection);

    return (
        <View style={styles.toggle}>
            <TouchableOpacity 
                style={[styles.toggle_button, selectedButton === firstSelection && styles.toggle_button__active]}
                onPress={() => {setSelectedButton(firstSelection); onChange(firstSelection)}}>
                <Text style={[styles.toggle_button_text, 
                    selectedButton === firstSelection && styles.toggle_button__active_text]}>{firstSelection}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.toggle_button, 
                selectedButton === secondSelection && styles.toggle_button__active]} 
                onPress={() => {setSelectedButton(secondSelection); onChange(secondSelection)}}>
                <Text style={[styles.toggle_button_text, 
                    selectedButton === secondSelection && styles.toggle_button__active_text]}>{secondSelection}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToggleButton;

const styles = StyleSheet.create({
    toggle: {
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
    toggle_button: {
        width: "50%",
        height: 48,
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    toggle_button_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    },
    toggle_button__active: {
        height: 48,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
    },
    toggle_button__active_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white
    },
})