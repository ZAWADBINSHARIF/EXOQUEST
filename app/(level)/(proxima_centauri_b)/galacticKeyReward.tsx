import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import PointAndFuelView from '@/components/PointAndFuelView';
import useGlobalContext from '@/hooks/useGlobalContext';
import Animated, { BounceInLeft } from 'react-native-reanimated';
import BackButton from '@/components/BackButton';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import DialogueBubbleView from '@/components/DialogueBubbleView';



const galacticKeyReward = () => {

    const { selectedCharacter } = useGlobalContext();

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='flex-1'
        >
            <PointAndFuelView />

            <BackButton />

            <Animated.View
                className='absolute bottom-0 left-5'
                entering={BounceInLeft.springify().damping(100)}
            >
                <Image
                    source={imgs.master2}
                    style={{
                        width: 257,
                        height: 257,
                    }}
                    resizeMode='contain'
                />
            </Animated.View>


            <View
                className='absolute bottom-0 -right-5'
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
            </View>


            <View
                className="flex-1 justify-center items-center"
            >

                <View className='w-1/4 top-10'>
                    <DialogueBubbleView
                        text={<Text className='font-normal '><Text className='text-orange-500'>Congratulations</Text>, you've successfully completed the challenge! Your <Text className='font-bold'>Galactic Key 🔑</Text> is now unlocked.</Text>} arrowDireaction={'left'} />
                </View>

                <View>
                    <Image
                        source={imgs.galacticKey}
                        resizeMode='contain'
                        style={{
                            width: 300
                        }}
                    />
                </View>

                <View
                    className="bottom-14"
                >
                    <CustomButton
                        title="Claim & Go"
                        onPress={() => { router.push("/(level)/(proxima_centauri_b)/endMessage"); }}
                    />
                </View>

            </View>


        </ImageBackground>
    );
};

export default galacticKeyReward;