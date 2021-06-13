/** @format */

import React from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components/native"
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurant"

const FavouritesWrapper = styled.View`
	padding: 16px;
`

export const FavoritesBar = ({ favorites, onNavigate }) => {
	return (
		<FavouritesWrapper>
			<View>
				<Text variant='caption'>Favourites</Text>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favorites.map((restaurant) => {
					const key = restaurant.name
					return (
						<TouchableOpacity
							key={key}
							onPress={() =>
								onNavigate("RestaurantDetail", {
									restaurant,
								})
							}>
							<CompactRestaurantInfo restaurant={restaurant} />
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</FavouritesWrapper>
	)
}
