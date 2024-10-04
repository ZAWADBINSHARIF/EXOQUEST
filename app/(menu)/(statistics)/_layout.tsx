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
            <Stack.Screen name="index" />
            <Stack.Screen name="statistics_of_exoplanet" />
            <Stack.Screen name="kepler" />
        </Stack>
    );
};

export default layout;