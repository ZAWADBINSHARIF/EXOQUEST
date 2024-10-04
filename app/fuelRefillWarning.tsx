import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import useGlobalContext from '@/hooks/useGlobalContext';
import PointAndFuelView from '@/components/PointAndFuelView';

const fuelRefillWarning = () => {

    const { selectedCharacter } = useGlobalContext();

    return (
        <ImageBackground
            source={imgs.level_01_bg_02}
            className='w-full h-full flex-1'
        >

            <PointAndFuelView />

            <View>
                <Image
                    source={imgs[selectedCharacter]}
                />
            </View>

        </ImageBackground>
    );
};

export default fuelRefillWarning;