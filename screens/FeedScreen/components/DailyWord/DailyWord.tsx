import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import { useLocalStore } from "../../../../utils/useLocalStore";
import DailyWordStore from "../../../../store/DailyWordStore";
import React from "react";
import { observer } from "mobx-react-lite";

type DailyWordProps = {
    navigation: any,
}

const DailyWord: React.FC<DailyWordProps> = ({navigation}) => {
    const [dimensions, setDimensions] = React.useState({
        width: 297,
        height: 451,
    });

    const dailyWordStore = useLocalStore(() => new DailyWordStore());

    React.useEffect(() => {
        dailyWordStore.requestDailyWord();
        dailyWordStore.dailyWord && Image.getSize(dailyWordStore.dailyWord.image, (width, height) => {
            setDimensions({
                width, height
            })
        })
    }, []);

    return (
        <View style={styles.dailyWord}>
            <Text style={styles.dailyWord_title}>Слово дня: {dailyWordStore.dailyWord && dailyWordStore.dailyWord.name}</Text>
            
            <View style={styles.dailyWord_description}>
                {(dailyWordStore.dailyWord === undefined) &&
                    <Text style={styles.dailyWord_dataNotFound}>Данные не найдены</Text>
                }
                {dailyWordStore.dailyWord !== null ? 
                    <Text style={styles.dailyWord_description_text}>
                        {dailyWordStore.dailyWord !== undefined && `${dailyWordStore.dailyWord.name} - ${dailyWordStore.dailyWord.description}`}
                    </Text>
                : <ActivityIndicator style={styles.dailyWord_dataIsLoading} size="large" color={COLORS.blueAction} />
                }
                
            </View>
            <TouchableOpacity style={styles.dailyWord_more}
                 onPress={() => navigation.navigate("Пост", { post: dailyWordStore.dailyWord, postType: "article"})}>
                <Text style={styles.dailyWord_more_text}>Подробнее</Text>
            </TouchableOpacity>
            <View style={styles.dailyWord_card}>
                {dailyWordStore.dailyWord && 
                    <Image style={[styles.dailyWord_card_image, {width: "100%", aspectRatio: dimensions.width/dimensions.height}]} 
                        source={{uri: dailyWordStore.dailyWord.image}}
                        resizeMode="cover"
                    />
                }
            </View>
            
        </View>
    )
}

export default observer(DailyWord);

const styles = StyleSheet.create({
    dailyWord: {
        marginTop: 24,
        paddingHorizontal: 16,
        backgroundColor: "transparent",
        alignItems: "center",
        zIndex: 1,
    },
    dailyWord_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
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
        ...TYPOGRAPHY.p1,
        marginTop: 16,
        color: COLORS.gray,
        textAlign: "center",
    },
    dailyWord_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
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
    dailyWord_card: {
        marginTop: 16,
        paddingHorizontal: 16,
        width: "100%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    dailyWord_card_image: {
        width: "100%",
        borderRadius: 16,
    },
    
})