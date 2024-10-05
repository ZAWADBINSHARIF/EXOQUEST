import { Stack } from 'expo-router';
import React from 'react';

export default function layout() {
    return (
        <Stack
            screenOptions={{
                'headerShown': false
            }}
            initialRouteName='menu'
        >
            <Stack.Screen name='menu' />
            <Stack.Screen name='(statistics)' />
            <Stack.Screen name="(galactic_finder)" />
        </Stack>
    );
}
