/** @format */

import React, { useState, createContext, useEffect, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AuthenticationContext } from "../authentication/AuthenticationContext"

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([])
	const { user } = useContext(AuthenticationContext)

	const storeFavorites = async (favorites, uid) => {
		try {
			const jsonValue = JSON.stringify(favorites)
			await AsyncStorage.setItem(`localFavorites-${uid}`, jsonValue)
		} catch (e) {
			console.log(e.toString())
		}
	}

	const getFavorites = async (uid) => {
		try {
			const jsonValue = await AsyncStorage.getItem(`localFavorites-${uid}`)
			if (jsonValue != null) {
				setFavorites(JSON.parse(jsonValue))
			}
		} catch (e) {
			console.log(e.toString())
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
		if (user && user?.uid) {
			getFavorites(user.uid)
		}
	}, [user])

	useEffect(() => {
		if (user && user?.uid && favorites.length) {
			storeFavorites(favorites, user?.uid)
		}
	}, [favorites, user])
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
