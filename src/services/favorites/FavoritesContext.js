/** @format */

import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([])

	const storeFavorites = async (favorites) => {
		try {
			const jsonValue = JSON.stringify(favorites)
			await AsyncStorage.setItem("localFavorites", jsonValue)
		} catch (e) {
			console.log(e)
		}
	}

	const getFavorites = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("localFavorites")
			if (jsonValue != null) {
				setFavorites(JSON.parse(jsonValue))
			}
		} catch (e) {
			console.log(e)
		}
	}

	const addFavorite = (restaurant) => {
		setFavorites([...favorites, restaurant])
	}

	const removeFavorite = (restaurant) => {
		const newFavorites = favorites.filter(
			(x) => x.placeId !== restaurant.placeId
		)
		setFavorites(newFavorites)
	}

	useEffect(() => {
		getFavorites()
	}, [])

	useEffect(() => {
		storeFavorites(favorites)
	}, [favorites])
	return (
		<FavoritesContext.Provider
			value={{
				favorites,
				addFavorite,
				removeFavorite,
			}}>
			{children}
		</FavoritesContext.Provider>
	)
}
