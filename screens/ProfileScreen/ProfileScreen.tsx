import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import Achievements from "./components/Achievements/Achievements";
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/RootStore/instance";
import { ProfileStore } from "../../store/ProfileStore";
import { useLocalStore } from "../../utils/useLocalStore";

type ProfileScreenProps = {
    navigation: any,
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {

    const profileStore = useLocalStore(() => new ProfileStore());

    React.useEffect(() => {
        if (rootStore.user.authorized) {
            profileStore.requestAchievements()
        }
    }, []);

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints />
            <View style={styles.profile}>
                <View style={styles.profile_wrapper}>
                    <View style={{alignItems: "center"}}>
                        <View style={[styles.profile_avatar, rootStore.user.position === 1 
                            ? {borderColor: COLORS.yellow}
                            : rootStore.user.position === 2
                            ? {borderColor: COLORS.blue}
                            : rootStore.user.position === 3
                            ? {borderColor: COLORS.pink}
                            : {borderColor: COLORS.gray}]}>
                            {rootStore.user.avatar && <Image style={styles.profile_avatar_image} 
                            source={{uri: rootStore.user.avatar}}/>}

                        </View>
                        <View style={[styles.profile_rating, rootStore.user.position === 1 
                            ? {backgroundColor: COLORS.yellow}
                            : rootStore.user.position === 2
                            ? {backgroundColor: COLORS.blue}
                            : rootStore.user.position === 3
                            ? {backgroundColor: COLORS.pink}
                            : {borderColor: COLORS.gray}]}>
                            <Text style={[styles.profile_rating_num,
                            rootStore.user.position === 1 
                            ? {color: COLORS.black}
                            : rootStore.user.position === 2
                            ? {color: COLORS.black}
                            : rootStore.user.position === 3
                            ? {color: COLORS.black}
                            : {color: COLORS.white}]}>
                                {rootStore.user.position ? rootStore.user.position : " - "}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.profile_details}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={styles.profile_details_username}>{rootStore.user.name}</Text>
                            <TouchableOpacity style={styles.profile_details_username_edit}>
                                <Image style={styles.profile_details_username_edit_image} source={require("../../assets/img/edit.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profile_details_email}>
                            <Image style={styles.profile_details_email_image} source={require("../../assets/img/envelope.png")} />
                            <Text style={styles.profile_details_email_text}>Почта: {rootStore.user.email}</Text>
                        </View>
                        <View style={styles.profile_details_role}>
                            <Image style={styles.profile_details_role_image} source={require("../../assets/img/role.png")} />
                            <Text style={styles.profile_details_role_text}>Предпочтения: музыка</Text>
                        </View>
                    </View>
                </View>
                <Achievements navigation={navigation} achievements={profileStore.achievements} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default observer(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    profile: {
        marginTop: 32,
        flex:1,
    },
    profile_wrapper: {
        paddingHorizontal: 16,
        maxHeight: 128,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile_avatar: {
        minWidth: 130,
        minHeight: 130,
        backgroundColor: COLORS.gray,
        borderWidth: 5,
        borderColor: COLORS.gray,
        borderStyle: "solid",
        borderRadius: 64,
    },
    profile_avatar_image: {
        width: 128,
        height: 128,
        backgroundColor: COLORS.gray,
        borderRadius: 64,
    },
    profile_rating: {
        marginTop: -21,
        minWidth: 44,
        padding: 8,
        backgroundColor: COLORS.gray,
        borderRadius: 24,
    },
    profile_rating_num: {
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
        alignSelf: "center",
    },
    profile_details: {
        marginLeft: 12,
        paddingVertical: 8,
        width: "100%",
        height: "100%",
        justifyContent: 'space-around',
    },
    profile_details_username: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
        marginRight: 8,
    },
    profile_details_username_edit: {
    },
    profile_details_username_edit_image: {
        width: 20,
        height: 20,
    },
    profile_details_email: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile_details_email_image: {
        width: 20,
        height: 20,
    },
    profile_details_email_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.gray,
    },
    profile_details_role: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile_details_role_image: {
        width: 20,
        height: 20,
    },
    profile_details_role_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.gray
    },
})