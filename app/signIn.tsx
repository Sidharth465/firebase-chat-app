import { useAuth } from "@/context/authContext";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const { login } = useAuth();

  const email = React.useRef<string | null>(null);
  const password = React.useRef<string | null>(null);
  const handleSignIn = async () => {
    console.log(email);
    console.log(password);
    if (!email.current || !password.current)
      return alert("Please fill all fields");
    await login({
      email: email.current || "",
      password: password.current || "",
    });
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-6 text-black">Sign In</Text>

      <TextInput
        onChangeText={(e) => (email.current = e)}
        placeholder="Email"
        placeholderTextColor="#999"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-black"
      />
      <TextInput
        onChangeText={(e) => (password.current = e)}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-black"
      />

      <TouchableOpacity
        onPress={handleSignIn}
        className="w-full bg-purple-500  py-3 rounded-lg"
      >
        <Text className="text-white text-center font-semibold text-base">
          Sign In
        </Text>
      </TouchableOpacity>
      <Pressable onPress={() => router.push("/signUp")}>
        <Text className="mt-8 text-blue-500 font-medium underline">
          Don't have an account? Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
