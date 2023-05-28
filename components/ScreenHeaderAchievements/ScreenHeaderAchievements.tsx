import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";
import rootStore from "../../store/RootStore/instance";
import { HOST } from "../../config/host";
import axios from "axios";
import { AchievementType } from "../../store/ProfileStore";


type ScreenHeaderAchievementsType = {
    image?: ImageSourcePropType | null,
    title?: string;
    received?: number,
    all?: number,
    onPress?: () => void
}

const ScreenHeaderAchievements: React.FC<ScreenHeaderAchievementsType> = ({image=null, title = "Мос.Культура", received, all, onPress}) => {
    
    const [achievements, setAchievements] = React.useState<AchievementType[] | null>(null);
    const [receivedAchievements, setReceivedAchievements] = React.useState<number>(0);

    React.useEffect(() => {
        requestAchievements();
    }, []);

    const requestAchievements = async () => {
        if (rootStore.user.authorized) {
            try {
                const result = await axios(`${HOST}/users/${rootStore.user.userId}/achievements`, {
                    method: "get",
                })

                setAchievements(result.data);
                let sum = 0;
                result.data.forEach((ach: AchievementType) => {
                    if (ach.received) {
                        sum++
                    }
                })
                setReceivedAchievements(sum)
            } catch(e) {
                console.log(e);
            }
        }
        
    }

    return (
        <View style={styles.screenHeaderAchievements}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                <View style={styles.screenHeaderAchievements_header}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity style={styles.screenHeaderAchievements_button} onPress={onPress} >
                            {image !== null && 
                                <Image source={image} style={styles.screenHeaderAchievements_button_image} />
                            }
                        </TouchableOpacity>
                        <Text style={styles.screenHeaderAchievements_title}>{title}</Text>
                    </View>
                    <View style={styles.screenHeaderAchievements_achievements}>
                        <Text style={styles.screenHeaderAchievements_achievements_num}>
                            {received ? received : receivedAchievements ? receivedAchievements : "-"} / {all ? all : achievements ? achievements.length : "-"}</Text>
                        <Image source={require("../../assets/img/achievement.png")} 
                            style={styles.screenHeaderAchievements_achievements_image} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScreenHeaderAchievements;

const styles = StyleSheet.create({
    screenHeaderAchievements: {
        marginTop: 47,
        height: 50,
        justifyContent: "center",
    },
    screenHeaderAchievements_header: {
        paddingHorizontal: 16,
        width: "100%",
        height: 50,

        shadowColor: COLORS.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: COLORS.white,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeaderAchievements_button: {
        width: 20,
        height: 20
    },
    screenHeaderAchievements_button_image: {
        width: 20,
        height: 20
    },
    screenHeaderAchievements_title: {
        marginLeft: 52,
        ...TYPOGRAPHY.h4
    },
    screenHeaderAchievements_achievements: {
        marginHorizontal: 16,
        width: 72,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    screenHeaderAchievements_achievements_num: {
        ...TYPOGRAPHY.h3,
        marginRight: 8,
        color: COLORS.black
    },
    screenHeaderAchievements_achievements_image: {
        width: 20,
        height: 20
    },
})