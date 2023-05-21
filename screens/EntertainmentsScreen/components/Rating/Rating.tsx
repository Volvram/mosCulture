import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

const Rating: React.FC = () => {
    return (
        <View style={styles.rating}>
            <LeaderBoard />
            <View style={styles.rating_position}>
                <Text style={styles.rating_position_text}>Ваша позиция в общем рейтинге:</Text>
                <Text style={styles.rating_position_num}>997</Text>
            </View>
            <ScrollView style={styles.rating_all}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                {[4,5,6,7, 8, 9, 10].map(user => {
                    return (
                        <View key={user} style={styles.rating_all_user}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <View style={styles.rating_all_user_avatar}></View>
                                <Text  style={styles.rating_all_user_username}>Username</Text>
                            </View>
                            <Text  style={styles.rating_all_user_position}>{user}</Text>
                        </View>
                    )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
    rating: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    rating_position: {
        marginTop: 32,
        paddingVertical: 13,
        paddingHorizontal:16,
        width: "100%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating_position_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray,
    },
    rating_position_num: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    rating_all: {
        marginTop: 8,
        // flex: 1,
    },
    rating_all_user: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rating_all_user_avatar: {
        width: 48,
        height: 48,
        backgroundColor: COLORS.gray,
        borderRadius: 24,
    },
    rating_all_user_username: {
        ...TYPOGRAPHY.h4,
        marginLeft: 16,
        color: COLORS.black,
    },
    rating_all_user_position: {
        ...TYPOGRAPHY.h3,
        marginRight: 26,
        color: COLORS.black,
    }
});