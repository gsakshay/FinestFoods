/** @format */

import React, {
	useState,
	createContext,
	useEffect,
	useContext,
	useMemo,
} from "react"
import { restaurantRequest, restaurantsTransform } from "./RestaurantService"
import { LocationContext } from "../location/LocationContext"

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([])
	const [isLoading, setIsloading] = useState(false)
	const [error, setError] = useState(null)

	const { location } = useContext(LocationContext)
	const retriveRestaurants = (loc) => {
		setIsloading(true)
		setError(null)
		// setRestaurants([])
		restaurantRequest(loc)
			.then((data) => restaurantsTransform(data))
			.then((data) => {
				setError(null)
				setIsloading(false)
				return setRestaurants(data)
			})
			.catch((error) => {
				setIsloading(false)
				return setError(error)
			})
	}

	useEffect(() => {
		if (location) {
			setRestaurants([])
			retriveRestaurants(`${location.lat},${location.lng}`)
		}
	}, [location])

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}>
			{children}
		</RestaurantsContext.Provider>
	)
}
