import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

type Props = {
  videoSource: string;
  thumb: string;
  isVisible: boolean;
  onPress?: () => void;
};

export type VideoCardRef = {
  play: () => void;
  pause: () => void;
};

const VideoCard = forwardRef<VideoCardRef, Props>(
  ({ videoSource, thumb, isVisible, onPress }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useVideoPlayer(videoSource, (p) => {
      p.loop = true;
    });

    useImperativeHandle(ref, () => ({
      play: () => {
        if (!player.playing) {
          player.play();
          setIsPlaying(true);
        }
      },
      pause: () => {
        if (player.playing) {
          player.pause();
          setIsPlaying(false);
        }
      },
    }));

    return (
      <Pressable
        style={[styles.container]}
        onPress={() => onPress?.()}
        className="bg-white rounded-xl p-2 overflow-hidden"
      >
        {isVisible && isPlaying ? (
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        ) : (
          <View className="relative flex">
            <Image
              source={{ uri: thumb }}
              style={styles.image}
              resizeMode="cover"
            />
            <View className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black opacity-30">
              <MaterialCommunityIcons name="play" size={70} color="#fff" />
            </View>
          </View>
        )}
      </Pressable>
    );
  }
);

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 6px 5px",
  },
  image: {
    height: 200,
    borderRadius: 10,
    width: "100%",
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
