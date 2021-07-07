/** @format */

import React, { useState, useEffect, createContext } from "react"

import { locationRequest, locationTransform } from "./LocationService"
import Geolocation from "react-native-geolocation-service"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState(
		"Acharya Doctor Sarvepalli Radhakrishnan Rd"
	)
	const [location, setLocation] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")

	const onSearch = (searchKeyword) => {
		setIsLoading(true)
		setError(null)
		setKeyword(searchKeyword)
	}

	/* const getCurrentLocation = async () => {
		Geolocation.getCurrentPosition(
			(pos) => {
				console.log(pos)
			},
			(error) => {
				// See error code charts below.
				console.log(error.code, error.message)
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		)
	}

	useEffect(() => {
		getCurrentLocation()
	}, []) */

	useEffect(() => {
		if (keyword.length) {
			locationRequest(keyword.toString().toLowerCase())
				.then(locationTransform)
				.then((result) => {
					setError(null)
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
