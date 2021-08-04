/** @format */

import React, {
	useState,
	createContext,
	useEffect,
	useContext,
	useMemo,
} from "react"
import {
	restaurantRequest,
	restaurantsTransform,
	restaurantDetails,
} from "./RestaurantService"
import { LocationContext } from "../location/LocationContext"
import camelize from "camelize"

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([])
	const [restaurantDetail, setRestaurantDetail] = useState({})
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

	const retriveRestaurantsDetails = (placeId) => {
		setIsloading(true)
		setError(null)
		// setRestaurants([])
		restaurantDetails(placeId)
			.then((data) => {
				setError(null)
				setIsloading(false)
				return setRestaurantDetail(camelize(data))
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
				restaurantDetail,
				retriveRestaurantsDetails,
			}}>
			{children}
		</RestaurantsContext.Provider>
	)
}
