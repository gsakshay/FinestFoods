/** @format */

import React, { useState, useEffect, useContext } from "react"
import {
	StyleSheet,
	FlatList,
	View,
	SafeAreaView,
	StatusBar,
} from "react-native"
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"
import styled from "styled-components/native"
import { Search } from "../../../components/Search/SearchComponent"
import { LocationContext } from "../../../services/location/LocationContext"

const LoadingScreen = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`
const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`

export const RestaurantsScreen = () => {
	const { restaurants, isLoading, error } = useContext(RestaurantsContext)
	const { location } = useContext(LocationContext)

	return (
		<SafeAreaView style={styles.container}>
			<Search />
			{isLoading ? (
				<LoadingScreen>
					<Loading size='large' animating={true} color={Colors.red400} />
				</LoadingScreen>
			) : (
				<View style={styles.listArea}>
					<FlatList
						data={restaurants}
						renderItem={({ item }) => {
							return <RestaurantsInfoCard restaurant={item} />
						}}
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
