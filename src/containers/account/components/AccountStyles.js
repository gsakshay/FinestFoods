/** @format */

import React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import styled from "styled-components/native"
import { Button, TextInput } from "react-native-paper"

import { colors } from "../../../infrastructure/theme/colors"
import { Text } from "../../../components/typography/text"

const image = require("../../../../assets/images/background_image.jpg")

export const AccountBackground = ({ children }) => (
	<View style={styles.container}>
		<ImageBackground source={image} style={styles.image} blurRadius={0}>
			{children}
		</ImageBackground>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		alignItems: "center",
	},
})

export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.2);
`
export const AccountContainer = styled.View`
	background-color: rgba(255, 255, 255, 0.7);
	padding: ${(props) => props.theme.space[4]};
	margin-top: ${(props) => props.theme.space[2]};
`

export const AuthButton = styled(Button).attrs({
	color: colors.brand.button,
})`
	padding: ${(props) => props.theme.space[2]};
	margin: ${(props) => props.theme.space[2]};
`

export const AuthInput = styled(TextInput)`
	width: 300px;
	margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[0]};
`
export const Title = styled(Text)`
	font-size: 30px;
	color: ${(props) => props.theme.colors.brand.appTitle};
	background-color: rgba(255, 255, 255, 0);
`
export const ErrorContainer = styled.View`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${(props) => props.theme.space[2]};
	margin-bottom: ${(props) => props.theme.space[2]};
`
export const AnimationWrapper = styled.View`
	width: 100%;
	height: 40%;
	position: absolute;
	top: 30px;
	padding: ${(props) => props.theme.space[2]};
`
