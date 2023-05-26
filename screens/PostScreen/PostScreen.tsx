import { StyleSheet, View, Animated, } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../config/colors";
import PostContent from "./components/PostContent/PostContent";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import React from "react";
import PostHeader from "./components/PostHeader/PostHeader";

type PostScreenProps = {
    route: any,
    navigation: any,
}

const PostScreen: React.FC<PostScreenProps> = ({route, navigation}) => {
    const { post } = route.params;
    const scroll = new Animated.Value(0);

    return (
        <View style={styles.container}>
                <ScreenHeader image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()} />
                <Animated.ScrollView
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroll}}}], {useNativeDriver: true})}>

                    <Animated.View style={{transform: [{translateY: Animated.multiply(scroll, 0.8)}]}}>
                        <PostHeader post={post} />
                    </Animated.View>
                    <PostContent postId={post.id} postType="article"/>
                </Animated.ScrollView>
                <StatusBar style="auto" />
        </View>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    post: {
        width: '100%',
        flex:1,
    },
});