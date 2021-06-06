/** @format */

import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native"

const App = () => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.searchBar}>
					<Text>Search</Text>
				</View>
				<View style={styles.listArea}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	searchBar: {
		backgroundColor: "red",
		padding: 16,
	},
	listArea: {
		flex: 1,
		backgroundColor: "green",
		padding: 16,
	},
})

export default App
