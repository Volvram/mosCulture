import { StyleSheet, View, Text, ScrollView } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";

type NewsListProps = {
    activeTags?: string[],
    navigation: any,
}

const NewsList: React.FC<NewsListProps> = ({activeTags, navigation}) => {
    return (
        <ScrollView style={styles.newsList}
            contentContainerStyle={{
                flexGrow: 1,
            }}
            >
            {[{id: "1", title: "Ежегодная акция — Летопись сердец", date: "10.08.2002", tagName: "Культура"}, 
            {id: "2", title: "Марафон: Знание.Первые", date: "05.08.2002", tagName: "Культура"},
            {id: "3", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "4", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "5", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "6", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "7", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"}]
            .filter(item => activeTags?.find(el => el === "Все") ? item : activeTags?.find(el => el === item.tagName))
            .map(item => {
                return (
                    <ListElement key={item.id} title={item.title} date={item.date} tagName={item.tagName} 
                        onPress={() => navigation.navigate("Новость", {postId: item.id, post: item})} />
                )
            })}
        </ScrollView>
    );
}

export default NewsList;

const styles = StyleSheet.create({
    newsList: {
        marginTop: 24,
        width: "100%",
    }
})