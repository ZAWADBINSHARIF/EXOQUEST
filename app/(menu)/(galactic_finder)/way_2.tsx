import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import imgs from '@/constants/images';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const way_2 = () => {
    return (
        <View
            className='bg-black flex-1 flex-row'
        >

            <BackButton />

            <View className='w-3/5'>
                <Image
                    source={imgs.radialvelocity}
                />
                <View className=' justify-center items-end mr-14'>
                    <CustomButton
                        title={'NEXT'}
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                        onPress={() => router.push('/way_3')}
                    />
                </View>

            </View>

            <View className='pr-20 py-4 w-2/5 gap-3'>
                <View><Text className='font-[default] text-white text-center text-3xl'>Radial Velocity</Text></View>
                <View>
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white text-center text-base'>A model demonstrating a star wobbling slightly due to the gravitational pull of an orbiting planet.
                            {'\n\n'} The radial velocity method measures the tiny back-and-forth motion of a star caused by the gravitational tug of an orbiting planet. Think of it like a person on a seesaw. As the planet orbits, it pulls the star towards and away from us, creating a Doppler shift in the star's light. </Text>
                    </ScrollView>
                </View>
            </View>

        </View >
    );
};

export default way_2;