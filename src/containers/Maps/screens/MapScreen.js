/** @format */

import React, { useState, useContext, useEffect } from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"

export const MapScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Package is not working</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		// width: Dimensions.get("window").width,
		height: "100%",
	},
})
