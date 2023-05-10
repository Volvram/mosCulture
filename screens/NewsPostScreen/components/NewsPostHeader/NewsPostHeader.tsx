import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { LinearGradient } from "expo-linear-gradient";

type NewsPostScreenProps = {
    post: any,
    navigation: any,
}

const NewsPostHeader: React.FC<NewsPostScreenProps> = ({post, navigation}) => {

    return (
        <View style={styles.newsPostHeader}>
            <ImageBackground style={styles.newsPostHeader_background} source={require("../../../../assets/img/newsPostBackground.png")} resizeMode="contain">
                    <LinearGradient
                        colors={[
                        'rgba(24, 24, 27, 0)',
                        '#18181B',
                        ]}
                        style={styles.newsPostHeader_gradient}
                        >
                        <TouchableOpacity style={styles.newsPostHeader_back} onPress={() => {navigation.goBack()}}>
                            <Image style={styles.newsPostHeader_back_image} source={require("../../../../assets/img/btnBackLight.png")} />
                        </TouchableOpacity>
                        <View style={styles.newsPostHeader_text}>
                            <Text style={styles.newsPostHeader_text_tagName}>{post.tagName}</Text>
                            <Text style={styles.newsPostHeader_text_title}>{post.title}</Text>
                            <Text style={styles.newsPostHeader_text_date}>{post.date}</Text>
                        </View>
                    </LinearGradient>         
            </ImageBackground>
        </View>
        
    )
}

export default NewsPostHeader;

const styles = StyleSheet.create({
    newsPostHeader: {
    },
    newsPostHeader_background: {
        paddingTop: 79,
        aspectRatio: 0.888,
        width: '100%',
    },
    newsPostHeader_gradient: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: "space-between",
    },
    newsPostHeader_back: {
    },
    newsPostHeader_back_image: {
        width: 50,
        height: 50,
    },
    newsPostHeader_text: {
        marginBottom: 32,
    },
    newsPostHeader_text_tagName: {
        ...TYPOGRAPHY.small,
        marginVertical: 4,
        color: COLORS.white
    },
    newsPostHeader_text_title: {
        ...TYPOGRAPHY.h2,
        marginVertical: 4,
        color: COLORS.white,
    },
    newsPostHeader_text_date: {
        ...TYPOGRAPHY.small,
        marginVertical: 4,
        color: COLORS.white,
    },
});