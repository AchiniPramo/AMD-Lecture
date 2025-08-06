import { View, Text } from "react-native";
import React from "react";

const UserScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: "#f472b6",
          marginBottom: 10,
        }}
      >
        User Info
      </Text>
      <Text style={{ fontSize: 18, color: "#cbd5e1" }}>
        This is the user screen
      </Text>
    </View>
  );
};

export default UserScreen;
