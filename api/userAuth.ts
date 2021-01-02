/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020, Zumper
 */

import firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

import * as Storage from '../utils/storage'

export const register = async (email: string, password: string, lastName: string, firstName: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const displayName = `${firstName} ${lastName}`
    currentUser && await currentUser.updateProfile({ displayName })
    await Storage.setItem('@user', currentUser)
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export const signIn = async (email: string, password: string) => {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    await Storage.setItem('@user', currentUser)
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    Storage.removeItem('@user')
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}