import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";
import { ScrollView } from "react-native-gesture-handler";

type NewsPostScreenProps = {
    postId: string,
}

const NewsPostContent: React.FC<NewsPostScreenProps> = ({postId}) => {

    return (
        <View style={styles.content}>
                <Text>Here is the text of news post id: {postId}</Text>
        </View>
    )
}

export default NewsPostContent;

const styles = StyleSheet.create({
    content: {
        marginTop: -24,
        paddingTop: 32,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
    },
})