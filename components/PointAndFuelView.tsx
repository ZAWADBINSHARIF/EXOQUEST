import { View, Text, Image } from 'react-native';
import React from 'react';
import useGlobalContext from '@/hooks/useGlobalContext';
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated';
import imgs from '@/constants/images';

const PointAndFuelView = () => {

    const { fuel, point } = useGlobalContext();

    return (
        <View className='items-center justify-center flex-row absolute right-10 top-5 gap-3'>
            <Text className='text-lg font-bold text-center uppercase text-white'>Points: {point}</Text>
            <View className='flex-row'>

                {fuel > 0 &&
                    Array(fuel).fill(0).map((_, index) => {
                        return (
                            <Animated.View key={index} entering={FadeInRight.springify()} exiting={FadeOutRight.springify()}>
                                <Image source={imgs.fuel} />
                            </Animated.View>
                        );
                    })
                }

            </View>
        </View>
    );
};

export default PointAndFuelView;