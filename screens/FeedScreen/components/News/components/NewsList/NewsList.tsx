import { StyleSheet, View, ScrollView } from "react-native";
import Card from "../../../../../../components/Card/Card";

type NewsListProps = {
    navigation: any,
}

const news = [
    {id: "1", title: "Национальный чемпионат ArtMasters", date: "10.08.2002", tagName: "Новости", image: require("../../../../../../assets/img/violin.png")}, 
    {id: "2", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "05.08.2002", tagName: "Новости", image: require("../../../../../../assets/img/picture.png")},
    {id: "3", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Новости"}
]

const NewsList: React.FC<NewsListProps> = ({navigation}) => {

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

            {news.map(item => {
                return (
                    <Card key={item.id} title={item.title} date={item.date} image={item.image}
                        onPress={() => navigation.navigate("Пост", {postId: item.id, post: item})} />
                )
            })}
        </ScrollView>
    );
}

export default NewsList;

const styles = StyleSheet.create({
    newsList: {
        marginTop: 16,
        paddingHorizontal: 10,
        flex: 1,
    },
})