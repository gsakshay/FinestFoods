/** @format */

import React from "react"
import { View } from "react-native"
import { Card } from "react-native-paper"
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
import { Favourite } from "../../../components/favorites/FavoriteComponent.js"

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
	const {
		name = "Restaurant Name",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
		],
		address = "Some address of some state and country",
		isOpenNow = true,
		rating = 3,
		isClosedTemporarily = true,
		placeID = "jsejhddknscdjvosdo",
	} = restaurant
	const ratingArray = Array.from(new Array(Math.floor(rating)))
	return (
		<CardSpaced>
			<View>
				<Favourite restaurant={restaurant} />
				<Card.Cover
					key={name}
					source={{
						uri: photos[0],
					}}
				/>
			</View>
			<Card.Content>
				<Info>
					<Text varient='label'>{name}</Text>
					<Rating>
						{ratingArray.map((item, index) => (
							<SvgXml
								key={`${placeID}-${index}`}
								width='20'
								height='20'
								xml={starSvg}
							/>
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
