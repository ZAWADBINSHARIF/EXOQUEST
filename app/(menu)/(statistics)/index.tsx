import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';
import imgs from '@/constants/images';
import { router } from 'expo-router';

const index = () => {
    return (
        <View className='bg-black flex-1'>
            <BackButton />
            <HomeButton />

            <View className='flex-1'>
                <View>
                    <Text className='text-white text-center text-[44px] font-[default]'>Steller Statistics</Text>
                </View>

                <View className='w-full h-full flex-row p-5'>
                    <View className='flex-1 border-white border-r-2'>
                        <View >
                            <Text className='text-white font-[default] text-[48px] text-center'>Individual</Text>
                        </View>

                        <View className='gap-5'>
                            <View className=' justify-center gap-10 items-center flex-row'>
                                <TouchableOpacity className='bg-[#D9D9D9] px-3 py-2 rounded-lg'>
                                    <Text className='text-[38px] font-[default] uppercase'>KEPLER</Text>
                                </TouchableOpacity>
                                <View className='bg-[#D9D9D9] px-3 py-2 rounded-lg'>
                                    <Text className='text-[38px] font-[default] uppercase'>Proxima</Text>
                                </View>
                            </View>
                            <View className=' justify-center gap-10 items-center flex-row'>
                                <View className='bg-[#D9D9D9] px-3 py-2 rounded-lg'>
                                    <Text className='text-[38px] font-[default] uppercase'>Transit</Text>
                                </View>
                                <View className='bg-[#D9D9D9] px-3 py-2 rounded-lg'>
                                    <Text className='text-[38px] font-[default] uppercase'>Pegasi</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View className='flex-1'>
                        <View>
                            <Text className='text-white font-[default] text-[48px] text-center'>Overall</Text>
                        </View>

                        <TouchableOpacity
                            className='items-center justify-center pt-5'
                            onPress={() => router.push("/(menu)/statistics_of_exoplanet")}
                        >
                            <Image
                                source={imgs.statistics_overall}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </View>
    );
};

export default index;