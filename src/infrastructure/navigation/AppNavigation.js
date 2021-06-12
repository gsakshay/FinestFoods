/** @format */

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"

import { RestaurantNavigator } from "./RestaurantNavigator"
import { MapScreen } from "../../containers/Maps/screens/MapScreen"
import { SafeArea } from "../../components/SafeAreaView"

const Tab = createBottomTabNavigator()

const TAB_ICON = {
	Restaurants: "restaurant",
	RestaurantsNF: "restaurant-outline",
	Map: "map",
	MapNF: "map-outline",
	Settings: "settings",
	SettingsNF: "settings-outline",
}

const createScreenOptions = ({ focused, route }) => {
	const iconName = focused ? TAB_ICON[route.name] : TAB_ICON[route.name + "NF"]
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	}
}

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
)
/* const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
) */

export const AppNavigator = () => (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === "Restaurants") {
						iconName = focused ? "restaurant" : "restaurant-outline"
					} else if (route.name === "Settings") {
						iconName = focused ? "settings" : "settings-outline"
					} else if (route.name === "Map") {
						iconName = focused ? "map" : "map-outline"
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
			})}
			tabBarOptions={{
				activeTintColor: "tomato",
				inactiveTintColor: "gray",
			}}>
			<Tab.Screen name='Restaurants' component={RestaurantNavigator} />
			<Tab.Screen name='Map' component={MapScreen} />
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	</NavigationContainer>
)
