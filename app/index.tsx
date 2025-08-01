import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Welcome
      </Text>

      {/* Styled Button to /profile */}
      <Link href="/profile" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: '#1e90ff',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
            Go to Profile
          </Text>
        </TouchableOpacity>
      </Link>

      {/* Styled Button to /user */}
      <Link href="/user" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: '#32cd32',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
            Go to User
          </Text>
        </TouchableOpacity>
      </Link>

      {/* TextInput with styling */}
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="#888"
        style={{
          borderWidth: 1,
          borderColor: '#fff',
          color: '#fff',
          padding: 10,
          marginTop: 30,
          width: '100%',
          borderRadius: 8,
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default Index;
