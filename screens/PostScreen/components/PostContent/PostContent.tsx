import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../../../config/colors";
import React from "react";
import axios, { AxiosResponse } from "axios";
import { ArticleType } from "../../../../store/NewsListStore";
import { TYPOGRAPHY } from "../../../../config/typography";

type PostContentProps = {
    post: ArticleType,
}

const PostContent: React.FC<PostContentProps> = ({post}) => {
    return (
        <View style={styles.content}>
            {/* NEED TO ADD EDITORJS PARSER */}
                {post && <Text style={styles.content_paragraph}>{post.description}</Text>}

                <Text style={styles.content_paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium sapien at sollicitudin rhoncus. 
                    Aenean ac leo tincidunt, porttitor nibh id, interdum.
                </Text>
        </View>
    )
}

export default PostContent;

const styles = StyleSheet.create({
    content: {
        marginTop: -24,
        paddingTop: 32,
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
    },
    content_paragraph: {
        ...TYPOGRAPHY.p1,
    }
})