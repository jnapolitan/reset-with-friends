/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020, Zumper
 */

import React, { useState } from 'react'
import { View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import { register } from './api/userAuth'
import { RootStackParamList } from './App'


type SignUpScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sign Up'
>;

type Props = {
  navigation: SignUpScreenScreenNavigationProp;
};

 export const SignUpScreen = ({ navigation }: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handlePress = () => {
    if (!firstName || !lastName) {
      Alert.alert('First and last name are required');
    } else if (!email) {
      Alert.alert('Email is required.');
    } else if (!password) {
      Alert.alert('Password is required.');
    } else if (!confirmPassword) {
      Alert.alert('Confirm password is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
    } else {
      register(
        email,
        password,
        lastName,
        firstName,
      );
      navigation.navigate('Loading');
      resetForm();
    }
  };

  return (
     <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <TextInput
      style={styles.textInput}
      placeholder="First name*"
      value={firstName}
      onChangeText={(name) => setFirstName(name)}
      />
      <TextInput
      style={styles.textInput}
      placeholder="Last name"
      value={lastName}
      onChangeText={(name) => setLastName(name)}
      />
      <TextInput
      style={styles.textInput}
      placeholder="Enter your email*"
      value={email}
      onChangeText={(email) => setEmail(email)}
      keyboardType="email-address"
      autoCapitalize="none"
      />
      <TextInput
      style={styles.textInput}
      placeholder="Enter your password*"
      value={password}
      onChangeText={(password) => setPassword(password)}
      secureTextEntry={true}
      />
      <TextInput
      style={styles.textInput}
      placeholder="Confirm your password*"
      value={confirmPassword}
      onChangeText={(password2) => setConfirmPassword(password2)}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Already have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
     </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: "50%",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  textInput: {
    height: 40,
    width: '80%',
    textAlign: 'center',
  },
})

