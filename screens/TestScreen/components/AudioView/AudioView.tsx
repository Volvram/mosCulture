import { StyleSheet, View, Text, TouchableOpacity, StyleProp, ViewStyle, Image } from "react-native";
import { Audio } from 'expo-av';
import React from "react";
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";

type AudioViewProps = {
    title?: string;
    source: string;
    style?: StyleProp<ViewStyle>
}

const AudioView: React.FC<AudioViewProps> = ({title="Аудио", source, style}) => {
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        loadAudio();
    }, [source]);

    React.useEffect(() => {
        const loading = async () => {
            try {
                sound && await sound.loadAsync({ uri: source });
                setIsPlaying(false);
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

    const loadAudio = () => {
        setSound(new Audio.Sound());
    }

    const toggleAudioPlayback = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={styles.audio} onPress={toggleAudioPlayback}>
                <Image style={{width: 20, height: 20}} source={require("../../../../assets/img/audio.png")} />
                <Text style={styles.audio_text}>{title}</Text>
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
        backgroundColor: COLORS.blueAction,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    audio_text: {
        ...TYPOGRAPHY.p1,
        marginLeft: 8,
        color: COLORS.white,
        textAlign: "center",
    }
});