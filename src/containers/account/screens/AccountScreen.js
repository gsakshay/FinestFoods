/** @format **/

import React from "react"

import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	Title,
	AnimationWrapper,
} from "../components/AccountStyles"
// import LottieView from "lottie-react-native"

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				{/* <LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require("../../../../assets/json/watermelon.json")}
				/> */}
			</AnimationWrapper>
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
