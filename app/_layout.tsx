import { AuthContextProvider } from "@/context/authContext";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainLayout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="(tab)" />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <SafeAreaView className="flex-1">
        <MainLayout />
      </SafeAreaView>
    </AuthContextProvider>
  );
};

export default RootLayout;
