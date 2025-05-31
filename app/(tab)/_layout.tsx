import TabBar from "@/components/Tabbar";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      initialRouteName="home"
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="user" />
    </Tabs>
  );
};

export default TabLayout;
