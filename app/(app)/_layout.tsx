import { Slot } from "expo-router";

const MainLayout = () => {
  return <Slot screenOptions={{ headerShown: false }} />;
};
export default MainLayout;
