/** @format */

import React, { useState } from "react"
import { ScrollView } from "react-native"
import { SafeArea } from "../../../components/SafeAreaView"
import { RestaurantsInfoCard } from "../components/RestaurantsInfoCard"
import styled from "styled-components/native"
import { List } from "react-native-paper"

const RestaurantDetailArea = styled(SafeArea)`
	padding: 0 16px;
`

export const RestaurantDetailsScreen = ({ route }) => {
	const { restaurant } = route.params
	const [expandBF, setExpandBF] = useState(false)
	const [expandLunch, setExpandLunch] = useState(false)
	const [expandDinner, setExpandDinner] = useState(false)
	const [expandDrinks, setExpandDrinks] = useState(false)
	const handleBF = () => setExpandBF(!expandBF)
	const handleLunch = () => setExpandLunch(!expandLunch)
	const handleDinner = () => setExpandDinner(!expandDinner)
	const handleDrinks = () => setExpandDrinks(!expandDrinks)

	return (
		<RestaurantDetailArea>
			<RestaurantsInfoCard restaurant={restaurant} />
			<ScrollView>
				<List.Section>
					<List.Accordion
						title='Breakfast'
						left={(props) => <List.Icon {...props} icon='bread-slice' />}
						expanded={expandBF}
						onPress={handleBF}>
						<List.Item title='Masla Dosa' />
						<List.Item title='Idli vade' />
					</List.Accordion>
					<List.Accordion
						title='Lunch'
						left={(props) => <List.Icon {...props} icon='rice' />}
						expanded={expandLunch}
						onPress={handleLunch}>
						<List.Item title='South Indian Meals' />
						<List.Item title='North Indian Meals' />
					</List.Accordion>
					<List.Accordion
						title='Dinner'
						left={(props) => <List.Icon {...props} icon='food-variant' />}
						expanded={expandDinner}
						onPress={handleDinner}>
						<List.Item title='Hot wood-fired pizzas' />
						<List.Item title='Asian combos' />
					</List.Accordion>
					<List.Accordion
						title='Drinks'
						left={(props) => <List.Icon {...props} icon='glass-flute' />}
						expanded={expandDrinks}
						onPress={handleDrinks}>
						<List.Item title='Chocolate Coffee' />
						<List.Item title='Tropical Mango' />
						<List.Item title='Sea blue' />
					</List.Accordion>
				</List.Section>
			</ScrollView>
		</RestaurantDetailArea>
	)
}
