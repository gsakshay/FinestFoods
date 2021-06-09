/** @format */

import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native"
import { Searchbar } from "react-native-paper"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"

export const RestaurantsScreen = () => {
	const [searchBar, setSearchBar] = useState("")
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.searchBar}>
				<Searchbar
					placeholder='Search'
					onChangeText={(searchText) => setSearchBar(searchText)}
					value={searchBar}
				/>
			</View>
			<View style={styles.listArea}>
				<RestaurantsInfoCard />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	searchBar: {
		padding: 16,
	},
	listArea: {
		flex: 1,
		padding: 16,
	},
})
