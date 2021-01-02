/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2021, Zumper
 */

import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (key: string, value: any) => {
  try {
    const stringifiedValue = typeof value !== 'string' ? JSON.stringify(value) : value
    await AsyncStorage.setItem(key, stringifiedValue)
  } catch (e) {
    console.log('Error setting item in AsyncStorage', e)
  }
}

export const getItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key)
    return typeof item === 'string' ? JSON.parse(item) : item
  } catch (e) {
    console.log('Error getting item in AsyncStorage', e)
  }
}

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('Error removing item from AsyncStorage', e)
  }
}

