import { View, Text, Image } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e0f2fe',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 40,
          paddingHorizontal: 30,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 6,
          alignItems: 'center',
          width: '100%',
          maxWidth: 380,
        }}
      >
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/79.jpg' }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: '#10b981',
            marginBottom: 20,
          }}
        />

        {/* Name */}
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: 6,
          }}
        >
          Achini Pramodhya
        </Text>

        {/* Title */}
        <Text
          style={{
            fontSize: 16,
            color: '#6b7280',
            marginBottom: 16,
          }}
        >
          UI/UX Designer & MERN Stack Developer
        </Text>

        {/* Full Bio */}
        <Text
          style={{
            fontSize: 15,
            color: '#374151',
            textAlign: 'center',
            lineHeight: 22,
            marginBottom: 16,
          }}
        >
          Experienced in building responsive web and mobile applications. Passionate about creating intuitive user experiences using modern frameworks like React, Node.js, and Tailwind CSS.
        </Text>

        {/* Email or Additional Info */}
        <Text style={{ fontSize: 14, color: '#3b82f6' }}>
          📧 achini.dev@email.com
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
