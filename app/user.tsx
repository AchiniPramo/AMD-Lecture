import { View, Text, Image } from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: '#ffffff',
          paddingVertical: 30,
          paddingHorizontal: 25,
          borderRadius: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
          alignItems: 'center',
          width: '100%',
          maxWidth: 340,
        }}
      >
        {/* Profile Pic */}
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#3b82f6',
            marginBottom: 15,
          }}
        />

        {/* Name */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#111827',
            marginBottom: 4,
          }}
        >
          Achini Pramodhya
        </Text>

        {/* Job Title */}
        <Text
          style={{
            fontSize: 14,
            color: '#6b7280',
            marginBottom: 10,
          }}
        >
          Full-Stack Developer
        </Text>

        {/* Tagline */}
        <Text
          style={{
            fontSize: 13,
            color: '#374151',
            textAlign: 'center',
          }}
        >
          Crafting clean UI and scalable code with passion and precision.
        </Text>
      </View>
    </View>
  );
};

export default User;
