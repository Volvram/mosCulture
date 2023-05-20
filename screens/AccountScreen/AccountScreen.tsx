import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import Statistics from "./components/Statistics/Statistics";
import Achievements from "./components/Achievements/Achievements";

type AccountScreenProps = {
    navigation: any,
}

const AccountScreen: React.FC<AccountScreenProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScreenHeader />
            <View style={styles.account}>
                <View style={styles.account_wrapper}>
                    <View style={styles.account_avatar}></View>
                    <View style={styles.account_details}>
                        <Text style={styles.account_details_username}>Username</Text>
                        <View style={styles.account_details_date}>
                            <Image style={styles.account_details_date_image} source={require("../../assets/img/clock.png")} />
                            <Text style={styles.account_details_date_text}>Регистрация: август 2023</Text>
                        </View>
                        <View style={styles.account_details_email}>
                            <Image style={styles.account_details_email_image} source={require("../../assets/img/envelope.png")} />
                            <Text style={styles.account_details_email_text}>Почта: romanp@gmail.com</Text>
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

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    account: {
        paddingHorizontal: 16,
        flex:1,
    },
    account_wrapper: {
        maxHeight: 128,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    account_avatar: {
        width: 128,
        height: 128,
        backgroundColor: COLORS.gray,
        borderRadius: 64,
    },
    account_details: {
        marginLeft: 12,
        height: "100%",
        justifyContent: 'space-around',
    },
    account_details_username: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    account_details_date: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    account_details_date_image: {
        width: 16,
        height: 16,
    },
    account_details_date_text: {
        ...TYPOGRAPHY.p2,
        marginLeft: 8,
        color: COLORS.gray
    },
    account_details_email: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    account_details_email_image: {
        width: 16,
        height: 16,
    },
    account_details_email_text: {
        ...TYPOGRAPHY.p2,
        marginLeft: 8,
        color: COLORS.gray
    },
})