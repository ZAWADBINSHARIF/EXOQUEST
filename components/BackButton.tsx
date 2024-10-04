import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const BackButton = () => {
    return (
        <TouchableOpacity
            className='absulate rounded-full z-50 top-5 left-10 w-[48px]'
            onPress={() => router.back()}
        >
            <Ionicons name="arrow-back-circle" size={32} color="white" />
        </TouchableOpacity>
    );
};

export default BackButton;