import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Animated, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { COLORS } from "../../config/colors";
import NewsPostContent from "./components/NewsPostContent/NewsPostContent";
import NewsPostHeader from "./components/NewsPostHeader/NewsPostHeader";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import React from "react";

type PostScreenProps = {
    route: any,
    navigation: any,
}

const PostScreen: React.FC<PostScreenProps> = ({route, navigation}) => {
    const { postId, post } = route.params;
    const scroll = new Animated.Value(0);

    return (
        <View style={styles.container}>
                <ScreenHeader image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()} />
                <Animated.ScrollView
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroll}}}], {useNativeDriver: true})}>

                    <Animated.View style={{transform: [{translateY: Animated.multiply(scroll, 0.8)}]}}>
                        <NewsPostHeader post={post} navigation={navigation} />
                    </Animated.View>
                    <NewsPostContent postId={postId} />
                </Animated.ScrollView>
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