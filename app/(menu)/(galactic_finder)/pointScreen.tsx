import { View, Text } from 'react-native';
import React from 'react';

const pointScreen = () => {
    return (
        <View className='bg-black flex-1'>
            <View className='flex-1 justify-center items-center'>
                <Text className='text-white text-2xl'>We got 40</Text>
            </View>
        </View>
    );
};

export default pointScreen;