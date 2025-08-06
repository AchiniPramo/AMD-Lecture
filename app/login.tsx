import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const LoginScreen = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      login();
      router.replace("/"); // redirect to home page
    } else {
      alert("Invalid credentials!");
    }
  };

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
          placeholder="Username"
          placeholderTextColor="#94a3b8"
          style={{
            backgroundColor: "#334155",
            color: "#fff",
            padding: 16,
            borderRadius: 14,
            marginBottom: 20,
            fontSize: 15,
          }}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
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
          <Text
            style={{
              color: "#0f172a",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: "#94a3b8", marginTop: 30 }}>
        Don’t have an account?{" "}
        <Text
          style={{ color: "#38bdf8", fontWeight: "600" }}
          onPress={() => router.push("/")}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
