import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const NavButton = ({ label, onPress }: { label: string; onPress: () => void }) => {
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth / 5 - 16; // Now 5 buttons

  return (
    <Pressable
      onPress={onPress}
      style={{
        width: buttonWidth,
        backgroundColor: "#3498db",
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: "center",
      }}
      android_ripple={{ color: "#2980b9" }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const FooterNav = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#2c3e50",
        paddingVertical: 15,
        paddingHorizontal: 8,
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 6,
        gap: 8,
      }}
    >
      <NavButton label="Home" onPress={() => router.push("/")} />
      <NavButton label="Profile" onPress={() => router.push("/profile")} />
      <NavButton label="User" onPress={() => router.push("/user")} />
      <NavButton
        label="Item"
        onPress={() =>
          router.push({
            pathname: "/item/[id]",
            params: {
              id: "1",
              name: "kavi",
              age: "29",
              address: "galle",
            },
          })
        }
      />
      <NavButton label="Login" onPress={() => router.push("/login")} />
    </View>
  );
};

export default FooterNav;
