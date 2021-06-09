/** @format */

import React from "react"
import { Image } from "react-native"
import { Card } from "react-native-paper"
import styled from "styled-components/native"
import starSvg from "../../../../assets/svg/star.js"
import openSvg from "../../../../assets/svg/open.js"
import { SvgXml } from "react-native-svg"
import { Text } from "../../../components/typography/text"
import {
	Info,
	Address,
	Rating,
	RightAligned,
	WarningText,
	IconImage,
	CardSpaced,
} from "./RestaurantsInfoCardStyles"

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Restaurant Name",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg",
		],
		address = "Some address of some state and country",
		isOpenNow = true,
		rating = 3,
		isClosedTemporarily = true,
	} = restaurant
	const ratingArray = Array.from(new Array(Math.floor(rating)))
	return (
		<CardSpaced>
			<Card.Cover key={name} source={{ uri: photos[0] }} />
			<Card.Content>
				<Info>
					<Text varient='label'>{name}</Text>
					<Rating>
						{ratingArray.map((item, index) => (
							<SvgXml key={index} width='20' height='20' xml={starSvg} />
						))}
						<RightAligned>
							{isClosedTemporarily ? (
								<WarningText varient='error'>CLOSED TEMPORARILY</WarningText>
							) : null}
							{isOpenNow ? (
								<SvgXml width='20' height='20' xml={openSvg} />
							) : null}
							<IconImage source={{ uri: icon }} />
						</RightAligned>
					</Rating>
					<Address>{address}</Address>
				</Info>
			</Card.Content>
		</CardSpaced>
	)
}
