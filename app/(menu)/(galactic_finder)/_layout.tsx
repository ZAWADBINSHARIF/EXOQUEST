import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='way_path' />
            <Stack.Screen name='way_1' />
            <Stack.Screen name='way_2' />
            <Stack.Screen name='way_3' />
            <Stack.Screen name='way_4' />
            <Stack.Screen name='way_5' />
            <Stack.Screen name='quiz_intro' />
            <Stack.Screen name='quiz' />
            <Stack.Screen name='quiz_2' />
            <Stack.Screen name='quiz_3' />
            <Stack.Screen name='pointScreen' />
        </Stack>
    );
};

export default layout;