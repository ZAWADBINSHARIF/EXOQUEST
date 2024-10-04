import { View, Text, Image, TouchableOpacity, LayoutChangeEvent, useWindowDimensions, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming, FadeIn } from 'react-native-reanimated';
import imgs from '@/constants/images';
import { router } from 'expo-router';


const index = () => {


    const { height } = useWindowDimensions();

    const [exoplanet_81_position, set_exoplanet_81_position] = useState({ x: 0, y: 0 });

    const rocketX = useSharedValue(0);
    const rocketY = useSharedValue(0);
    const rocketOpacity = useSharedValue(1);
    const rocketScale = useSharedValue(1);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            bottom: 0,
            opacity: rocketOpacity.value,
            transform: [
                {
                    translateX: rocketX.value
                },
                {
                    translateY: rocketY.value
                },
                {
                    scale: rocketScale.value
                }
            ]
        };
    });


    useEffect(() => {

        if (exoplanet_81_position.x > 0 && exoplanet_81_position.y > 0) {
            rocketX.value = withTiming(exoplanet_81_position.x, { duration: 1500 });
            rocketY.value = withTiming(-height + exoplanet_81_position.y + 108, { duration: 1500 });
            rocketOpacity.value = withDelay(1500, withTiming(0, { duration: 100 }));
            rocketScale.value = withTiming(0, { duration: 2000 });
        }

    }, [exoplanet_81_position]);

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }, []);

    return (
        <View
            style={{
                width: '100%',
                height: "100%",
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <StatusBar hidden />

            <Image
                source={require('@/assets/imgs/start_bg.png')}
                className='w-full h-full absolute'
            />

            <Image
                source={require('@/assets/imgs/astronaut_1.png')}
                className='absolute top-1 left-40'
            />
            <Animated.Image
                source={require('@/assets/imgs/astronaut_2.png')}
                className='absolute'
                style={animatedStyle}
            />
            <Image
                source={require('@/assets/imgs/exoplanet-8162023_640.png')}
                className='absolute top-2 right-40'
                onLayout={(event: LayoutChangeEvent) => {
                    const { x, y } = event.nativeEvent.layout;
                    set_exoplanet_81_position({ x, y });
                }}
            />

            <View
                className='absolute bottom-0 right-0 flex-row justify-end items-center'
            >
                <Animated.View entering={FadeIn.delay(1000).duration(500)}>
                    <ImageBackground
                        source={imgs.dialogue_box}
                        style={{
                            width: 211,
                            height: 125,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 8,
                            marginRight: -50
                        }}
                    >
                        <Text className='text-black font-bold text-lg'>Hey! Welcome to</Text>
                        <Text className='text-black font-bold text-lg' >ExoQuest.</Text>
                    </ImageBackground>
                </Animated.View>
                <Animated.Image
                    source={imgs.start_boy}
                />
            </View>


            <TouchableOpacity
                className='self-center bg-[#FF8403] px-4 py-2 rounded-lg shadow-lg shadow-slate-500'
                onPress={() => router.push("/fastFact")}
            >
                <Text
                    className='font-bold text-zinc-950 text-2xl text-center'
                >START</Text>
            </TouchableOpacity>

        </View>
    );
};

export default index;;