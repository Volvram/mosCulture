import { StyleSheet, View, Text } from "react-native";
import { IParagraphProps } from "editorjs-viewer-native";
import { TYPOGRAPHY } from "../../../../../../config/typography";
import { COLORS } from "../../../../../../config/colors";

const Paragraph = ({data} : IParagraphProps) => {

    const replaceSpaces = (text: string) => {
        return text.split("&nbsp;").join(" ");
    }

    return (
        <Text style={styles.paragraph}
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
        >
            {replaceSpaces(data.text)}
        </Text>
    )
}

export default Paragraph;

const styles = StyleSheet.create({
    paragraph: {
        ...TYPOGRAPHY.p1,
        marginVertical: 8,
        color: COLORS.black 
    }
})