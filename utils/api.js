import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'UdaciCards:storage';

export const loadState = async () => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data === null){
            return undefined;
        }
        return JSON.parse(data);
    } catch (error) {
        return undefined;
    }
};

export const saveState = async (state) => {
    try {
        const data = JSON.stringify(state);
        await AsyncStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
        console.log("Error saving data.");
    }
};