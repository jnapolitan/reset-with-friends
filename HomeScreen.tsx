/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020
 */

import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from './App'

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.container}>
			<Text>Welcome to Reset with Friends!</Text>
			<Button
				title="Sign In"
				onPress={() =>
					navigation.navigate('Sign In')
				}
			/>
			<Button
				title="Sign Up"
				onPress={() =>
					navigation.navigate('Sign Up')
				}
			/>
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
})

