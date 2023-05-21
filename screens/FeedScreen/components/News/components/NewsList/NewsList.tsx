import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from "react-native";
import Card from "../../../../../../components/Card/Card";
import React from "react";
import { observer } from "mobx-react-lite";
import { useLocalStore } from "../../../../../../utils/useLocalStore";
import NewsListStore from "../../../../../../store/NewsListStore";
import { COLORS } from "../../../../../../config/colors";
import { TYPOGRAPHY } from "../../../../../../config/typography";
import { formatDate } from "../../../../../../config/formatDate";

type NewsListProps = {
    navigation: any,
}

const NewsList: React.FC<NewsListProps> = ({navigation}) => {
    const newsListStore = useLocalStore(() => new NewsListStore());

    React.useEffect(() => {
        newsListStore.requestNews();
    }, []);

    return (
        <ScrollView
                style={styles.newsList}
                horizontal
                contentContainerStyle={{
                    flexGrow: 1, flexDirection: 'row',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
            >
            {(newsListStore.news !== null && newsListStore.news.length === 0) &&
                <Text style={styles.newsList_dataNotFound}>Данные не найдены</Text>
            }
            {newsListStore.news ? newsListStore.news.map(item => {
                if (item.image) {
                    return (
                        <Card key={item.id} title={item.name} date={formatDate(item.createdAt)} // image={item.image}
                            onPress={() => navigation.navigate("Пост", { post: item})} />
                    )
                } else {
                    return (
                        <Card key={item.id} title={item.name} date={formatDate(item.createdAt)} 
                            image={require("../../../../../../assets/img/violin.png")}
                            onPress={() => navigation.navigate("Пост", { post: item})} />
                    )
                }
            }) 
                : <ActivityIndicator style={styles.newsList_dataIsLoading} size="large" color={COLORS.blueAction} />
            }
            
        </ScrollView>
    );
}

export default observer(NewsList);

const styles = StyleSheet.create({
    newsList: {
        marginTop: 16,
        flex: 1,
    },
    newsList_dataNotFound: {
        ...TYPOGRAPHY.p1,
        marginTop: 30,
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    newsList_dataIsLoading: {
        width: "100%",
        alignSelf: "center",
    }
})