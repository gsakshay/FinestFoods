/** @format */

import React, { useContext } from "react"
import styled from "styled-components/native"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

import { FavoritesContext } from "../../services/favorites/FavoritesContext"

const FavouriteButton = styled(TouchableOpacity)`
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 9;
`

export const Favourite = ({ restaurant }) => {
	const { favorites, addFavorite, removeFavorite } =
		useContext(FavoritesContext)
	const isFavorite = favorites.find((f) => f.placeId === restaurant.placeId)

	return (
		<FavouriteButton
			onPress={() =>
				isFavorite ? removeFavorite(restaurant) : addFavorite(restaurant)
			}>
			<AntDesign
				name={isFavorite ? "heart" : "hearto"}
				size={24}
				color={isFavorite ? "red" : "white"}
			/>
		</FavouriteButton>
	)
}
