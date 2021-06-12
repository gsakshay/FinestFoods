/** @format */

import React from "react"
import styled from "styled-components/native"
import WebView from "react-native-webview"
import { Platform } from "react-native"

import { Text } from "../typography/text"

const CompactImage = styled.Image`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`

const CompactWebview = styled(WebView)`
	border-radius: 10px;
	width: 200%;
	height: 100px;
`

const Item = styled.View`
	padding: 10px;
	max-width: 120px;
	align-items: center;
	margin: 0 6px;
`

const isAndroid = Platform.OS === "android"

export const CompactRestaurantInfo = ({ restaurant }) => {
	// const Image = isAndroid ? CompactWebview : CompactImage
	const Image = CompactImage

	return (
		<Item>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Text center variant='caption' numberOfLines={3}>
				{restaurant.name}
			</Text>
		</Item>
	)
}
