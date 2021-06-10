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
		console.log("Okay, First step")
		if (!searchKeyword.length) {
			setIsLoading(false)
			setError("No input")
		}
		// console.log(searchKeyword, "location in eng")
		setIsLoading(true)
		setKeyword(searchKeyword)
		locationRequest(searchKeyword)
			.then(locationTransform)
			.then((result) => {
				setIsLoading(false)
				setLocation(result)
				console.log("Okay, Second step")

				// console.log(result, "loc in geography")
			})
			.catch((err) => {
				setIsLoading(false)
				setError(err)
			})
	}

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
