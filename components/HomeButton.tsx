import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { router } from 'expo-router';

const HomeButton = () => {
    return (
        <TouchableOpacity className='absolute top-5 z-50 right-10'
            onPress={() => router.push("/(menu)/menu")}
        >
            <FontAwesome name="home" size={32} color="white" />
        </TouchableOpacity>
    );
};

export default HomeButton;