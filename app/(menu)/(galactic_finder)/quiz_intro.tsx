import { View, Text, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const quiz_intro = () => {
    return (
        <View className='bg-black flex-1'>
            <BackButton />

            <View className='bottom-0 left-0 absolute -scale-x-100'>
                <Image
                    source={imgs.start_boy}
                />
            </View>

            <View className='absolute right-0'>
                <Image
                    source={imgs.gliese_667cc}
                />
            </View>


            <View
                className='flex-1 justify-around items-center'
            >

                <View><Text className='font-[default] text-center text-white text-3xl'>Exoplanet Expedition Quiz</Text></View>


                <View
                    className='w-1/3 p-3 bg-orange-500 rounded-3xl border-white border-2'
                >
                    <Text className='text-center text-2xl'>Hey ExoQuest, Your exoplanet expertise is stellar. Let's see if your quiz score can reach supernova levels.</Text>
                </View>

                <View>
                    <CustomButton
                        title='NEXT'
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                        onPress={() => router.push('/quiz')}
                    />
                </View>
            </View>

        </View>
    );
};

export default quiz_intro;