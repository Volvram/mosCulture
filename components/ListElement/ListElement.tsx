import { StyleSheet, View, Text, Image, ImageSourcePropType, TouchableOpacity, StyleProp, TextStyle, ScrollView } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";

type ListElementProps = {
    top?: string | string[],
    middle?: string,
    bottom?: string,
    image?: ImageSourcePropType | null,
    onPress?: () => void,
    topStyle?: StyleProp<TextStyle>,
    bottomStyle?: StyleProp<TextStyle>,
}

const ListElement: React.FC<ListElementProps> = ({ top=" ", middle=" ", bottom=" ", image=null, onPress, topStyle=null, bottomStyle=null}) => {

    return (
        <TouchableOpacity style={styles.listElement} onPress={onPress} activeOpacity={1}>
            {image  
               ? <Image style={styles.listElement_image} source={image} resizeMode="contain" />
               : <View style={styles.listElement_image_replaced} /> 
            }

            <View style={styles.listElement_details}>
                { Array.isArray(top) && top.length > 1 ? 
                            <View key={top[0]} style={[styles.listElement_details_top, topStyle]}>
                            <Text style={styles.listElement_details_top_text}>{top[0]}...</Text>
                        </View>
                    : <View style={[styles.listElement_details_top, topStyle]}>
                        <Text style={styles.listElement_details_top_text}>{top}</Text>
                       </View>
                }
                <Text style={styles.listElement_details_middle}>{middle.length > 40 ? middle.slice(0, 40)+"..." : middle}</Text>
                <View style={[styles.listElement_details_bottom, bottomStyle]}>
                    <Text style={styles.listElement_details_bottom_text}>{bottom}</Text>
                </View>
                
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
        height: 128,
        width: 128,
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
        paddingVertical: 6,
        flex: 1,
        display: "flex",
        justifyContent: "space-between"
    },
    listElement_details_top: {
        alignSelf: 'flex-start',
    },
    listElement_details_top_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black,
    },
    listElement_details_middle: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black,
    },
    listElement_details_bottom: {
        alignSelf: 'flex-start',
    },
    listElement_details_bottom_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.gray
    }
});