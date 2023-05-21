import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import { useLocalStore } from "../../../../utils/useLocalStore";
import DailyWordStore from "../../../../store/DailyWordStore";
import React from "react";
import { observer } from "mobx-react-lite";

const DailyWord: React.FC = () => {
    const dailyWordStore = useLocalStore(() => new DailyWordStore());

    React.useEffect(() => {
        dailyWordStore.requestDailyWord();
        // console.log(dailyWordStore.dailyWord);
    }, []);

    return (
        <View style={styles.dailyWord}>
            <View style={{position: 'absolute', top: -20, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.dailyWord_title}>
                    <Image style={styles.dailyWord_title_image} source={require("../../../../assets/img/lightbulb.png")} />
                    <Text style={styles.dailyWord_title_text}>Слово дня</Text>
                </View>
            </View>
            
            <View style={styles.dailyWord_description}>
                {(dailyWordStore.dailyWord === undefined) &&
                    <Text style={styles.dailyWord_dataNotFound}>Данные не найдены</Text>
                }
                {dailyWordStore.dailyWord !== null ? 
                    <Text style={styles.dailyWord_description_text}>
                        {dailyWordStore.dailyWord !== undefined && dailyWordStore.dailyWord.description}
                    </Text>
                : <ActivityIndicator style={styles.dailyWord_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
                
            </View>
            <TouchableOpacity style={styles.dailyWord_more}>
                <Text style={styles.dailyWord_more_text}>Подробнее</Text>
            </TouchableOpacity>
            {dailyWordStore.dailyWord && dailyWordStore.dailyWord.image ? 
                <Image style={styles.dailyWord_image} 
                    source={{uri: dailyWordStore.dailyWord.image}}
                />
            : 
            // <View style={styles.dailyWord_image_placehoder} />
            <Image style={styles.dailyWord_image} 
                    source={require("../../../../assets/img/daily.png")}
                />
            }
        </View>
    )
}

export default observer(DailyWord);

const styles = StyleSheet.create({
    dailyWord: {
        paddingTop: 36,
        paddingBottom: 176,
        paddingHorizontal: 16,
        backgroundColor: COLORS.lightGray,
        alignItems: "center"
    },
    dailyWord_title: {
        marginBottom: 16,
        paddingHorizontal: 16,
        width: 135,
        height: 40,
        backgroundColor: COLORS.yellow,
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dailyWord_title_text: {
        textAlign: "center"
    },
    dailyWord_title_image: {
        width: 20,
        height: 20,
    },
    dailyWord_description: {
        flex: 1,
    },
    dailyWord_dataNotFound: {
        ...TYPOGRAPHY.p1,
        marginTop: 30,
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    dailyWord_description_text: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
        textAlign: "center",
    },
    dailyWord_dataIsLoading: {
        width: "100%",
        alignSelf: "center",
    },
    dailyWord_more: {
        marginTop: 16,
    },
    dailyWord_more_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.blueAction
    },
    dailyWord_image: {
        marginTop: 16,
    },
    dailyWord_image_placehoder: {
        marginTop: 16,
        height: 300,
        width: 200,
        backgroundColor: COLORS.white,
        borderRadius: 16,
    }
})