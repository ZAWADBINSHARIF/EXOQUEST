import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { Entypo } from '@expo/vector-icons';
import Proxima_Centauri_b from '@/components/svgs/Proxima_Centauri_b';
import BackButton from '@/components/BackButton';
import { router } from 'expo-router';

const index = () => {
    return (
        <ImageBackground
            className='flex-1 w-full h-full'
            source={imgs.level_01_bg_01}
        >

            <BackButton />

            <View className='items-center'>
                <Text className='text-3xl text-white font-[SpaceMono] bg-neutral-600/50 p-2 py-3 text-center rounded-lg'>Proxima Centauri B</Text>
            </View>

            <View className='absolute left-0 top-32'>
                <Proxima_Centauri_b />
            </View>

            <View className='flex-1 justify-center items-center'>

                <View
                    className='w-[45%] h-[50%] bg-[#0E1C27] rounded-3xl shadow-2xl shadow-white px-3 py-1 gap-3'
                >
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white'>An intriguing exoplanet orbiting the red dwarf star Proxima Centauri, lies just over 4 light-years from Earth. It resides in the habitable zone, where conditions might be right for liquid water to exist.{'\n \n'}With its close proximity and potential for habitability, Proxima Centauri b continues to be a focal point in the search for alien life and planetary science.</Text>
                    </ScrollView>
                </View>

                <CustomButton
                    title='NEXT'
                    rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                    onPress={() => router.push("/(level)/(proxima_centauri_b)/dialogue_01")}
                    style={{
                        top: 25
                    }}
                />

            </View>

        </ImageBackground>
    );
};

export default index;