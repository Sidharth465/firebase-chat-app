// CustomTabBar.tsx
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Example animation value
        const animatedValue = useSharedValue(isFocused ? 0 : 1);

        return (
          <TouchableOpacity
            className="flex flex-1  items-center justify-center"
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Animated.Text
              style={{ color: isFocused ? "#007AFF" : "#999" }}
              className="w-full  text-center font-bold text-lg capitalize"
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBar;
