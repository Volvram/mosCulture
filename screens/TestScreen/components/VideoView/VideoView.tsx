import { StyleSheet, View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import React from "react";

type VideoViewProps = {
  source: string;
  style?: StyleProp<ViewStyle>
}

const VideoView: React.FC<VideoViewProps> = ({source, style}) => {
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
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isMuted={true}
        onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
      />
        <TouchableOpacity style={styles.video_buttons}
          onPress={() => {
            if (video.current) {
              videoStatus.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          } 
          }>
          <Text>{videoStatus.isPlaying ? 'Pause' : 'Play'}</Text>
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
  video_buttons: {
    width: 100,
    height: 50,
  }
});