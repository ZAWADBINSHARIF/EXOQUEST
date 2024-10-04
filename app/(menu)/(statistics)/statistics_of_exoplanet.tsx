import { View, Text, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';
import HomeButton from '@/components/HomeButton';

const statistics_of_exoplanet = () => {
    return (
        <View
            className='bg-black flex-1'
        >

            <BackButton />

            <HomeButton />

            <View className='flex-1 pt-4'>
                <Image source={imgs.statistics_bg} className='h-full w-full' resizeMode='contain' />
            </View>


        </View>
    );
};

export default statistics_of_exoplanet;