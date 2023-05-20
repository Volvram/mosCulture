import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import Statistics from "./components/Statistics/Statistics";
import Achievements from "./components/Achievements/Achievements";

type ProfileScreenProps = {
    navigation: any,
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScreenHeader />
            <View style={styles.profile}>
                <View style={styles.profile_wrapper}>
                    <View style={styles.profile_avatar}></View>
                    <View style={styles.profile_details}>
                        <Text style={styles.profile_details_username}>Username</Text>
                        <View style={styles.profile_details_date}>
                            <Image style={styles.profile_details_date_image} source={require("../../assets/img/clock.png")} />
                            <Text style={styles.profile_details_date_text}>Регистрация: август 2023</Text>
                        </View>
                        <View style={styles.profile_details_email}>
                            <Image style={styles.profile_details_email_image} source={require("../../assets/img/envelope.png")} />
                            <Text style={styles.profile_details_email_text}>Почта: romanp@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <Statistics />
                <Achievements />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    profile: {
        paddingHorizontal: 16,
        flex:1,
    },
    profile_wrapper: {
        maxHeight: 128,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile_avatar: {
        width: 128,
        height: 128,
        backgroundColor: COLORS.gray,
        borderRadius: 64,
    },
    profile_details: {
        marginLeft: 12,
        height: "100%",
        justifyContent: 'space-around',
    },
    profile_details_username: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    profile_details_date: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile_details_date_image: {
        width: 16,
        height: 16,
    },
    profile_details_date_text: {
        ...TYPOGRAPHY.p2,
        marginLeft: 8,
        color: COLORS.gray
    },
    profile_details_email: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile_details_email_image: {
        width: 16,
        height: 16,
    },
    profile_details_email_text: {
        ...TYPOGRAPHY.p2,
        marginLeft: 8,
        color: COLORS.gray
    },
})