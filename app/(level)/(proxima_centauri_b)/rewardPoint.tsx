import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import imgs from '@/constants/images';
import PointAndFuelView from '@/components/PointAndFuelView';
import Animated, { BounceInLeft, BounceInRight } from 'react-native-reanimated';
import useGlobalContext from '@/hooks/useGlobalContext';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import BackButton from '@/components/BackButton';

const rewardPoint = () => {

    const { selectedCharacter } = useGlobalContext();

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >
            <PointAndFuelView />

            <Animated.View
                className='absolute bottom-0 -right-5'
                entering={BounceInRight.springify().damping(100)}
            >
                <Image
                    source={imgs[selectedCharacter]}
                    style={{
                        width: 257,
                        height: 257,
                        transform: [
                            {
                                scaleX: -1
                            }
                        ]
                    }}
                    resizeMode='contain'
                />
            </Animated.View>


            <View
                className='flex-1 justify-around items-center'
            >

                <View>

                    <Image
                        source={imgs.rewardPoint}
                        style={{
                            width: 150
                        }}
                        resizeMode='contain'
                    />

                    <Text className='text-3xl text-white font-[SpaceMono] font-bold -mt-10'>Points earned</Text>
                </View>

                <CustomButton
                    title='Claim'
                    onPress={() => router.push("/(level)/(proxima_centauri_b)/galacticKeyReward")}
                />

            </View>


        </ImageBackground>
    );
};

export default rewardPoint;