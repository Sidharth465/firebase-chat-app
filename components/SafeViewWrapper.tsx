import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeViewWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView edges={["top", "right", "left"]} className="flex-1 bg-white">
      {children}
    </SafeAreaView>
  );
};

export default SafeViewWrapper;
