/** @format */

import React, { useEffect } from "react"
import styled from "styled-components/native"
import ImagePicker from "react-native-image-crop-picker"
import { Button } from "react-native-paper"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { colors } from "../../../infrastructure/theme/colors"

const CameraSettings = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const SettingsButton = styled(Button).attrs({
	color: colors.brand.button,
})`
	padding: ${(props) => props.theme.space[2]};
	margin: ${(props) => props.theme.space[2]};
	width: 200px;
`

export const CameraScreen = ({ route, navigation }) => {
	const { user } = route.params
	const openCamera = async () => {
		try {
			const image = await ImagePicker.openCamera({
				width: 300,
				height: 400,
				cropping: true,
			})
			await AsyncStorage.setItem(`${user}-photo`, image.path)
			navigation.goBack()
		} catch (e) {
			console.log(e)
		}
	}

	const openFiles = async () => {
		try {
			const image = await ImagePicker.openPicker({
				width: 300,
				height: 400,
				cropping: true,
			})
			await AsyncStorage.setItem(`${user}-photo`, image.path)
			navigation.goBack()
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<CameraSettings>
			<SettingsButton icon='camera' mode='contained' onPress={openCamera}>
				Open Camera
			</SettingsButton>
			<SettingsButton icon='file-search' mode='contained' onPress={openFiles}>
				Select from files
			</SettingsButton>
			<SettingsButton
				icon='cancel'
				mode='contained'
				onPress={() => navigation.goBack()}>
				Cancel
			</SettingsButton>
		</CameraSettings>
	)
}
