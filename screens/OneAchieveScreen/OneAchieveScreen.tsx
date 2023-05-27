import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import ScreenHeaderAchievements from "../../components/ScreenHeaderAchievements/ScreenHeaderAchievements";
import React from "react";


type OneAchieveScreenProps = {
    route: any,
    navigation: any,
}

const OneAchieveScreen: React.FC<OneAchieveScreenProps> = ({ route, navigation }) => {
    const { achievement } = route.params;
    const [dimensions, setDimensions] = React.useState({
        width: 100,
        height: 100,
    })

    React.useEffect(() => {
        achievement && Image.getSize(achievement.image, (width, height) => {
            setDimensions({width, height});
        })
    }, [achievement]);

    return (
        <View style={styles.container}>
            <ScreenHeaderAchievements image={require("../../assets/img/btnClose.png")} onPress={() => navigation.goBack()}/>
            <ScrollView style={styles.achievement}>
                <Text style={styles.achievement_title}>{achievement.title}</Text>
                <Text style={styles.achievement_description}>
                    {achievement.successInfo}
                </Text>
                <View style={styles.achievement_card}>
                    <Image style={[styles.achievement_card_image, dimensions && {aspectRatio: dimensions.width / dimensions.height}]} 
                    source={{uri: achievement.image}} resizeMode="contain"/>
                </View>
                <Text style={styles.achievement_artName}>{achievement.paintingName}</Text>
                <Text style={styles.achievement_artAuthor}>{achievement.paintingCaption}</Text>
                <Text style={styles.achievement_artDescription}>
                   {achievement.paintingDescription}
                </Text>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}

export default OneAchieveScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: COLORS.white
    },
    achievement: {
        marginTop: 32,
        paddingHorizontal: 16,
        flex:1,
        width: "100%"
    },
    achievement_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
        textAlign: "center",
    },
    achievement_description: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray,
        textAlign: "center",
    },
    achievement_card: {
        marginVertical: 16,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    achievement_card_image: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 16,
    },
    achievement_artName: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
        alignSelf: "center"
    },
    achievement_artAuthor: {
        ...TYPOGRAPHY.p1,
        marginTop: 8,
        color: COLORS.gray,
        fontWeight: "700",
        alignSelf: "center",
    },
    achievement_artDescription: {
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        marginBottom: 16,
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center"
    }
})