/** @format */

import React from "react"
import { Text, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import { AccountScreen } from "../../containers/account/screens/AccountScreen"
import { LoginScreen } from "../../containers/account/screens/LoginScreen"
import { RegisterScreen } from "../../containers/account/screens/RegisterScreen"

const Stack = createStackNavigator()

export const AccountNavigator = () => (
	<Stack.Navigator headerMode='none'>
		<Stack.Screen name='Main' component={AccountScreen} />
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterScreen} />
	</Stack.Navigator>
)
