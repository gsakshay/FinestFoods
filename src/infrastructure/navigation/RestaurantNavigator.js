/** @format */

import React from "react"
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack"
import { RestaurantsScreen } from "../../containers/restaurants/screens/RestaurantsScreen"
import { RestaurantDetailsScreen } from "../../containers/restaurants/screens/RestaurantDetailsScreen"
import { Text } from "react-native"

const RestaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
	return (
		<RestaurantStack.Navigator
			headerMode='none'
			screenOptions={{
				...TransitionPresets.ModalPresentationAndroid,
			}}
			mode='modal'>
			<RestaurantStack.Screen
				name='Restaurants'
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name='RestaurantDetail'
				component={RestaurantDetailsScreen}
			/>
		</RestaurantStack.Navigator>
	)
}
