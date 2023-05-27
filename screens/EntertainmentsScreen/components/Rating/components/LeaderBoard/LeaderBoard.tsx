import { StyleSheet, View, Text, Image } from "react-native";
import { TYPOGRAPHY } from "../../../../../../config/typography";
import { COLORS } from "../../../../../../config/colors";
import { ResultType } from "../../../../../../store/RatingStore";
import { observer } from "mobx-react-lite"
import React from "react";

type LeaderBoardProps = {
    leaderBoard: ResultType[] | null
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({leaderBoard}) => {
    React.useEffect(() => {

    });

    return (
        <View style={styles.leaderBoard}>
            <View style={styles.leaderBoard_place2}>
                    {leaderBoard && leaderBoard[1] && leaderBoard[1].avatar ? 
                        <Image style={styles.leaderBoard_place2_avatar} source={{uri: leaderBoard[1].avatar}}/>
                    :   <View style={styles.leaderBoard_place2_avatar}></View>
                    }
                
                <View style={styles.leaderBoard_place2_medal}>
                    <Text style={styles.leaderBoard_num}>2</Text>
                </View>
                <Text style={styles.leaderBoard_username}>{leaderBoard && leaderBoard[1] ? leaderBoard[1].name : " - "}</Text>
                <View style={styles.leaderBoard_place2_score}>
                    <Text style={styles.leaderBoard_points}>{leaderBoard && leaderBoard[1] ? leaderBoard[1].score : " - "} очков</Text>
                </View>
            </View>
            <View style={styles.leaderBoard_place1}>
                <Image style={styles.leaderBoard_place1_crown} 
                    source={require("../../../../../../assets/img/crown.png")} />
                {leaderBoard && leaderBoard[0] && leaderBoard[0].avatar 
                    ? <Image style={styles.leaderBoard_place1_avatar} source={{uri: leaderBoard[0].avatar}}/>
                    :   <View style={styles.leaderBoard_place1_avatar}></View>
                }
                
                <View style={styles.leaderBoard_place1_medal}>
                    <Text style={styles.leaderBoard_num}>1</Text>
                </View>
                <Text style={styles.leaderBoard_username}>{leaderBoard && leaderBoard[0] ? leaderBoard[0].name : " - "}</Text>
                <View style={styles.leaderBoard_place1_score}>
                    <Text style={styles.leaderBoard_points}>{leaderBoard && leaderBoard[0] ? leaderBoard[0].score : " - "} очков</Text>
                </View>
            </View>
            
            <View style={styles.leaderBoard_place3}>
                {leaderBoard && leaderBoard[2] && leaderBoard[2].avatar 
                ? <Image source={{uri: leaderBoard[2].avatar}}/>
                : <View style={styles.leaderBoard_place3_avatar}></View> 
                } 
                <View style={styles.leaderBoard_place3_medal}>
                    <Text style={styles.leaderBoard_num}>3</Text>
                </View>
                <Text style={styles.leaderBoard_username}>{leaderBoard && leaderBoard[2] ? leaderBoard[2].name : " - "}</Text>
                <View style={styles.leaderBoard_place3_score}>
                    <Text style={styles.leaderBoard_points}>{leaderBoard && leaderBoard[2] ? leaderBoard[2].score : " - "} очков</Text>
                </View>
            </View>
        </View>
    )
}

export default LeaderBoard;

const styles = StyleSheet.create({
    leaderBoard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leaderBoard_place2: {
        marginTop: 63,
        alignItems: "center"
    },
    leaderBoard_place2_avatar: {
        width: 96,
        height: 96,
        backgroundColor: COLORS.gray,
        borderColor: COLORS.blue,
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: 56
    },
    leaderBoard_place2_medal: {
        marginTop: -16,
        width: 24,
        height: 24,
        backgroundColor: COLORS.blue,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderBoard_place2_score: {
        marginTop: 8,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: COLORS.blue,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderBoard_username: {
        ...TYPOGRAPHY.h3,
        marginTop: 8,
        color: COLORS.black
    },
    leaderBoard_points: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black,
    },
    leaderBoard_num: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    leaderBoard_place1: {
        alignItems: "center"
    },
    leaderBoard_place1_crown: {
        marginBottom: -7,
        width: 24,
        height: 24,
    },
    leaderBoard_place1_avatar: {
        width: 112,
        height: 112,
        backgroundColor: COLORS.gray,
        borderColor: COLORS.yellow,
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: 56
    },
    leaderBoard_place1_medal: {
        marginTop: -16,
        width: 24,
        height: 24,
        backgroundColor: COLORS.yellow,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderBoard_place1_score: {
        marginTop: 8,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: COLORS.yellow,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderBoard_place3: {
        marginTop: 63,
        alignItems: "center"
    },
    leaderBoard_place3_avatar: {
        width: 96,
        height: 96,
        backgroundColor: COLORS.gray,
        borderColor: COLORS.pink,
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: 56
    },
    leaderBoard_place3_medal: {
        marginTop: -16,
        width: 24,
        height: 24,
        backgroundColor: COLORS.pink,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    leaderBoard_place3_score: {
        marginTop: 8,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: COLORS.pink,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    
});