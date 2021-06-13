/** @format */

import React, { useState, useContext, useEffect } from "react"
import { Text } from "react-native"
import styled from "styled-components/native"
import { List, Avatar } from "react-native-paper"

import { SafeArea } from "../../../components/SafeAreaView"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"

const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`

const AvatarContainer = styled.View`
	align-items: center;
`

const UserAvatar = styled(Avatar.Icon)`
	margin: ${(props) => props.theme.space[3]};
`

export const SettingsScreen = ({ navigation }) => {
	const { onLogout, user } = useContext(AuthenticationContext)
	return (
		<SafeArea>
			<AvatarContainer>
				<UserAvatar size={150} icon='human' backgroundColor='#2182BD' />
				<Text variant='label'>{user.email}</Text>
			</AvatarContainer>
			<List.Section>
				<SettingsItem
					title='Favourites'
					description='View your favourites'
					left={(props) => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate("Favourites")}
				/>
				<SettingsItem
					title='Logout'
					left={(props) => <List.Icon {...props} color='black' icon='door' />}
					onPress={onLogout}
				/>
			</List.Section>
		</SafeArea>
	)
}
