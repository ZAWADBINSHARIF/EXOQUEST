import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import imgs from '@/constants/images';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const way_5 = () => {
    return (
        <View
            className='bg-black flex-1 flex-row'
        >

            <BackButton />

            <View className='w-3/5'>
                <Image
                    source={imgs.transit}
                />
                <View className=' justify-center items-end mr-14'>
                    <CustomButton
                        title={'NEXT'}
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                        onPress={() => router.push('/quiz')}
                    />
                </View>

            </View>

            <View className='pr-20 py-4 w-2/5 gap-3'>
                <View><Text className='font-[default] text-white text-center text-3xl'>Astrometry</Text></View>
                <View>
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white text-center text-base'>A model showing a star moving in a small circle due to the gravitational pull of an orbiting planet.
                            {'\n\n'}Astrometry involves measuring the tiny movement of a star across the sky. If a planet is orbiting the star, its gravitational pull can cause the star to move in a small circle. By carefully tracking these movements, astronomers can infer the presence of an orbiting planet.</Text>
                    </ScrollView>
                </View>
            </View>

        </View >
    );
};

export default way_5;