/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020, Zumper
 */

import React, { useState } from 'react'
import { View, Text, TextInput, Alert, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'

import { signIn } from './api/userAuth'
import { RootStackParamList } from './App'


type SignInScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sign In'
>;

type Props = {
  navigation: SignInScreenScreenNavigationProp;
};

export const SignInScreen = ({ navigation }: Props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const resetForm = () => {
		setEmail('')
		setPassword('')
	}

	const handlePress = () => {
		if (!email) {
			Alert.alert('Email is required.')
		} else if (!password) {
			Alert.alert('Password is required.')
		} else {
			signIn(
				email,
				password,
			)
			navigation.navigate('Loading')
			resetForm()
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Sign In</Text>
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
			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<Text style={styles.text}>Sign In</Text>
			</TouchableOpacity>

			<Text style={styles.text}>Don't have an account?</Text>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
				<Text style={styles.text}>Sign Up</Text>
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
	button: {
		height: 40,
		width: '50%',
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

