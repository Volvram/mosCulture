import {StyleSheet, View, Text, ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AboutArtStore } from "../../../../store/AboutArtStore";
import { useLocalStore } from "../../../../utils/useLocalStore";
import React from "react";
import Card from "../../../../components/Card/Card";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { observer } from "mobx-react-lite";

type AboutArtProps = {
    navigation: any
}

const AboutArt: React.FC<AboutArtProps> = ({navigation}) => {
    const aboutArtStore = useLocalStore(() => new AboutArtStore());

    React.useEffect(() => {
        aboutArtStore.requestArts();
    }, []);

    return (
        <View style={styles.aboutArt}>
            <ImageBackground style={{width: "100%", minHeight: 400}} 
                source={require("../../../../assets/img/aboutArt.png")}>
                <Text style={styles.aboutArt_title}>Об искусстве</Text>
                <ScrollView
                    horizontal
                    contentContainerStyle={{
                        flexGrow: 1, flexDirection: 'row',
                    }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    style={styles.aboutArt_list}>
                    {aboutArtStore.arts && aboutArtStore.arts.map(art => {
                        return (
                            <Card key={art.id} bottom={art.name} image={art.image} width={290} height={192} 
                                onPress={() => navigation.navigate("Пост", {post: art, postType: "article"})} />
                        )
                        })
                    }
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default observer(AboutArt);

const styles = StyleSheet.create({
    aboutArt: {
        marginTop: -30,
        width: "100%",
        flex: 1,
        backgroundColor: COLORS.white,
    },
    aboutArt_title: {
        ...TYPOGRAPHY.h1,
        marginTop: 60,
        color: COLORS.black,
        alignSelf: "center",
    },
    aboutArt_list: {
        paddingTop: 16,
        paddingBottom: 8,
    }
})