/** @format */

import React, { useState, useContext } from "react"
import { Text } from "../../../components/typography/text"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"

import {
	AccountBackground,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
} from "../components/AccountStyles"

export const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const { onRegister, error } = useContext(AuthenticationContext)

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
				<AuthInput
					label='Confirm Password'
					value={confirmPassword}
					textContentType='password'
					secureTextEntry
					autoCapitalize='none'
					onChangeText={(text) => setConfirmPassword(text)}
				/>
				{error && (
					<ErrorContainer>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => onRegister(email, password, confirmPassword)}>
					Register
				</AuthButton>
			</AccountContainer>
			<AuthButton mode='contained' onPress={() => navigation.goBack()}>
				Back
			</AuthButton>
		</AccountBackground>
	)
}
