import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { RollInRight } from 'react-native-reanimated';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';

const quiz = () => {

    const [quiz_question, set_quiz_question] = useState([
        {
            number: 3,
            question: "What method involves observing the slight dimming of a star's light?",
            options: ["Gravitational Microlensing", "Transit", "Astrometry"],
            answer: "Transit",
            selectedOption: ""
        },
        {
            number: 4,
            question: "Which method involves measuring the tiny movement of a star across the sky?",
            options: ["Radial Velocity", "Gravitational Microlensing", "Astrometry"],
            answer: "Astrometry",
            selectedOption: ""
        },
    ]);


    const handleSubmitQuiz = () => {
        router.push("/quiz_3");
    };


    useEffect(() => {

    });

    return (
        <View className='bg-black flex-1'>
            <View className='flex-1 h-full items-center justify-center flex-row gap-10 p-8 pt-20'>

                {
                    quiz_question.map((item, index) => {
                        return (
                            <Animated.View
                                key={index}
                                entering={RollInRight.springify()}
                                className='h-2/3 bg-slate-600 border-white border-2 rounded-lg overflow-hidden flex-1'>
                                <View className='flex-row bg-[#1E293B] items-center p-2 gap-2'>
                                    <View className='w-10 h-10 rounded-full bg-neutral-800 justify-center items-center'>
                                        <Text className='text-white'>{item.number}</Text>
                                    </View>
                                    <View className='justify-center items-center'
                                        style={{
                                            paddingRight: 35
                                        }}
                                    >
                                        <Text className='text-white font-medium'>{item.question}</Text>
                                    </View>

                                </View>
                                <View
                                    className='justify-evenly flex-1'
                                >

                                    {item.options.map((i, index) => {
                                        return (
                                            <View
                                                key={index}
                                                className='flex-row space-x-5 items-center pl-5'
                                            >
                                                <Checkbox
                                                    className='w-8 h-8 rounded-full'
                                                    value={item.selectedOption === i}
                                                    onValueChange={() => {
                                                        set_quiz_question((prev) => {
                                                            const newQuizQuestion = prev.filter(question => {
                                                                question.question != item.question;
                                                            });

                                                            if (item.selectedOption === i) {
                                                                return [...newQuizQuestion, { ...item, selectedOption: "" }];
                                                            }

                                                            return [...newQuizQuestion, { ...item, selectedOption: i }];

                                                        });
                                                    }}
                                                />
                                                <Text className='text-white font-semibold'>
                                                    {i}
                                                </Text>
                                            </View>
                                        );
                                    })}

                                </View>

                            </Animated.View>
                        );
                    })
                }

                <View
                    className='absolute bg-green-700 px-3 py-2 rounded-xl shadow-xl bottom-0'>
                    <TouchableOpacity
                        onPress={handleSubmitQuiz}
                    >
                        <Text className='text-2xl text-white uppercase font-semibold'>Submit</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default quiz;