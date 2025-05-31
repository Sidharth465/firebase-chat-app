import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-6 text-black">Register</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#999"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-black"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-black"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-black"
      />

      <TouchableOpacity className="w-full bg-green-600 py-3 rounded-lg">
        <Text className="text-white text-center font-semibold text-base">
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="mt-8 text-blue-500 font-medium underline">
          Already have an account? Login here.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
