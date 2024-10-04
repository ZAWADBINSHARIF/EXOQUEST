import { View, Text, Image, useWindowDimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import imgs from '@/constants/images';
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import BackButton from '@/components/BackButton';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import useGlobalContext from '@/hooks/useGlobalContext';
import CustomButton from '@/components/CustomButton';


const fastFact = () => {

    const imgWidth = 187;
    const dialogue_box_width = 211;

    const { username, selectedCharacter } = useGlobalContext();

    const right = useSharedValue<'auto' | number>(0);
    const left = useSharedValue<'auto' | number>('auto');
    const scaleX = useSharedValue(1);

    const { width } = useWindowDimensions();

    const animationViewStyle = useAnimatedStyle(() => {
        return {
            'position': 'absolute',
            bottom: 0,
            right: right.value,
            left: left.value,
        };
    });

    const animationImageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scaleX: scaleX.value
                }
            ]
        };
    });

    useEffect(() => {

        if (width <= 0)
            return;

        right.value = withDelay(50, withSpring(width - imgWidth - dialogue_box_width + 30, {
            damping: 10,
            stiffness: 100,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
        }));
        scaleX.value = withDelay(50, withTiming(-1, { 'duration': 500 }));

    }, [width]);

    return (
        <View
            className='flex-1 w-full h-full'
        >

            <BackButton />

            <Image
                source={imgs.exterior_galaxy}
                className='h-full w-full absolute'
            />

            <View
                className='flex-1 items-center overflow-hidden justify-around'
            >
                <View className='bg-white/10 w-96 h-3/5 rounded-3xl pb-3'>

                    <Text className='text-xl text-center text-orange-300 underline pb-3'>Fast facts</Text>

                    <ScrollView>

                        <View className='gap-1 justify-center px-7 w-full'>

                            <View className='flex-row'>
                                <Entypo name="dot-single" size={24} color="white" />
                                <Text className='font-bold text-white text-lg'>An exoplanet is any planet beyond our solar system.</Text>
                            </View>

                            <View className='flex-row'>
                                <Entypo name="dot-single" size={24} color="white" />
                                <Text className='font-bold text-white text-lg'>Name of the first exoplanet is “51 Pegasi b”.</Text>
                            </View>

                            <View className='flex-row'>
                                <Entypo name="dot-single" size={24} color="white" />
                                <View>
                                    <Text className='font-bold text-white text-lg' >Invented by Michel Mayor and Didier Queloz. For this discovery, they were awarded the 2019 Nobel Prize in Physics.</Text>
                                </View>
                            </View>

                            <View className='flex-row'>
                                <Entypo name="dot-single" size={24} color="white" />
                                <Text className='font-bold text-white text-lg'>This discovery made at Haute-Provence Observatory.</Text>
                            </View>

                        </View>

                    </ScrollView>


                </View>

                <View>
                    <CustomButton
                        title='NEXT'
                        onPress={() => username && selectedCharacter ? router.push("/(menu)") : router.push("/characterPick")}
                        rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                    />
                </View>

            </View>

            <Image
                source={imgs.planet_01}
                className='absolute bottom-20 right-0'
            />

            <Animated.View
                style={animationViewStyle}
                className='absolute justify-end flex-row-reverse items-end'
            >
                <Animated.View entering={FadeIn.springify().stiffness(100).damping(30)}>
                    <ImageBackground
                        source={imgs.dialogue_box}
                        style={{
                            width: 211,
                            height: 125,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 8,
                            marginLeft: -50
                        }}
                    >
                        <Text className='text-black font-bold text-lg'>What is an</Text>
                        <Text className='text-black font-900 text-lg' >Exoplanet?.</Text>
                    </ImageBackground>
                </Animated.View>

                <Animated.Image
                    source={imgs.start_boy}
                    style={animationImageStyle}
                />
            </Animated.View>
        </View>
    );
};

export default fastFact;