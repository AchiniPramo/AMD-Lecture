import { View, Text } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        padding: 24,
      }}
    >
      <Text
        style={{
          fontSize: 44,
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: 20,
        }}
      >
        🚀 Welcome
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: "#cbd5e1",
          textAlign: "center",
          maxWidth: 320,
          lineHeight: 26,
        }}
      >
        Explore the navigation tabs below to discover more features and pages.
      </Text>
    </View>
  );
};

export default Index;
