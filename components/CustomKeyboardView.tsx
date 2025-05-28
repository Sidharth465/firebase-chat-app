import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS === "ios";
const CustomKeyboardView = ({ children }: { children: ReactNode }) => {
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;
