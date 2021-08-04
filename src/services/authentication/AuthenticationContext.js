/** @format */

import React, { useState, createContext, useEffect } from "react"
import { loginRequest } from "./AuthenticationService"
import * as firebase from "firebase"
import RNBootSplash from "react-native-bootsplash"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
	const [user, setUser] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const clearError = () => setError(null)

	firebase.auth().onAuthStateChanged((usr) => {
		setTimeout(() => {
			RNBootSplash.hide() // immediate
		}, 2000)
		if (usr) {
			setUser(usr)
			clearError()
			setIsLoading(false)
		} else {
			setIsLoading(false)
		}
	})

	const onLogin = async (email, password) => {
		setIsLoading(true)
		try {
			const user = await loginRequest(email, password)
			if (user) {
				setUser(user)
				setIsLoading(false)
				clearError()
			}
		} catch (e) {
			setError(e.toString())
			setIsLoading(false)
		}
	}

	const onRegister = async (email, password, confirmPassword) => {
		setIsLoading(true)
		if (password !== confirmPassword) {
			setError("Error: Passwords do not match")
			setIsLoading(false)
		} else {
			try {
				const user = await firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
				setUser(user)
				clearError()
				setIsLoading(false)
			} catch (e) {
				setError(e.toString())
				setIsLoading(false)
			}
		}
	}

	const onLogout = async () => {
		try {
			const user = await firebase.auth().signOut()
			setUser(user)
			clearError()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<AuthenticationContext.Provider
			value={{
				user,
				error,
				isLoading,
				onLogin,
				isAuthenticated: !!user,
				onRegister,
				onLogout,
				clearError,
			}}>
			{children}
		</AuthenticationContext.Provider>
	)
}
