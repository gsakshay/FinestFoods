/** @format */

import React, { useState, useEffect, useContext } from "react"
import {
	StyleSheet,
	FlatList,
	View,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
} from "react-native"
import { ActivityIndicator, Colors } from "react-native-paper"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"
import styled from "styled-components/native"
import { Search } from "../../../components/Search/SearchComponent"
import { LocationContext } from "../../../services/location/LocationContext"
import { FavoritesBar } from "../../../components/favorites/FavoritesBar"
import { FavoritesContext } from "../../../services/favorites/FavoritesContext"

const LoadingScreen = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`
const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext)
	const { location } = useContext(LocationContext)

	const { favorites } = useContext(FavoritesContext)

	const [favoritesToggled, setFavoritesToggled] = useState(false)

	return (
		<SafeAreaView style={styles.container}>
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
				<View style={styles.listArea}>
					<FlatList
						data={restaurants}
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
				</View>
			)}
		</SafeAreaView>
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
