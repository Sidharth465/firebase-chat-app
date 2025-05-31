import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import {
  GiftedChat,
  IMessage,
  InputToolbar,
  SendProps,
} from "react-native-gifted-chat";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const scaleWidth = (value: number): number => value;
const scaleModerate = (size: number): number => size;

const User = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<any>([]);
  const [isKeyboadVisible, setKeyboardVisible] = useState(false);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: "-45deg" }],
    };
  });

  useEffect(() => {
    if (Keyboard.isVisible()) {
      setKeyboardVisible(true);
    } else {
      setKeyboardVisible(false);
    }
  }, [isKeyboadVisible]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  useFocusEffect(() => {
    if (Platform.OS === "android") {
      navigation.getParent()?.setOptions({
        tabBarStyle: isKeyboadVisible ? { display: "none" } : undefined,
      });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView className="flex-1 ">
        <GiftedChat
          messages={messages}
          onSend={(messages: any) => onSend(messages)}
          user={{
            _id: 1,
          }}
          bottomOffset={-85}
          textInputProps={{
            placeholder: "Type a message",
            autoCorrect: false,
            selectionColor: "transparent",
            cursorColor: "#3b82f6",
            autoCapitalize: "none",
            multiline: true,
            textAlignVertical: "middle",
            selectTextOnFocus: false,
            contextMenuHidden: true,

            style: {
              flex: 1,
              paddingLeft: scaleWidth(15),
              paddingRight: scaleWidth(60),
              paddingVertical: 8,
              fontSize: scaleModerate(14),
              lineHeight: 20,
              color: "#1f2937",
              height: 55,
              borderWidth: 2,
              borderColor: "#E3E3E3",
              borderRadius: scaleModerate(100),
              backgroundColor: "#F9F9FF",
              zIndex: 1,
              textAlignVertical: "center",
              paddingTop: 10,
            },
          }}
          maxComposerHeight={scaleWidth(10)}
          placeholder={"Type a message"}
          showUserAvatar={false}
          renderAvatarOnTop={true}
          renderInputToolbar={(props) => (
            <InputToolbar
              containerStyle={{
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(20px)",
                backgroundColor: "transparent",
                borderTopWidth: 0,
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
              }}
              primaryStyle={{
                padding: scaleWidth(10),
                justifyContent: "center",
                alignItems: "center",
              }}
              {...props}
              renderSend={(props: SendProps<IMessage>) => {
                return (
                  <Pressable
                    onPress={() => {
                      if (props.text && props.text.trim().length > 0) {
                        props.onSend?.({ text: props.text.trim() }, true);
                      }
                    }}
                    onPressIn={() => {
                      scale.value = withSpring(0.8, { damping: 10 });
                    }}
                    onPressOut={() => {
                      scale.value = withSpring(1, { damping: 10 });
                    }}
                    className="  flex absolute right-5  z-40 items-center justify-center bg-primary  rounded-full p-2"
                  >
                    <Animated.View style={animatedStyle}>
                      <MaterialIcons
                        name="send"
                        size={scaleModerate(25)}
                        color="#fff"
                      />
                    </Animated.View>
                  </Pressable>
                );
              }}
            />
          )}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default User;
