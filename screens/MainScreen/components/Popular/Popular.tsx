import { StyleSheet, Text, View } from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../../config/colors";
import PopularList from "./components/PopularList/PopularList";

type PopularProps = {
    navigation: any,
}

const Popular: React.FC<PopularProps> = ({ navigation }) => {


    return (
        <View style={styles.popular}>
            <View style={styles.popular_header}>
                <Text style={styles.popular_title}>Популярное</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Новости")}>
                    <Text style={styles.popular_more}>Подробнее</Text>
                </TouchableOpacity>
            </View>
            <PopularList navigation={navigation} />
        </View>
    )
}

export default Popular;

const styles = StyleSheet.create({
    popular: {
        marginTop: 32,
        flex: 1,
    },
    popular_header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    popular_title: {
        ...TYPOGRAPHY.h2,
        paddingHorizontal: 16,
    },
    popular_more: {
        ...TYPOGRAPHY.small,
        color: COLORS.blue,
        paddingHorizontal: 16,
    }
})