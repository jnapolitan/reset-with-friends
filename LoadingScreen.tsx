/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020, Zumper
 */

import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import firebase from 'firebase'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './App'

type LoadingScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Loading'
>;

type Props = {
  navigation: LoadingScreenScreenNavigationProp;
};
 
export const LoadingScreen = ({ navigation }: Props) => {
	useEffect(
		() => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					navigation.replace('Dashboard')
				} else {
					navigation.replace('Home')
				}
			})
		}
	)

	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' />
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

