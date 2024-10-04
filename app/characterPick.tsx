import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import BackButton from '@/components/BackButton';
import imgs from '@/constants/images';
import useGlobalContext from '@/hooks/useGlobalContext';
import { router } from 'expo-router';

const characterPick = () => {

    const {
        username,
        setUsername,
        setSelectedCharacter } = useGlobalContext();


    const [showError, setShowError] = useState(false);

    function pickCharacter(characterName: string) {

        setShowError(false);

        if (!username) {
            setShowError(true);
            return;
        }

        setSelectedCharacter(characterName);

        router.push("/(menu)");

    };

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
                className='absolute left-36 top-10 w-7/12 h-5/6 bg-[#79FFC680] rounded-3xl border-white border-4 justify-center gap-1 py-4'
            >

                <View className='items-center'>
                    <View className='flex-row space-x-2'>
                        <Text className='text-white/80 font-[SpaceMono]'>Enter your name: </Text>
                        <View className='shadow-lg'>
                            <TextInput className='bg-white w-32 rounded-lg px-2 font-[SpaceMono]'
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                    </View>
                    <Text
                        className='font-[SpicyRice] tracking-widest text-2xl text-white uppercase pt-2'
                    >
                        PICK  A  CHARACTER
                    </Text>
                    {showError &&
                        <Text className='text-red-600 bg-white/60 px-2 font-bold rounded-xl'>Please write your name</Text>
                    }
                </View>


                <View
                    className='flex-row justify-center gap-5 flex-1'
                >

                    <TouchableOpacity
                        onPress={() => pickCharacter("boy")}
                    >
                        <Image
                            source={imgs.boy_frame}
                            style={{
                                height: "100%"
                            }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => pickCharacter("girl")}
                    >
                        <Image
                            source={imgs.girl_frame}
                            style={{
                                height: "100%"
                            }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>

                </View>

            </View>


            <Image
                source={imgs.planet_01}
                className='absolute bottom-20 right-0'
            />

        </View>
    );
};

export default characterPick;