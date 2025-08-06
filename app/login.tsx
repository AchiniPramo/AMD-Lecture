import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      router.replace("/");
    } else {
      alert("Please fill both fields");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a", // dark background
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: 10,
        }}
      >
        👋 Welcome Back
      </Text>

      <Text style={{ color: "#cbd5e1", fontSize: 16, marginBottom: 30 }}>
        Login to your account to continue
      </Text>

      <View
        style={{
          width: "100%",
          backgroundColor: "#1e293b",
          padding: 25,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <TextInput
          placeholder="Email"
          placeholderTextColor="#94a3b8"
          style={{
            backgroundColor: "#334155",
            color: "#fff",
            padding: 16,
            borderRadius: 14,
            marginBottom: 20,
            fontSize: 15,
          }}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#94a3b8"
          style={{
            backgroundColor: "#334155",
            color: "#fff",
            padding: 16,
            borderRadius: 14,
            marginBottom: 10,
            fontSize: 15,
          }}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#38bdf8",
            paddingVertical: 15,
            borderRadius: 14,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#0f172a", fontSize: 16, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: "#94a3b8", marginTop: 30 }}>
        Don’t have an account?{" "}
        <Text style={{ color: "#38bdf8", fontWeight: "600" }}>Sign up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
