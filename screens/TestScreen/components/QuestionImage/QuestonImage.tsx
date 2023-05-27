import {StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import { TYPOGRAPHY } from "../../../../config/typography";
import { COLORS } from "../../../../config/colors";
import React from "react";

type QuestionImageType = {
    question: string,
    image: string
}

const QuestionImage: React.FC<QuestionImageType> = ({question, image}) => {
    const [dimensions, setDimensions] = React.useState({
        width: 200,
        height: 200,
    });

    React.useEffect(() => {
        Image.getSize(image, (width, height) => {
            setDimensions({width, height})
        })
    }, [question]);

    return (
        <View>
            <Text style={styles.questionImage_text}>{question}</Text>
            {image ?
                <Image style={[styles.questionImage_image, {width: "70%", aspectRatio: dimensions.width/dimensions.height}]} 
                source={{uri : image}}/>
            : <ActivityIndicator size="large" color={COLORS.blueAction}/>
            }
            
        </View> 
    )
}

export default QuestionImage;

const styles = StyleSheet.create({
    questionImage_text: {
        ...TYPOGRAPHY.h3,
        marginTop: 32,
        marginBottom: 10,
        color: COLORS.black,
        alignSelf: "center",
        textAlign: "center",
    },
    questionImage_image: {
        marginBottom: 10,
        width: "50%",
        alignSelf: "center",
        borderRadius: 16,
    },
    questionImage_isLoading: {
        marginVertical: "auto",
        alignSelf: "center",
    }
})