import { View, Text } from 'react-native';
import React from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';

const web = () => {

    const fixedUrl = 'https://eyes.nasa.gov/apps/exo';

    const handleNavigationStateChange = (navState: WebViewNavigation) => {
        return navState.url === fixedUrl;
    };

    return (
        <WebView className='flex flex-1' source={{ uri: fixedUrl }}
            onNavigationStateChange={handleNavigationStateChange}
        />
    );
};

export default web;