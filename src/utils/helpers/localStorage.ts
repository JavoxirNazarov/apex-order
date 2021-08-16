import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocalData = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw Error('saving error');
  }
};

export const getLocalData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw Error('error reading value');
  }
};

export const removeLocalData = (key: string) => {
  AsyncStorage.removeItem(key);
};
