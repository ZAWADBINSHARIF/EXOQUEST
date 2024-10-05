import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import MenuPath from '@/components/svgs/MenuPath';
import { router } from 'expo-router';
import { Ionicons, Entypo, FontAwesome6 } from '@expo/vector-icons';

const index = () => {

    return (
        <View className='flex-1 h-full w-full'>

            <Image
                source={imgs.menu_bg}
                className='absolute w-full h-full'
            />

            <View
                className='flex-1 justify-around items-center'
            >

                <View className=''>
                    <MenuPath />

                    <Pressable
                        className='absolute -bottom-24 -left-8'
                        onPress={() => router.push("/(level)/map")}
                    >
                        <Image
                            source={imgs.Expedition_Earth_2}
                            style={{
                                width: 80,
                            }}
                            resizeMode='contain'
                        />
                        <Text
                            style={{
                                fontSize: 18
                            }}
                            className='absolute bottom-9 left-3 font-[default] text-white'>Expedition Earth 2.0</Text>
                    </Pressable>

                    <Pressable
                        className='absolute -top-5 left-20'
                        onPress={() => router.push("/(level)/map")}
                    >
                        <Image
                            source={imgs.GalacticFinder}
                            style={{
                                width: 80,
                            }}
                            resizeMode='contain'
                        />
                        <Text className='bottom-44 left-3 font-[default] text-white text-center'
                            style={{
                                fontSize: 18
                            }}
                        >Galactic Finder</Text>
                    </Pressable>

                    <Pressable
                        className='absolute -bottom-20 left-56'
                        onPress={() => router.push("/(level)/(proxima_centauri_b)")}
                    >
                        <Image
                            source={imgs.GalacticGateWay}
                            style={{
                                width: 65,
                            }}
                            resizeMode='contain'
                        />
                        <Text className='absolute bottom-9 left-3 font-[default] text-white text-center'
                            style={{
                                fontSize: 18
                            }}
                        >Galactic Gateway</Text>
                    </Pressable>

                    <Pressable
                        className='absolute top-4 right-20'
                        onPress={() => router.push("/(level)/(proxima_centauri_b)")}
                    >
                        <Image
                            source={imgs.exoplanet_8162023_640}
                            style={{
                                width: 70,
                            }}
                            resizeMode='contain'
                        />
                        <Text className='-top-28 -left-3 font-[default] text-white text-center'
                            style={{
                                fontSize: 18
                            }}
                        >Galactic Genesis</Text>
                    </Pressable>

                    <Pressable
                        className='absolute -top-16 -right-8'
                        onPress={() => router.push("/(statistics)")}
                    >
                        <Image
                            source={imgs.statistic}
                            style={{
                                width: 65,
                            }}
                            resizeMode='contain'
                        />
                        <Text className='-top-10 font-[default] text-white text-center'
                            style={{
                                fontSize: 18
                            }}
                        >Statistics</Text>
                    </Pressable>

                </View>
            </View>

            <View
                className='absolute right-5 top-10 gap-5'
            >
                <Ionicons name="settings-sharp" size={24} color="white" />
                <Entypo name="info-with-circle" size={24} color="white" />
                <FontAwesome6 name="ranking-star" size={24} color="white" />
                <TouchableOpacity onPress={() => router.push("/web")}>

                    <Image source={imgs.galaxyIcon} width={24} resizeMode='contain' />
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default index;