import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

type ListElementProps = {
    title: string,
    date: string,
    tagName?: string,
    image?: ImageSourcePropType | null,
    onPress?: () => void,
}

const ListElement: React.FC<ListElementProps> = ({ title, date, tagName="", image=null, onPress}) => {
    return (
        <TouchableOpacity style={styles.listElement} onPress={onPress}>
            {image  
               ? <Image style={styles.listElement_image} source={image} />
               : <View style={styles.listElement_image_replaced}></View> }

            <View style={styles.listElement_details}>
                <Text style={styles.listElement_details_tagName}>{tagName}</Text>
                <Text style={styles.listElement_details_title}>{title}</Text>
                <Text style={styles.listElement_details_date}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListElement;

const styles = StyleSheet.create({
    listElement: {
        marginVertical: 8,
        maxWidth: 360,
        display: "flex",
        flexDirection: "row",
    },
    listElement_image: {
        aspectRatio: 1,
        borderRadius: 16,
    },
    listElement_image_replaced: {
        height: 128,
        width: 128,
        backgroundColor: COLORS.gray400,
        borderRadius: 16,
    },
    listElement_details: {
        marginLeft: 12,
        paddingVertical:13,
        flex: 1,
        display: "flex",
        justifyContent: "space-between"
    },
    listElement_details_tagName: {
        ...TYPOGRAPHY.small,
        color: COLORS.gray400
    },
    listElement_details_title: {
        ...TYPOGRAPHY.h3,
        color: COLORS.gray900,
    },
    listElement_details_date: {
        ...TYPOGRAPHY.small,
        color: COLORS.gray400
    }
});