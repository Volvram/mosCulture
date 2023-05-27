import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { LinearGradient } from "expo-linear-gradient";
import { ArticleType } from "../../../../store/NewsListStore";
import { formatDate } from "../../../../config/formatDate";

type PostHeaderProps = {
    post: ArticleType,
}

const PostHeader: React.FC<PostHeaderProps> = ({post}) => {

    return (
        <View style={styles.postHeader}>
            <ImageBackground style={styles.postHeader_background} source={post.image 
                ? {uri: post.image} : require("../../../../assets/img/violin.png")} resizeMode="cover">
                    <LinearGradient
                        colors={[
                        'rgba(24, 24, 27, 0)',
                        '#18181B',
                        ]}
                        style={styles.postHeader_gradient}
                        >
                        <View style={styles.postHeader_text}>
                            <Text style={styles.postHeader_text_tag}>{post.articleType.name}</Text>
                            <Text style={styles.postHeader_text_title}>{post.name}</Text>
                            <Text style={styles.postHeader_text_date}>{formatDate(post.createdAt)}</Text>
                        </View>
                    </LinearGradient>         
            </ImageBackground>
        </View>
        
    )
}

export default PostHeader;

const styles = StyleSheet.create({
    postHeader: {
    },
    postHeader_background: {
        paddingTop: 79,
        aspectRatio: 0.888,
        width: '100%',
        backgroundColor: COLORS.gray
    },
    postHeader_gradient: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: "flex-end",
    },
    postHeader_text: {
        marginBottom: 32,
    },
    postHeader_text_tag: {
        ...TYPOGRAPHY.p1,
        marginVertical: 4,
        color: COLORS.white
    },
    postHeader_text_title: {
        ...TYPOGRAPHY.h2,
        marginVertical: 4,
        color: COLORS.white,
    },
    postHeader_text_date: {
        ...TYPOGRAPHY.p1,
        marginVertical: 4,
        color: COLORS.white,
    },
});