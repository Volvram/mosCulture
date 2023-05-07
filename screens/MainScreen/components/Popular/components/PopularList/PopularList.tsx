import { StyleSheet, View, ScrollView } from "react-native";
import Card from "../../../../../../components/Card/Card";

const PopularList = () => {
    return (
        <ScrollView
            style={styles.popularList}
            horizontal
            contentContainerStyle={{
                flexGrow: 1, flexDirection: 'row',
              }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            >

            {[{id: "1", title: "Ежегодная акция — Летопись сердец", date: "10.08.2002", tagName: "Культура"}, 
            {id: "2", title: "Марафон: Знание.Первые", date: "05.08.2002", tagName: "Культура"},
            {id: "3", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"}].map(item => {
                return (
                    <Card key={item.id} title={item.title} date={item.date} tagName={item.tagName} />
                )
            })}
        </ScrollView>
    );
}

export default PopularList;

const styles = StyleSheet.create({
    popularList: {
        marginTop: 16,
        flex: 1,
    },
})