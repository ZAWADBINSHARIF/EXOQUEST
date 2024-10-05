import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import imgs from '@/constants/images';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const way_4 = () => {
    return (
        <View
            className='bg-black flex-1 flex-row'
        >

            <BackButton />

            <View className='w-3/5'>
                <Image
                    source={imgs.gravitational_microlensin}
                />
                <View className=' justify-center items-end mr-14'>
                    <CustomButton
                        title={'NEXT'}
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                        onPress={() => router.push('/way_5')}
                    />
                </View>

            </View>

            <View className='pr-20 py-4 w-2/5 gap-3'>
                <View><Text className='font-[default] text-white text-center text-3xl'>Gravitational Microlensing</Text></View>
                <View>
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white text-center text-base'>A model demonstrating how a passing object can magnify the light of a distant star.
                            {'\n\n'} Gravitational microlensing occurs when a massive object, like a star or planet, passes between Earth and a distant star. The gravitational field of the passing object acts as a lens, magnifying the light from the distant star. This temporary brightening can reveal the presence of an unseen planet.</Text>
                    </ScrollView>
                </View>
            </View>

        </View >
    );
};

export default way_4;