import SearchHeader from "@/components/SearchHeader";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1   bg-white">
      <SearchHeader />
      <Text className="text-xl text-black font-bold">Home</Text>
    </View>
  );
};

export default Home;
