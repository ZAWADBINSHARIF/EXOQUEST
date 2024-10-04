import { View, Text, Image } from 'react-native';
import React from 'react';
import imgs from '@/constants/images';
import MenuPath from '@/components/svgs/MenuPath';

const index = () => {

    return (
        <View className='flex-1 h-full w-full'>

            <Image
                source={imgs.menu_bg}
                className='absolute w-full h-full'
            />

            <View
                className='flex-1 w-full h-full justify-around items-center'
            >
                <MenuPath />
            </View>

        </View>
    );
};

export default index;