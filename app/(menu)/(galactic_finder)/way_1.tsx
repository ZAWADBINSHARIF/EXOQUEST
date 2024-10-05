import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import CustomButton from '@/components/CustomButton';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import BackButton from '@/components/BackButton';

const way_1 = () => {
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
                        onPress={() => router.push('/way_2')}
                    />
                </View>

            </View>

            <View className='pr-20 py-4 w-2/5 gap-3'>
                <View><Text className='font-[default] text-white text-center text-3xl'>Transit</Text></View>
                <View>
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white text-center text-base'>A model showing a planet passing in front of its star, blocking a small portion of the star's light.
                            {'\n\n'} The transit method relies on detecting the slight dimming of a star's light as a planet passes in front of it. Imagine a tiny speck blocking a small portion of sunlight. By carefully measuring these dips in brightness, astronomers can infer the presence of an orbiting planet.</Text>
                    </ScrollView>
                </View>
            </View>

        </View >
    );
};

export default way_1;