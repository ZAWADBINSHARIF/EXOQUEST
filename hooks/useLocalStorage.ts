import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = () => {
    const localStorage = {
        async setItem(key: string, value: string) {
            try {
                await AsyncStorage.setItem(key, value);
            } catch (error) {
                console.log(error);
            }
        },
        async getItem(key: string) {
            try {
                const value = await AsyncStorage.getItem(key);
                if (value)
                    return value;
                else
                    return null;
            } catch (error) {
                console.log(error);
            }
        }
    };

    return localStorage;
};

export default useLocalStorage;