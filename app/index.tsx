import React from "react";
import { Image, View } from "react-native";
import "../global.css";

const EntryPoint = () => {
  return (
    <View className="flex-1 flex bg-white justify-center items-center">
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={require("../assets/images/splash-icon.png")}
      />
    </View>
  );
};

export default EntryPoint;
