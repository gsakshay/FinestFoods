/** @format */

import React, { useState, useEffect, createContext } from "react"

import { locationRequest, locationTransform } from "./LocationService"
import Geolocation from "react-native-geolocation-service"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("Acharya institutes, Bangalore")
	const [location, setLocation] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const clearError = () => setError(null)

	const onSearch = (searchKeyword) => {
		setIsLoading(true)
		setError(null)
		setKeyword(searchKeyword)
	}

	useEffect(() => {
		if (keyword.length) {
			locationRequest(keyword.toString().toLowerCase())
				.then(locationTransform)
				.then((result) => {
					clearError()
					setIsLoading(false)
					setLocation(result)
				})
				.catch((err) => {
					setIsLoading(false)
					setError(err)
				})
		}
	}, [keyword])

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
				keyword,
			}}>
			{children}
		</LocationContext.Provider>
	)
}
