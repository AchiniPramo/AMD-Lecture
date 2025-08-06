import { View, Text } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1e293b",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: "#facc15",
          marginBottom: 10,
        }}
      >
        Profile
      </Text>
      <Text style={{ fontSize: 18, color: "#e2e8f0" }}>
        This is your profile screen
      </Text>
    </View>
  );
};

export default ProfileScreen;
