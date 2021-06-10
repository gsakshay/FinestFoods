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
		// setRestaurants([])
		setTimeout(() => {
			restaurantRequest(loc)
				.then((data) => restaurantsTransform(data))
				.then((data) => setRestaurants(data))
				.catch((error) => setError(error))
			setIsloading(false)
		}, 1000)
	}

	useEffect(() => {
		if (location) {
			console.log("Okay, Third step")
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
