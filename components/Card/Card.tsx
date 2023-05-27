import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, StyleProp, ViewStyle, ImageResizeMode, TextStyle, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";

type CardProps = {
    top?: string,
    middle?: string,
    bottom?: string,
    image?: string | null,
    onPress?: () => void,
    cardStyle?: StyleProp<ViewStyle>,
    resizeMode?: ImageResizeMode | undefined,
    width?: number | string,
    height?: number | string,
    middleStyle?: StyleProp<TextStyle>
}

const Card: React.FC<CardProps> = ({ 
        top=" ", 
        middle = " ", 
        bottom = " ", 
        image = null, 
        onPress, 
        cardStyle=null, 
        resizeMode="cover", 
        width,
        height,
        middleStyle=null}) => {

    const [dimensions, setDimensions] = React.useState({
        width: 0,
        height: 0
    })

    React.useEffect(() => {
        image && Image.getSize(image, (width, height) => {
            setDimensions({width, height})
        })
    }, []);

    return (
        <TouchableOpacity style={[styles.card, cardStyle, 
            width ? {width: width} : {width: "100%"}, 
            height ? {height: height} : {height: dimensions.height}]} onPress={onPress}>
            {image
            ?  <ImageBackground 
                    style={styles.card_background}
                    imageStyle={{ borderRadius: 16}}
                    source={{uri: image}} 
                    resizeMode={resizeMode}> 
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
                        <View style={[styles.card_details_middle, middleStyle]}>
                            <Text style={styles.card_details_middle_text}>
                                {middle}
                            </Text>
                        </View>
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
        // width: 290,
        // height: 192,
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
        marginTop: 'auto',
        alignSelf: "flex-start"
    },
    card_details_middle_text: {
        ...TYPOGRAPHY.p1,
        color: COLORS.black,
    },
    card_details_bottom: {
        marginTop: 8,
        ...TYPOGRAPHY.h3,
        color: COLORS.white,
    }
})