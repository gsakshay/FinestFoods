/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { ThemeProvider, View, Text } from "styled-components/native"
import { theme } from "./src/infrastructure/theme/index"
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import "react-native-gesture-handler"
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantContext"
import { LocationContextProvider } from "./src/services/location/LocationContext"
import { FavoritesContextProvider } from "./src/services/favorites/FavoritesContext"
import { Navigation } from "./src/infrastructure/navigation"

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
	return (
		<>
			<ThemeProvider theme={theme}>
				<FavoritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavoritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	)
}

export default App
