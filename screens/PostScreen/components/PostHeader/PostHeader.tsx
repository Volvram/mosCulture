import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { LinearGradient } from "expo-linear-gradient";
import { ArticleType } from "../../../../store/NewsListStore";
import { formatDate } from "../../../../config/formatDate";
import { SchoolType } from "../../../../store/SchoolScreenStore";
import { PostHeaderStore } from "../../../../store/PostHeaderStore";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { observer } from "mobx-react-lite";

type PostHeaderProps = {
    postId: number,
    postType: string
}

const PostHeader: React.FC<PostHeaderProps> = ({postId, postType}) => {

    const postHeaderStore = useLocalStore(() => new PostHeaderStore(postId, postType));

    React.useEffect(() => {
        postHeaderStore.requestPost();
    }, []);

    return (
        <View style={styles.postHeader}>
            {postHeaderStore.post &&
                <ImageBackground style={styles.postHeader_background} source={postHeaderStore.post.image 
                    ? {uri: postHeaderStore.post.image} : require("../../../../assets/img/violin.png")} resizeMode="cover">
                        <LinearGradient
                            colors={[
                            'rgba(24, 24, 27, 0)',
                            '#18181B',
                            ]}
                            style={styles.postHeader_gradient}
                            >
                            <View style={styles.postHeader_text}>
                                <Text style={styles.postHeader_text_tag}>
                                    {postType === "article" ? postHeaderStore.post.articleType.name
                                    : postType === "school" ? postHeaderStore.post.name
                                    : ""}
                                </Text>
                                <Text style={styles.postHeader_text_title}>{postHeaderStore.post.name}</Text>
                                <Text style={styles.postHeader_text_date}>{formatDate(postHeaderStore.post.createdAt)}</Text>
                            </View>
                        </LinearGradient>         
                </ImageBackground>
            }
            
        </View>
        
    )
}

export default observer(PostHeader);

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