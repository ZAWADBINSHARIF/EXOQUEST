import React from 'react';
import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
        >
            <Stack.Screen name='map' />
            <Stack.Screen name='(proxima_centauri_b)' />
        </Stack>
    );
};

export default layout;