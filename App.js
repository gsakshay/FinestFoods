/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme/index"
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import "react-native-gesture-handler"
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext"
import { Navigation } from "./src/infrastructure/navigation"
import firebase from "firebase/app"

// Optionally import the services that you want to use
//import "firebase/auth"
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
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
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	)
}

export default App
