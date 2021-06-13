/** @format */

import React from "react"
import { SettingsScreen } from "../../containers/Settings/Screens/SettingsScreen"
import { FavoriteScreen } from "../../containers/Settings/Screens/FavoriteScreen"

import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack"

const SettingsStack = createStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
	return (
		<SettingsStack.Navigator
			headerMode='screen'
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}>
			<SettingsStack.Screen
				options={{
					header: () => null,
				}}
				name='Settings'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={FavoriteScreen} />
		</SettingsStack.Navigator>
	)
}
