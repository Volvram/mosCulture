import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";

type NewsPostScreenProps = {
    postId: string,
}

const NewsPostContent: React.FC<NewsPostScreenProps> = ({postId}) => {

    return (
        <View style={styles.content}>
                <Text>Here is the text of news post id: {postId}</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
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