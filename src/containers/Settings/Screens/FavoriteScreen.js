/** @format */

import React, { useContext } from "react"
import { FlatList, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

import { FavoritesContext } from "../../../services/favorites/FavoritesContext"
import { RestaurantsInfoCard } from "../../restaurants/components/RestaurantsInfoCard"
import { Text } from "../../../components/typography/text"

const FavoritesArea = styled.View`
	padding: ${(props) => props.theme.space[3]};
`

const NoFavoritesArea = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const FavoriteScreen = ({ navigation }) => {
	const { favorites } = useContext(FavoritesContext)
	return favorites.length ? (
		<FavoritesArea>
			<FlatList
				data={favorites}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("RestaurantDetail", {
								restaurant: item,
							})
						}>
						<RestaurantsInfoCard restaurant={item} />
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.name.toString()}
				contentContainerStyle={{
					flexGrow: 1,
				}}
			/>
		</FavoritesArea>
	) : (
		<NoFavoritesArea>
			<Text>Add some favourites to view here!!</Text>
		</NoFavoritesArea>
	)
}
