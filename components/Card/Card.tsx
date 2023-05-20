import { StyleSheet, View, Text, ImageBackground, ImageSourcePropType, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";

type CardProps = {
    title: string,
    date: string,
    tagName?: string,
    image?: ImageSourcePropType | null,
    onPress?: () => void,
}

const Card: React.FC<CardProps> = ({ title, date, tagName = "", image = null, onPress}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {image  
            ?  <ImageBackground 
                    style={styles.card_background}
                    imageStyle={{ borderRadius: 16}}
                    source={image} 
                    resizeMode="cover" 
                    resizeMethod="resize"> 
                    <LinearGradient
                        colors={[
                        'rgba(24, 24, 27, 0)',
                        'rgba(24, 24, 27, 0)',
                        'rgba(24, 24, 27, 0.8)',
                        ]}
                        style={styles.card_gradient}>
                        <View style={styles.card_details}>
                            <Text style={styles.card_details_date}>
                                {date}
                            </Text>
                            <Text style={styles.card_details_tagName}>
                                {tagName}
                            </Text>
                            <Text style={styles.card_details_title}>
                                {title}
                            </Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            :  <LinearGradient
                    colors={[
                    'rgba(24, 24, 27, 0)',
                    'rgba(24, 24, 27, 0)',
                    'rgba(24, 24, 27, 0.8)',
                    ]}
                    style={styles.card_gradient}>
                    <View style={styles.card_details}>
                        <Text style={styles.card_details_date}>
                            {date}
                        </Text>
                        <Text style={styles.card_details_tagName}>
                            {tagName}
                        </Text>
                        <Text style={styles.card_details_title}>
                            {title}
                        </Text>
                    </View>
                </LinearGradient>
            }
            
        </TouchableOpacity>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 6,
        height: 192,
        width: 290,
        backgroundColor: COLORS.gray,
        borderRadius: 16,
    },
    card_background: {
        width: "100%",
        height: "100%",
    },
    card_gradient: {
        flex: 1,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    card_details : {
        padding: 16,
    },
    card_details_date: {
        ...TYPOGRAPHY.p2,
        color: COLORS.white,
    },
    card_details_tagName: {
        marginTop: 66,
        ...TYPOGRAPHY.p2,
        color: COLORS.white,
    },
    card_details_title: {
        marginTop: 8,
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
    }
})