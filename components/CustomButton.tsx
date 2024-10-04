import { View, Text, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
    title: string;
    onPress?: ((event: GestureResponderEvent) => void);
    rightIcon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const CustomButton = ({ onPress, rightIcon, title, style }: Props) => {
    return (
        <View
            style={style}
        >
            <TouchableOpacity
                className='bg-[#FF8403] px-3 py-2 rounded-lg shadow-lg shadow-slate-500 flex-row justify-center items-center'
                onPress={onPress}
            >
                <Text className='font-bold text-zinc-950 text-2xl text-center mx-2'>{title}</Text>
                {rightIcon && rightIcon}
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;