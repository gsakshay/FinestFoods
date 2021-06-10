/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { RestaurantsScreen } from "./src/containers/restaurants/screens/RestaurantsScreen"
import { ThemeProvider, View, Text } from "styled-components/native"
import { theme } from "./src/infrastructure/theme/index"
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeArea } from "./src/components/SafeAreaView"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantContext"
import { LocationContextProvider } from "./src/services/location/LocationContext"

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

const App = () => {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	})
	const [latoLoaded] = useLato({
		Lato_400Regular,
	})
	if (!oswaldLoaded || !latoLoaded) {
		return null
	}
	const Tab = createBottomTabNavigator()
	return (
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<NavigationContainer>
					<ThemeProvider theme={theme}>
						<Tab.Navigator
							/* screenOptions={createScreenOptions}
					tabBarOptions={{
						activeTintColor: "tomato",
						inactiveTintColor: "gray",
					}} */
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
							<Tab.Screen name='Restaurants' component={RestaurantsScreen} />
							<Tab.Screen name='Settings' component={RestaurantsScreen} />
							<Tab.Screen name='Map' component={RestaurantsScreen} />
						</Tab.Navigator>
					</ThemeProvider>
					<ExpoStatusBar style='auto' />
				</NavigationContainer>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	)
}

export default App
