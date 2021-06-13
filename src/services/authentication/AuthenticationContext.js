/** @format */

import React, { useState, createContext, useEffect } from "react"
import { loginRequest } from "./AuthenticationService"
import * as firebase from "firebase"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
	const [user, setUser] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const onLogin = async (email, password) => {
		setIsLoading(true)
		try {
			const user = await loginRequest(email, password)
			setUser(user)
			setIsLoading(false)
		} catch (e) {
			setError(e.toString())
			setIsLoading(false)
		}
	}

	const onRegister = async (email, password, confirmPassword) => {
		if (password !== confirmPassword) {
			setError("Error: Passwords do not match")
			setIsLoading(false)
		} else {
			try {
				const user = await firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
				setUser(user)
				setIsLoading(false)
			} catch (e) {
				setError(e.toString())
				setIsLoading(false)
			}
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
			}}>
			{children}
		</AuthenticationContext.Provider>
	)
}
