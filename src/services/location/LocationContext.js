/** @format */

import React, { useState, useEffect, createContext } from "react"

import { locationRequest, locationTransform } from "./LocationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("antwerp")
	const [location, setLocation] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState("")

	const onSearch = (searchKeyword) => {
		setIsLoading(true)
		setKeyword(searchKeyword)
	}

	useEffect(() => {
		if (keyword.length) {
			locationRequest(keyword.toString().toLowerCase())
				.then(locationTransform)
				.then((result) => {
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
