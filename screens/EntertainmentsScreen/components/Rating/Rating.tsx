import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import React from "react";
import RatingStore from "../../../../store/RatingStore";
import { useLocalStore } from "../../../../utils/useLocalStore";
import rootStore from "../../../../store/RootStore/instance";
import { observer } from "mobx-react-lite";

const Rating: React.FC = () => {
    const ratingStore = useLocalStore(() => new RatingStore());

    React.useEffect(() => {
        ratingStore.requestLeaderBoard();
    }, []);

    return (
        <View style={styles.rating}>
            <LeaderBoard leaderBoard={ratingStore.leaderBoard} />
            <View style={styles.rating_position}>
                <Text style={styles.rating_position_text}>Ваша позиция в общем рейтинге:</Text>
                <Text style={styles.rating_position_num}>{rootStore.user.score ? rootStore.user.score : " - "}</Text>
            </View>
            <ScrollView style={styles.rating_all}
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                {(ratingStore.leaderBoard !== null && ratingStore.leaderBoard.length === 0) &&
                    <Text style={styles.rating_all_dataNotFound}>Данные не найдены</Text>
                }    
                {ratingStore.leaderBoard ? ratingStore.leaderBoard.map((user, index) => {
                    return (
                        <View key={user.name} style={styles.rating_all_user}>

                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Text style={styles.rating_all_user_position}>{index + 1}</Text>
                                <View style={styles.rating_all_user_avatar}></View>
                                <Text  style={styles.rating_all_user_username}>{user.name}</Text>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Text style={styles.rating_all_user_score}>{user.score}</Text>
                                <Image style={styles.rating_all_user_score_image} source={require("../../../../assets/img/gem.png")}/>
                            </View>
                        </View>
                    )
                    })
                : <ActivityIndicator style={styles.rating_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
            </ScrollView>
        </View>
    )
}

export default observer(Rating);

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
        flex: 1,
    },
    rating_all_dataNotFound: {
        ...TYPOGRAPHY.p1,
        marginVertical: "auto",
        marginTop: 30,
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    rating_all_user: {
        marginVertical: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rating_all_user_position: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    rating_all_user_avatar: {
        marginLeft: 12,
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
    rating_all_user_score: {
        ...TYPOGRAPHY.h3,
        marginRight: 8,
        color: COLORS.black,
    },
    rating_all_user_score_image: {
        marginRight: 11,
        width: 20, 
        height: 20
    },
    rating_dataIsLoading: {
        marginVertical: "auto",
        width: "100%",
        alignSelf: "center",
    },
});