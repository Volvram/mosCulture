import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

type ListElementProps = {
    top?: string,
    middle?: string,
    bottom?: string,
    image?: ImageSourcePropType | null,
    onPress?: () => void,
}

const ListElement: React.FC<ListElementProps> = ({ top=" ", middle=" ", bottom=" ", image=null, onPress}) => {
    return (
        <TouchableOpacity style={styles.listElement} onPress={onPress}>
            {image  
               ? <Image style={styles.listElement_image} source={image} />
               : <View style={styles.listElement_image_replaced}></View> }

            <View style={styles.listElement_details}>
                <Text style={styles.listElement_details_tagName}>{top}</Text>
                <Text style={styles.listElement_details_title}>{middle}</Text>
                <Text style={styles.listElement_details_date}>{bottom}</Text>
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
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    },
    listElement_details: {
        marginLeft: 12,
        paddingVertical: 13,
        flex: 1,
        display: "flex",
        justifyContent: "space-between"
    },
    listElement_details_tagName: {
        ...TYPOGRAPHY.p2,
        color: COLORS.gray
    },
    listElement_details_title: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    listElement_details_date: {
        ...TYPOGRAPHY.p2,
        color: COLORS.gray
    }
});