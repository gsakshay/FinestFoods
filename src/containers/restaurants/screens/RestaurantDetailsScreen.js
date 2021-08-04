/** @format */

import React, { useState, useEffect, useContext } from "react"
import { ScrollView } from "react-native"
import { SafeArea } from "../../../components/SafeAreaView"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"
import { ActivityIndicator, Colors } from "react-native-paper"
import styled from "styled-components/native"
import { List } from "react-native-paper"
import { RestaurantsContext } from "../../../services/restaurants/RestaurantContext"

const RestaurantDetailArea = styled(SafeArea)`
	padding: 0 16px;
`
const LoadingScreen = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`
const Loading = styled(ActivityIndicator)`
	margin-left: -10px;
`

export const RestaurantDetailsScreen = ({ route }) => {
	const { restaurant } = route.params
	const [expandBF, setExpandBF] = useState(false)
	const [expandLunch, setExpandLunch] = useState(false)
	const [expandDinner, setExpandDinner] = useState(false)
	const [expandDrinks, setExpandDrinks] = useState(false)
	const handleBF = () => setExpandBF(!expandBF)
	const handleLunch = () => setExpandLunch(!expandLunch)
	const handleDinner = () => {
		calPrice()
		return setExpandDinner(!expandDinner)
	}
	const handleDrinks = () => setExpandDrinks(!expandDrinks)

	// const [restaurantDetails, setRestaurantDetails] = useState({})
	const [price, setPrice] = useState("Sorry, details are not available")

	const { restaurantDetail, retriveRestaurantsDetails, isLoading } =
		useContext(RestaurantsContext)

	useEffect(() => {
		const placeId = restaurant.placeId
		retriveRestaurantsDetails(placeId)
	}, [restaurant])

	const calPrice = () => {
		if (restaurantDetail?.result?.priceLevel) {
			switch (restaurantDetail?.result?.priceLevel) {
				case 1:
					setPrice("₹300 for two people")
					break
				case 2:
					setPrice("₹600 for two people")
					break
				case 3:
					setPrice("₹1200 for two people")
					break
				case 4:
					setPrice("₹2000 for two people")
					break
			}
		}
	}

	return (
		<RestaurantDetailArea>
			<RestaurantsInfoCard restaurant={restaurant} />
			{isLoading ? (
				<LoadingScreen>
					<Loading size='large' animating={true} color={Colors.red400} />
				</LoadingScreen>
			) : (
				<ScrollView>
					<List.Section>
						{restaurantDetail?.result?.openingHours ? (
							<List.Accordion
								title='Opening hours'
								left={(props) => <List.Icon {...props} icon='clock' />}
								expanded={expandBF}
								onPress={handleBF}>
								{restaurantDetail?.result?.openingHours ? (
									restaurantDetail.result?.openingHours?.weekdayText?.map(
										(day) => <List.Item key={day} title={day} />
									)
								) : (
									<List.Item title='Sorry, details are not available' />
								)}
							</List.Accordion>
						) : null}

						{restaurantDetail?.result?.internationalPhoneNumber ? (
							<List.Accordion
								title='Contact Number'
								left={(props) => <List.Icon {...props} icon='phone' />}
								expanded={expandLunch}
								onPress={handleLunch}>
								{restaurantDetail?.result?.internationalPhoneNumber ? (
									<List.Item
										title={restaurantDetail?.result?.internationalPhoneNumber}
									/>
								) : (
									<List.Item title='Sorry, details are not available' />
								)}
							</List.Accordion>
						) : null}

						{restaurantDetail?.result?.priceLevel ? (
							<List.Accordion
								title='Cost'
								left={(props) => <List.Icon {...props} icon='currency-inr' />}
								expanded={expandDinner}
								onPress={handleDinner}>
								<List.Item title={price} />
							</List.Accordion>
						) : null}

						{restaurantDetail?.result?.reviews ? (
							<List.Accordion
								title='Reviews'
								left={(props) => (
									<List.Icon {...props} icon='account-group-outline' />
								)}
								expanded={expandDrinks}
								onPress={handleDrinks}>
								{restaurantDetail?.result?.reviews ? (
									restaurantDetail.result?.reviews?.map((review) => (
										<List.Item
											key={review.authorName}
											title={`By ${review.authorName}`}
											description={review.text}
										/>
									))
								) : (
									<List.Item title='Sorry, details are not available' />
								)}
							</List.Accordion>
						) : null}
					</List.Section>
				</ScrollView>
			)}
		</RestaurantDetailArea>
	)
}
