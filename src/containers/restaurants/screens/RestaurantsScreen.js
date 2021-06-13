/** @format */

import React, { useState, useEffect, useContext } from "react"
import { StyleSheet, FlatList, StatusBar, TouchableOpacity } from "react-native"
import { ActivityIndicator, Colors } from "react-native-paper"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"
import styled from "styled-components/native"
import { Search } from "../../../components/Search/SearchComponent"
import { FavoritesBar } from "../../../components/favorites/FavoritesBar"
import { FavoritesContext } from "../../../services/favorites/FavoritesContext"
import { SafeArea } from "../../../components/SafeAreaView"
import { FadeInView } from "../../../components/animations/FadeAnimations"

const LoadingScreen = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`
const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`
const RestaurantsArea = styled(FlatList)`
	padding: ${(props) => props.theme.space[3]};
`

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext)
	const { favorites } = useContext(FavoritesContext)

	const [favoritesToggled, setFavoritesToggled] = useState(false)

	return (
		<SafeArea>
			<Search
				favoritesToggled={favoritesToggled}
				setFavoritesToggled={setFavoritesToggled}
			/>
			{favoritesToggled ? (
				<FavoritesBar
					favorites={favorites}
					onNavigate={navigation.navigate}></FavoritesBar>
			) : null}
			{isLoading ? (
				<LoadingScreen>
					<Loading size='large' animating={true} color={Colors.red400} />
				</LoadingScreen>
			) : (
				<RestaurantsArea
					data={restaurants}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item,
								})
							}>
							<FadeInView>
								<RestaurantsInfoCard restaurant={item} />
							</FadeInView>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.name.toString()}
					contentContainerStyle={{
						flexGrow: 1,
					}}
				/>
			)}
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	listArea: {
		padding: 16,
	},
})
