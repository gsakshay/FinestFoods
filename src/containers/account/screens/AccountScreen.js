/** @format */

import React from "react"

import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	Title,
} from "../components/AccountStyles"

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
			<Title>Finest Foods</Title>
			<AccountContainer>
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate("Login")}>
					Login
				</AuthButton>
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate("Register")}>
					Register
				</AuthButton>
			</AccountContainer>
		</AccountBackground>
	)
}
