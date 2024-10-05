import { View, Text, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const way_path = () => {
    return (
        <View
            className='flex-1'
        >
            <BackButton />

            <Image
                source={imgs.exterior_galaxy}
                className='h-full w-full absolute'
            />


            <Image
                source={imgs.planet_01}
                className='absolute bottom-20 right-0'
            />

            <View className='flex-1'>

                <View className='w-9/12 justify-around h-[90%]'>
                    <View className='pb-5'>
                        <Text className='font-[default] text-[40px] text-white text-center'>Five way to detect exoplanets</Text>
                    </View>
                    <View className='flex-row justify-around space-x-5'>
                        <View className='bg-[#5D7ED6] px-5 py-2 rounded-lg flex-row gap-1 justify-center items-center space-x-3'>
                            <View className='px-1 border-2 border-black'><Text className='font-[SpaceMono] font-normal text-center text-black'>1</Text></View>
                            <Text className='font-[SpaceMono] font-normal text-lg text-black'>Transit</Text>
                        </View>
                        <View className='bg-[#5D7ED6] px-5 py-2 rounded-lg flex-row gap-1 justify-center items-center space-x-3'>
                            <View className='px-1 border-2 border-black'><Text className='font-[SpaceMono] font-normal text-center text-black'>5</Text></View>
                            <Text className='font-[SpaceMono] font-normal text-lg text-black'>Astrometry</Text>
                        </View>
                    </View>

                    <View className='flex-row justify-evenly -space-x-5'>
                        <View className='bg-[#79FFC6CC] px-5 py-2 rounded-lg flex-row gap-1 justify-center items-center space-x-3'>
                            <View className='px-1 border-2 border-black'><Text className='font-[SpaceMono] font-normal text-center text-black'>2</Text></View>
                            <Text className='font-[SpaceMono] font-normal text-lg text-black'>Radial Velocity</Text>
                        </View>

                        <View className='bg-[#79FFC6CC] px-5 py-2 rounded-lg flex-row gap-1 justify-center items-center space-x-3'>
                            <View className='px-1 border-2 border-black'><Text className='font-[SpaceMono] font-normal text-center text-black'>4</Text></View>
                            <Text className='font-[SpaceMono] font-normal text-lg text-black'>Microlensing</Text>
                        </View>

                    </View>

                    <View className='flex-row justify-center'>
                        <View className='bg-[#FAE2C9] px-5 py-2 rounded-lg flex-row gap-1 justify-center items-center space-x-3'>
                            <View className='px-1 border-2 border-black'><Text className='font-[SpaceMono] font-normal text-center text-black'>1</Text></View>
                            <Text className='font-[SpaceMono] font-normal text-lg text-black'>Direct Imaging</Text>
                        </View>
                    </View>

                    <View className=' justify-center items-center'>
                        <CustomButton
                            title='Learn & Earn'
                            onPress={() => {
                                router.push("/way_1");
                            }}
                        />
                    </View>

                </View>


            </View>



        </View>
    );
};

export default way_path;