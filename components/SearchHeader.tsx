import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchHeader = () => {
  // Create a ref to store the input value
  const inputValueRef = useRef<string>("");

  // Handler for text input changes
  const handleTextChange = (text: string) => {
    // Save the current text value in the ref
    inputValueRef.current = text;
    console.log("Current input value:", inputValueRef.current);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 10px 2px",
  },
});

export default SearchHeader;
