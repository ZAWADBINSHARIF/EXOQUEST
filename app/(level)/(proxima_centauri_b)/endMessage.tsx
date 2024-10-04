import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import PointAndFuelView from '@/components/PointAndFuelView';
import imgs from '@/constants/images';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const endMessage = () => {
    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >
            <PointAndFuelView />

            <BackButton />

            <View
                className='flex-1 justify-center items-center gap-5'
            >
                <View
                    className='bg-[#79FFC6CC] py-3 px-2 w-1/4 rounded-xl'
                >
                    <Text className='text-base track font-normal'>

                        <Text className='text-orange-500 font-bold'>Essential Takeaway</Text> : Since there’s no planet like earth habitable for the living beings has been found until now, you should go back to your planet and work for it’s betterment while there's still time.
                    </Text>
                </View>
                <View>
                    <CustomButton
                        title='Understood'
                        onPress={() => router.push("/(menu)")}
                    />
                </View>
            </View>

        </ImageBackground>
    );
};

export default endMessage;