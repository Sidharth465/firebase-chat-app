import { AuthContextProvider, useAuth } from "@/context/authContext";
import { router, Slot, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (typeof isAuthenticated == "undefined") return;

    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      // redirenct user to home
      router.push("/(app)/home");
    } else if (isAuthenticated == false) {
      // redirect user to login page
      router.replace("/signIn");
    }
    {
    }
  }, [isAuthenticated]);
  return <Slot />;
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
