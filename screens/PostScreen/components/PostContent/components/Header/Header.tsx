import { StyleSheet, View, Text } from "react-native";
import { IHeaderProps } from "editorjs-viewer-native";
import { TYPOGRAPHY } from "../../../../../../config/typography";
import { COLORS } from "../../../../../../config/colors";

const Header = ({data} : IHeaderProps) => {

    const replaceSpaces = (text: string) => {
        return text.split("&nbsp;").join(" ");
    }

    return (
        <Text style={styles.header}
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
        >
            {replaceSpaces(data.text)}
        </Text>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        ...TYPOGRAPHY.h3,
        marginVertical: 8,
        color: COLORS.black 
    }
})