import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import imgs from '@/constants/images';
import useGlobalContext from '@/hooks/useGlobalContext';
import Checkbox from 'expo-checkbox';
import BackButton from '@/components/BackButton';
import Animated, { BounceInLeft, FadeInRight, FadeOutRight, RollInRight } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import PointAndFuelView from '@/components/PointAndFuelView';

const quiz = () => {

    const { selectedCharacter, fuel, setFuel, setPoint } = useGlobalContext();
    console.log(fuel);
    const quiz_1_question = ["Proxima Centauri Cn", "Alpha Centauri Cb", "Beta Centauri"];
    const quiz_2_question = ["Approximately 234 K", "Approximately 112 K", "Approximately 2206 K"];

    const quiz_1_answare = "Alpha Centauri Cb";
    const quiz_2_answare = "Approximately 234 K";

    const [quiz_1, set_quiz_1] = useState('');
    const [quiz_2, set_quiz_2] = useState('');

    const handleSubmitQuiz = () => {
        if (!quiz_1 || !quiz_2)
            return;

        if (quiz_1 !== quiz_1_answare || quiz_2 !== quiz_2_answare) {
            if (fuel <= 0) {
                router.push("/fuelRefillWarning");
            }
            if (fuel > 0) {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                setFuel(prev => --prev);
            }
        } else {
            setPoint(prev => prev += 100);
            router.push("/(level)/(proxima_centauri_b)/rewardPoint");
        }
    };


    useEffect(() => {
        if (fuel <= 0) {
            router.push("/fuelRefillWarning");
        }
    }, [fuel]);

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1 flex-row'
        >

            <BackButton />

            <Animated.View
                className='self-end bottom-0 -left-5'
                entering={BounceInLeft.springify().damping(100)}
            >
                <Image
                    source={imgs[selectedCharacter]}
                    style={{
                        width: 257,
                        height: 257
                    }}
                    resizeMode='contain'
                />
            </Animated.View>

            <View className='absolute justify-end items-center w-full'>
                <Text className='text-3xl font-[SpicyRice] text-center top-8 uppercase text-white self-center'>Quiz</Text>

                <PointAndFuelView />
            </View>


            <View className='flex-1 h-full items-center justify-center flex-row gap-10 p-8 pt-20'>

                <Animated.View
                    entering={RollInRight.springify()}
                    className='h-2/3 bg-slate-600 border-white border-2 rounded-lg overflow-hidden flex-1'>
                    <View className='flex-row bg-[#1E293B] items-center p-2 gap-2'>
                        <View className='w-10 h-10 rounded-full bg-neutral-800 justify-center items-center'>
                            <Text className='text-white'>1</Text>
                        </View>
                        <View className='justify-center items-center'
                            style={{
                                paddingRight: 35
                            }}
                        >
                            <Text className='text-white font-medium'>What is the other Name of Proxima centauri b?</Text>
                        </View>

                    </View>
                    <View
                        className='justify-evenly flex-1'
                    >

                        {quiz_1_question.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    className='flex-row space-x-5 items-center pl-5'
                                >
                                    <Checkbox
                                        className='w-8 h-8 rounded-full'
                                        value={quiz_1 === item}
                                        onValueChange={() => {
                                            set_quiz_1(item);
                                        }}
                                    />
                                    <Text className='text-white font-semibold'>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}

                    </View>

                </Animated.View>


                <Animated.View
                    entering={RollInRight.springify()}
                    className='h-2/3 bg-slate-600 border-white border-2 rounded-lg overflow-hidden flex-1'>
                    <View className='flex-row bg-[#1E293B] items-center p-2 gap-2'>
                        <View className='w-10 h-10 rounded-full bg-neutral-800 justify-center items-center'>
                            <Text className='text-white'>2</Text>
                        </View>
                        <View className='justify-center items-center'>
                            <Text className='text-white font-medium'>Temperature?</Text>
                        </View>

                    </View>
                    <View
                        className='justify-evenly flex-1'
                    >

                        {quiz_2_question.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    className='flex-row space-x-5 items-center pl-5'
                                >
                                    <Checkbox
                                        className='w-8 h-8 rounded-full'
                                        value={quiz_2 === item}
                                        onValueChange={() => {
                                            set_quiz_2(item);
                                        }}
                                    />
                                    <Text className='text-white font-semibold'>
                                        {item}
                                    </Text>
                                </View>
                            );
                        })}

                    </View>

                </Animated.View>

                <Animated.View
                    entering={RollInRight.springify()}
                    className='absolute bg-green-700 px-3 py-2 rounded-xl shadow-xl bottom-0'>
                    <TouchableOpacity
                        onPress={handleSubmitQuiz}
                    >
                        <Text className='text-2xl text-white uppercase font-semibold'>Submit</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>


        </ImageBackground>
    );
};

export default quiz;