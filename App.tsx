/**
 * @author       julian@zumper.com (Julian Napolitan)
 * @copyright    Copyright (c) 2020
 */

import firebase from 'firebase'
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import keys from './config/keys'
import { DashboardScreen } from './DashboardScreen'
import { HomeScreen } from './HomeScreen'
import { LoadingScreen } from './LoadingScreen'
import { SignInScreen } from './SignInScreen'
import { SignUpScreen } from './SignUpScreen'

const { Navigator, Screen } = createStackNavigator()

export type RootStackParamList = {
  Dashboard: undefined;
  Home: undefined;
  Loading: undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
};

const App = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(keys.firebaseConfig)
	}

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
				<Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
				<Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
				<Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
			</Navigator>
		</NavigationContainer>
	)
}

export default App
