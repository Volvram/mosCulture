import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import Achievements from "./components/Achievements/Achievements";
import ScreenHeaderPoints from "../../components/ScreenHeaderPoints/ScreenHeaderPoints";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { useLocalStore } from "../../utils/useLocalStore";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/RootStore/instance";

type ProfileScreenProps = {
    navigation: any,
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScreenHeaderPoints points={rootStore.user.score}/>
            <View style={styles.profile}>
                <View style={styles.profile_wrapper}>
                    <View style={{alignItems: "center"}}>
                        <View style={styles.profile_avatar}>
                            {rootStore.user.avatar && <Image style={styles.profile_avatar_image} source={{uri: rootStore.user.avatar}}/>}

                            {/* For colorfulness */}
                            {/* <Image style={styles.profile_avatar_image} source={require("../../assets/img/avatar.png")}/> */}
                        </View>
                        <View style={styles.profile_rating}>
                            <Text style={styles.profile_rating_num}>997</Text>
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
                <Achievements navigation={navigation} />
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
        minWidth: 128,
        minHeight: 128,
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
        padding: 8,
        backgroundColor: COLORS.gray,
        borderRadius: 24,
    },
    profile_rating_num: {
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
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