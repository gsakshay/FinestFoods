/** @format */
import { Card } from "react-native-paper"
import styled from "styled-components/native"

export const CardSpaced = styled(Card)`
	margin-bottom: ${(props) => props.theme.space[3]};
`

export const Title = styled.Text`
	color: ${(props) => props.theme.colors.ui.primary};
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSizes.body};
`
export const Info = styled.View`
	padding-top: ${(props) => props.theme.space[3]};
`
export const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`

export const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`

export const RightAligned = styled.View`
	margin-left: auto;
	flex-direction: row;
`

export const WarningText = styled.Text`
	color: ${(props) => props.theme.colors.ui.error};
	padding: 0px 6px;
`

export const IconImage = styled.Image`
	width: 15px;
	height: 15px;
	margin: 0 6px;
`
