import SearchHeader from "@/components/SearchHeader";
import VideoCard, { VideoCardRef } from "@/components/VideoCard";
import { MediaSources } from "@/constants/constant";
import { useIsFocused } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";

const { height } = Dimensions.get("window");

const Home = () => {
  const isFocused = useIsFocused();

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const videoRefs = useRef<VideoCardRef[]>([]);
  const currentlyPlayingIndex = useRef<number | null>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const visible = viewableItems.map((item: any) => item.item.id);
    setVisibleItems(visible);
  }).current;

  const handleScrollBegin = () => {
    videoRefs.current.forEach((ref) => ref?.pause?.());
    currentlyPlayingIndex.current = null;
  };

  const handleVideoPress = (index: number) => {
    const current = currentlyPlayingIndex.current;
    if (current !== null && current !== index) {
      videoRefs.current[current]?.pause?.();
    }

    // Toggle play/pause if same video is tapped
    if (current === index) {
      videoRefs.current[index]?.pause?.();
      currentlyPlayingIndex.current = null;
    } else {
      videoRefs.current[index]?.play?.();
      currentlyPlayingIndex.current = index;
    }
  };

  return (
    <View className="flex-1 bg-white">
      <SearchHeader />
      <Text className="text-xl text-center my-5 text-black font-bold">
        Home
      </Text>
      <View className="h-full w-full">
        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={MediaSources}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <VideoCard
              ref={(ref) => (videoRefs.current[index] = ref!)}
              isVisible={visibleItems.includes(item.id) && isFocused}
              videoSource={item.sources[0]}
              thumb={item.thumb}
              onPress={() => handleVideoPress(index)}
            />
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 80,
            minimumViewTime: 100,
          }}
          onScrollBeginDrag={handleScrollBegin}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={height * 0.4}
        />
      </View>
    </View>
  );
};

export default Home;
