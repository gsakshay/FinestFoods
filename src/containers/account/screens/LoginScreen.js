/** @format */

import React, { useState, useContext } from "react"
import { ActivityIndicator, Colors } from "react-native-paper"

import { Text } from "../../../components/typography/text"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"
import {
	AccountBackground,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
} from "../components/AccountStyles"

export const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const { onLogin, error, isLoading } = useContext(AuthenticationContext)

	return (
		<AccountBackground>
			<AccountContainer>
				<AuthInput
					label='E-mail'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(text) => setEmail(text)}
				/>
				<AuthInput
					label='Password'
					value={password}
					textContentType='password'
					secureTextEntry
					autoCapitalize='none'
					onChangeText={(text) => setPassword(text)}
				/>
				{error && (
					<ErrorContainer>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
				{isLoading ? (
					<ActivityIndicator animating={true} color={Colors.blue300} />
				) : (
					<AuthButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => onLogin(email, password)}>
						Login
					</AuthButton>
				)}
			</AccountContainer>
			<AuthButton mode='contained' onPress={() => navigation.goBack()}>
				Back
			</AuthButton>
		</AccountBackground>
	)
}
