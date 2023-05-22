import { StyleSheet, View, Text, ImageBackground, ImageSourcePropType, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";

type CardProps = {
    top?: string,
    middle?: string,
    bottom?: string,
    image?: ImageSourcePropType | null,
    onPress?: () => void,
    cardStyle?: StyleProp<ViewStyle>,
}

const Card: React.FC<CardProps> = ({ top=" ", middle = " ", bottom = " ", image = null, onPress, cardStyle=null}) => {
    return (
        <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress}>
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
                            <Text style={styles.card_details_top}>
                                {top}
                            </Text>
                            <Text style={styles.card_details_middle}>
                                {middle}
                            </Text>
                            <Text style={styles.card_details_bottom}>
                                {bottom}
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
                        <Text style={styles.card_details_top}>
                            {top}
                        </Text>
                        <Text style={styles.card_details_middle}>
                            {middle}
                        </Text>
                        <Text style={styles.card_details_bottom}>
                            {bottom}
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
        width: "100%",
        height: "100%",
        display: "flex",
    },
    card_details_top: {
        ...TYPOGRAPHY.p1,
        color: COLORS.white,
    },
    card_details_middle: {
        ...TYPOGRAPHY.p1,
        marginTop: 'auto',
        color: COLORS.white,
    },
    card_details_bottom: {
        marginTop: 8,
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
    }
})