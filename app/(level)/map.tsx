import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import BackButton from '@/components/BackButton';
import { router } from 'expo-router';

const index = () => {
    return (
        <ImageBackground
            source={imgs.level_bg}
            className='flex-1'
        >
            <BackButton />

            <View
                className='absolute top-10 -right-20'
            >
                <Image
                    source={imgs.timeline_of_level}
                    className='right-0'
                />
                <Pressable
                    className='absolute top-1/3 -left-12'
                    onPress={() => router.push("/(proxima_centauri_b)")}
                >
                    <Image
                        source={imgs.P_Centauri}
                    />
                </Pressable>
            </View>

            <Text>Level</Text>
        </ImageBackground>
    );
};

export default index;