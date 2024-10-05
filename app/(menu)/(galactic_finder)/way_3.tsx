import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import imgs from '@/constants/images';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const way_3 = () => {
    return (
        <View
            className='bg-black flex-1 flex-row'
        >

            <BackButton />

            <View className='w-3/5'>
                <Image
                    source={imgs.direct_imaging}
                />
                <View className=' justify-center items-end mr-14'>
                    <CustomButton
                        title={'NEXT'}
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                        onPress={() => router.push('/way_4')}
                    />
                </View>

            </View>

            <View className='pr-20 py-4 w-2/5 gap-3'>
                <View><Text className='font-[default] text-white text-center text-3xl'>Astrometry</Text></View>
                <View>
                    <ScrollView>
                        <Text className='font-[SpaceMono] text-white text-center text-base'>A model showing a telescope capturing a direct image of a planet orbiting a star.
                            {'\n\n'} Direct imaging is the most straightforward method, but also the most challenging. It involves taking a picture of a planet separate from its host star. This is like trying to spot a firefly next to a bright lighthouse. Advances in technology have made direct imaging possible for some exoplanets.</Text>
                    </ScrollView>
                </View>
            </View>

        </View >
    );
};

export default way_3;