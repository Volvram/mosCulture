import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";

type RedirectProps = {
    navigation: any,
}

const Redirect: React.FC<RedirectProps> = ({navigation}) => {
    return (
        <View style={styles.redirect}>
                <View style={styles.redirect_continue}>
                    <View style={styles.redirect_continue_hr} />
                        <View>
                            <Text style={styles.redirect_continue_text}>Или продолжить с помощью</Text>
                        </View>
                    <View style={styles.redirect_continue_hr} />
                </View>
                <TouchableOpacity style={styles.redirect_vk}>
                    <Image style={styles.redirect_vk_image} source={require("../../../../assets/img/vk.png")} />
                    <Text style={styles.redirect_vk_text}>ВКонтакте</Text>
                </TouchableOpacity>
                <View style={styles.redirect_signUp}>
                    <Text>Уже есть аккаунт? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Авторизация")}>
                        <Text style={styles.redirect_signUp_text}>Авторизация</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default Redirect;

const styles = StyleSheet.create({
    redirect: {
        width: "100%",
    },
    redirect_continue: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    redirect_continue_hr: {
        marginHorizontal: 16,
        flex: 1, 
        height: 1, 
        backgroundColor: COLORS.gray,
        color: COLORS.gray,
    },
    redirect_continue_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
        textAlign: 'center',
    },
    redirect_vk: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 43.5,
        backgroundColor: COLORS.blueAction,
        borderRadius: 24,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    redirect_vk_image: {
        width: 24,
        height: 24,
    },
    redirect_vk_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.white,
    },
    redirect_signUp: {
        marginTop: 64,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    redirect_signUp_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.blueAction,
    }
})