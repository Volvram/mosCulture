import { StyleSheet, Image} from "react-native";
import { IImageFrameProps } from "editorjs-viewer-native";
import React from "react";

type DimensionsType = {
    width: number, 
    height: number
}

const ImageView = ({data} : IImageFrameProps) => {
    const [dimensions, setDimensions] = React.useState<DimensionsType | null>(null);

    Image.getSize(data.file.url, (width, height) => {
        setDimensions({width, height})
    });

    return (
        <Image style={[styles.imageView, dimensions && {aspectRatio: dimensions.width / dimensions.height}]}
            source={{uri: data.file.url}}
         />
    )
}

export default ImageView;

const styles = StyleSheet.create({
    imageView: {
        marginVertical: 8,
        width: "100%",
        borderRadius: 16,
    }
})