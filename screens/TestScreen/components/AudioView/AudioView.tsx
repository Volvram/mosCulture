import { StyleSheet, View, Text, TouchableOpacity, StyleProp, ViewStyle, Image, TextStyle } from "react-native";
import { Audio } from 'expo-av';
import React from "react";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";

type AudioViewProps = {
    title?: string;
    source: string;
    style?: StyleProp<ViewStyle>,
    styleText?: StyleProp<TextStyle>,
    light?: boolean,
    onClick?: () => void,
    currentAudio?: string | null,
    stop?: boolean
}

const AudioView: React.FC<AudioViewProps> = (
    {title="Аудио", source, style, styleText, light=false, onClick, currentAudio, stop=false}) => {
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        if (stop && isPlaying) {
            setIsPlaying(false);
        }
      }, [stop]);

    React.useEffect(() => {
        loadAudio();

        return () => {
            Unload()
        };
    }, [source]);

    const Unload = async () => {
        setIsPlaying(false);
        sound && await sound.unloadAsync();
    };

    React.useEffect(() => {
        const loading = async () => {
            try {
                sound && await sound.loadAsync({ uri: source });
                // setIsPlaying(false);
            } catch (e) {
                console.log('ERROR Loading Audio', e);
            }
        };
        loading();
    }, [sound]);

    React.useEffect(() => {
        if (sound && isPlaying) {
            sound.playAsync();
        } else if (sound && !isPlaying) {
            sound.stopAsync();
        }
    }, [isPlaying]);

    React.useEffect(() => {
        if (title !== currentAudio) {
            setIsPlaying(false);
        }
    }, [currentAudio]);

    const loadAudio = () => {
        setSound(new Audio.Sound());
    }

    const toggleAudioPlayback = () => {
        setIsPlaying(!isPlaying);
        onClick && onClick();
    }

    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={[styles.audio, light && styles.audio__active, style]} onPress={toggleAudioPlayback}>
                <Image style={{width: 20, height: 20}} 
                    source={light ? require("../../../../assets/img/audio.png") 
                    : require("../../../../assets/img/audioDark.png")} />
                <Text style={[styles.audio_text, light && styles.audio_text__active, styleText]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AudioView;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        minWidth: 175,
        minHeight: 48,
    },
    audio: {
        padding: 12,
        width: "100%",
        minWidth: 175,
        minHeight: 48,
        borderRadius: 24,
        backgroundColor: COLORS.lightGray,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    audio__active: {
        padding: 12,
        width: "100%",
        minWidth: 175,
        minHeight: 48,
        borderRadius: 24,
        backgroundColor: COLORS.blueAction,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    audio_text: {
        ...TYPOGRAPHY.p1,
        marginVertical: "auto",
        marginLeft: 8,
        color: COLORS.black,
        textAlign: "center",
    },
    audio_text__active: {
        ...TYPOGRAPHY.p1,
        marginVertical: "auto",
        marginLeft: 8,
        color: COLORS.white,
        textAlign: "center",
    }
});