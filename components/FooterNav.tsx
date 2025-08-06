import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NavButton = ({ label, href }: { label: string; href: string }) => {
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth / 4 - 16; // divide evenly with spacing

  return (
    <Link href={href} asChild>
      <Pressable
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
    </Link>
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
      {/* Nav Buttons */}
      <NavButton label="Home" href="/" />
      <NavButton label="Profile" href="/profile" />
      <NavButton label="User" href="/user" />
      <NavButton label="Login" href="/login" />
    </View>
  );
};

export default FooterNav;
