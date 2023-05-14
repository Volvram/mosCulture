import React from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType, Animated, Pressable } from "react-native";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";

type FlippingCardProps = {
    frontImage?: ImageSourcePropType | null,
    frontText?: string,
    backImage?: ImageSourcePropType | null,
    backText?: string,
}

const FlippingCard: React.FC<FlippingCardProps> = ({frontImage=null, frontText="", backImage=null, backText=""}) => {

    const flipAnimation = React.useRef( new Animated.Value( 0 ) ).current;
    let flipRotation = 0;
    flipAnimation.addListener( ( { value } ) => flipRotation = value );

    const flipToFrontStyle = {
        transform: [
          { rotateY: flipAnimation.interpolate( {
            inputRange: [ 0, 180 ],
            outputRange: [ "0deg", "180deg" ]
          } ) }
        ]
    };
    
    const flipToBackStyle = {
    transform: [
        { rotateY: flipAnimation.interpolate( {
        inputRange: [ 0, 180 ],
        outputRange: [ "180deg", "360deg" ]
        } ) }
    ]
    };

    const flipToFront = () => {
        Animated.timing( flipAnimation, {
          toValue: 180,
          duration: 300,
          useNativeDriver: true,
        } ).start();
      };
    const flipToBack = () => {
        Animated.timing( flipAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        } ).start();
    };

    return (
        <Pressable style={ styles.cardWrapper }
            onPress={ () => flipRotation ? flipToBack() : flipToFront() }
        >
            <View style={ styles.cardWrapper_container}>
                {frontImage 
                    ? <Animated.Image
                        style={ { ...styles.cardFront, ...flipToFrontStyle } }
                        source={frontImage}
                    />
                    : <Animated.View style={ { ...styles.cardFront, ...flipToFrontStyle } }>
                        <Animated.Text style={ { ...styles.cardFront_text, ...flipToFrontStyle } }>{frontText}</Animated.Text>
                      </Animated.View> 
                }
                
                {backImage 
                    ? <Animated.Image
                        style={ { ...styles.cardBack, ...flipToBackStyle } }
                        source={backImage}
                    />
                    : <Animated.View  style={ { ...styles.cardBack, ...flipToBackStyle } }>
                        <Animated.Text style={ { ...styles.cardBack_text, ...flipToBackStyle } }>{backText}</Animated.Text>
                      </Animated.View>
                }
            </View>
            
            
        </Pressable>
    );
}

export default FlippingCard;

const styles = StyleSheet.create({
    cardWrapper: {
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    cardWrapper_container: {
        // height: 192,
        // width: 290,
        aspectRatio: 2,
        width: "100%",
        borderRadius: 16,
        justifyContent: "center",
    },
    cardFront: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.peach,
        position: "absolute",
        borderRadius: 16,
        justifyContent: "center",
    },
    cardFront_text: {
        ...TYPOGRAPHY.small,
        color: COLORS.gray900,
        marginHorizontal: 16,
        position: "absolute",
        backgroundColor: COLORS.peach,
        borderRadius: 16,
        textAlign: "center",
    },
    cardBack: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.peach,
        zIndex: 1,
        backfaceVisibility: "hidden",
        borderRadius: 16,
        justifyContent: "center",
    },
    cardBack_text: {
        ...TYPOGRAPHY.small,
        color: COLORS.gray900,
        marginHorizontal: 16,
        zIndex: 1,
        backfaceVisibility: "hidden",
        backgroundColor: COLORS.peach,
        borderRadius: 16,
        textAlign: "center",
    }
})