import { StyleSheet, View, Text, TouchableOpacity, StyleProp, ViewStyle, Image } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import React from "react";

type VideoViewProps = {
  source: string;
  style?: StyleProp<ViewStyle>,
  hideButtons?: boolean
}

const VideoView: React.FC<VideoViewProps> = ({source, style, hideButtons=false}) => {
    const video = React.useRef<Video | null>(null);
    const [videoStatus, setVideoStatus] = React.useState<any>({});

    return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={[styles.video, style]}
        source={{
          uri: source,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isMuted={true}
        isLooping={true}
        onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
      />
        <TouchableOpacity style={[styles.video_buttons, hideButtons && {display: "none"}]}
          onPress={() => {
            if (video.current) {
              videoStatus.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          } 
          }>
            {!videoStatus.isPlaying ?
              <Image style={styles.video_buttons_image} source={require("../../../../assets/img/playCircle.png")} />
              : <Image style={styles.video_buttons_image_pause} source={require("../../../../assets/img/pause.png")} />
            }
            <Text style={[styles.video_buttons_text, {display: "none"}]}>{videoStatus.isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default VideoView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minWidth: 361,
    minHeight: 203,
    borderRadius: 16,
  },
  video: {
    width: "100%",
    minWidth: 361,
    minHeight: 203,
    borderRadius: 16,
  },
  video_buttons_image: {
    position: "absolute",
    marginTop: -110,
    width: 32,
    height: 32,
    alignSelf: "center",
  },
  video_buttons_image_pause: {
    marginTop: 6,
    width: 32,
    height: 32,
    alignSelf: "center",
  },
  video_buttons: {
    width: 100,
    height: 50,
    alignSelf: "center",
  },
  video_buttons_text: {
    textAlign: "center",
  }
});