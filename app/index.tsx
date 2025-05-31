import { useAuth } from "@/context/authContext";
import { Redirect } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import "../global.css";
import SignIn from "./signIn";

const EntryPoint = () => {
  const { isCheckingAuth, isAuthenticated } = useAuth();

  if (isCheckingAuth) {
    return (
      <View className="flex-1 flex bg-white justify-center items-center">
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={require("../assets/images/splash-icon.png")}
        />
      </View>
    );
  }

  return <>{isAuthenticated ? <Redirect href="/(tab)/home" /> : <SignIn />}</>;
};

export default EntryPoint;
