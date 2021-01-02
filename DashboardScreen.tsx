/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020
 */

import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { signOut } from './api/userAuth';
import { RootStackParamList } from './App'
import { getItem } from './utils/storage'


type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const DashboardScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('')
  const [exercised, setExercised] = useState(false)
  const [drank, setDrank] = useState(false)
  useEffect(() => {
    const getUser = async () => {
      console.log('GETTING USER FOR DASHBOARD')
      const user = await getItem('@user')
      console.log('USER GOT')
      console.log('USER FROM DASHBOARD', user)
      user && setName(user.displayName)
    }
    getUser()
  }, [])
  const handleSignOut = () => {
    signOut()
    navigation.navigate('Home')
   }
   return (
     <View style={styles.container}>
        <Text style={styles.text}>Enter your day, {name}!</Text>
        <Text style={styles.questionText}>Did you exercise?</Text>
        <Button title={exercised ? 'Yes' : 'No'} onPress={() => setExercised(!exercised)} />
        <Text style={styles.questionText}>Did you drink?</Text>
        <Button title={drank ? 'Yes' : 'No'} onPress={() => setDrank(!drank)} />
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
   )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionText: {
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    width: "50%",
    fontSize: 16,
  },
})

