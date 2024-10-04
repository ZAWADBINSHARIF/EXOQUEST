import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import imgs from '@/constants/images';
import BackButton from '@/components/BackButton';
import useGlobalContext from '@/hooks/useGlobalContext';
import DialogueBubbleView from '@/components/DialogueBubbleView';
import CustomButton from '@/components/CustomButton';
import Entypo from '@expo/vector-icons/build/Entypo';
import { router } from 'expo-router';
import Animated, { BounceInLeft, BounceInRight, FadeInDown, FadeInRight, FlipInEasyY } from 'react-native-reanimated';


const dialogue_01 = () => {

    const { username, selectedCharacter } = useGlobalContext();
    console.log(username, selectedCharacter);

    const DialogueText = [
        {
            name: "master",
            text: <Text className='font-normal tracking-wider'>Welcome, Quest! I am Abraham, the master of all knowledge about Proxima Centauri b. Here, you’ll uncover the secrets of this intriguing exoplanet, from its climate and landscape to its potential for hosting life. Prepare to delve into the depths of its mysteries and unlock the wonders of our closest habitable world.</Text>,
            option: false
        },
        {
            name: "astronaut",
            text: <Text className='font-normal tracking-wider'>Greetings, Master Abraham! I have travelled far to uncover the secrets of your planet, its climate, its landscape, and its potential for life. I seek a <Text className='text-orange-500 font-bold'>Galactic Key 🔑</Text> that will enable me to journey to any exoplanet, allowing me to return to Earth and share the mysteries of your world with my people. Please help me explore the depths of your atmosphere, the textures of your surface, and the hidden possibilities for life that this planet holds.</Text>,
            option: false
        },
        {
            name: "master",
            text: <Text className='font-normal tracking-wider'>Well, I can assist you in obtaining that <Text className='text-orange-500 font-bold'>Galactic Key 🔑</Text>, but first, you'll need to complete a challenge. Are you ready to accept it?</Text>,
            option: true
        },
        {
            name: "master",
            text: <View className='justify-center items-center'>

                <View className='justify-center items-center pb-3'>
                    <Text className='font-bold text-base'>
                        Things need to Know Before Jumping into it
                    </Text>
                </View>

                <Text className='font-normal tracking-wider'>
                    {`-> 234 K (−39 °C; −38 °F)\n-> Star: Proxima Centauri\n-> Other name-Alpha Centauri Cb\n-> Distance: 4.24 light-years\n-> Mass: 1.17 times that of Earth\n-> Completes one orbit around Proxima Centauri every 11.2 Earth days.\n-> Discovered by: Anglada-Escudé\n-> Detection method: Doppler spectroscopy`}
                </Text>

            </View>,
            option: false
        },
    ] as const;

    const [dialogueIndex, setDialogueIndex] = useState(0);

    useEffect(() => {
        if (dialogueIndex >= DialogueText.length) {
            setDialogueIndex(0);
            router.push("/(level)/(proxima_centauri_b)/quiz");
        }
    }, [dialogueIndex]);

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >

            <BackButton />


            {DialogueText[dialogueIndex]?.name === 'master' &&
                <Animated.View
                    entering={BounceInRight}
                    className='absolute justify-center items-center bottom-56 left-36 w-3/5'
                >
                    <DialogueBubbleView
                        text={DialogueText[dialogueIndex]?.text}
                        arrowDireaction='left'
                    />
                </Animated.View>
            }

            {DialogueText[dialogueIndex]?.name === 'astronaut' &&
                <Animated.View
                    entering={BounceInLeft}
                    className='absolute justify-center items-center bottom-56 right-48 w-3/5'
                >
                    <DialogueBubbleView
                        text={DialogueText[dialogueIndex]?.text}
                        arrowDireaction='right'
                    />
                </Animated.View>
            }
            <Animated.View
                entering={FadeInDown.springify()}
                className='absolute bottom-5 left-5 justify-center items-center'>

                <Image
                    source={imgs.master}
                />
                <View className='bg-orange-400 px-3 py-1 rounded-lg'>
                    <Text className='text-base text-center'>Master</Text>
                </View>
            </Animated.View>

            <Animated.View
                entering={FadeInDown.springify()}
                className='absolute right-0 bottom-0'
            >
                <Image
                    source={imgs[selectedCharacter]}
                    className='-scale-x-100'
                    style={{
                        width: 257,
                        height: 257
                    }}
                    resizeMode='contain'
                />
            </Animated.View>

            {DialogueText[dialogueIndex]?.option === false &&
                <View className='justify-end items-center flex-1'>
                    <View className='bottom-10'>
                        <CustomButton
                            title={'YES'}
                            rightIcon={<Entypo name="chevron-with-circle-right" size={24} color="black" />}
                            onPress={() => setDialogueIndex(prev => prev + 1)}
                        />
                    </View>
                </View>
            }

            {DialogueText[dialogueIndex]?.option === true &&

                <View className='justify-center items-end flex-1 flex-row gap-7'>

                    <View
                        className='bottom-32'
                    >
                        <TouchableOpacity
                            className='bg-red-600 px-4 py-2 rounded-lg shadow-lg shadow-slate-500 flex-row justify-center items-center'
                            onPress={() => router.push("/(level)")}
                        >
                            <Text className='font-bold text-zinc-950 text-2xl text-center mx-2'>NO</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        className='bottom-32'
                    >
                        <TouchableOpacity
                            className='bg-green-600 px-4 py-2 rounded-lg shadow-lg shadow-slate-500 flex-row justify-center items-center'
                            onPress={() => setDialogueIndex(prev => prev + 1)}
                        >
                            <Text className='font-bold text-zinc-950 text-2xl text-center mx-2'>YES</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            }

        </ImageBackground>
    );
};

export default dialogue_01;