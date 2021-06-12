/** @format */

import { mocks, mockImages } from "./mock"
import camelize from "camelize"

export const restaurantsTransform = ({ results }) => {
	const mappedResults = results.map((restaurant) => {
		restaurant.photos = restaurant.photos.map(
			(p) => mockImages[Math.floor(Math.random() * mockImages.length)]
		)

		return {
			...restaurant,
			address: restaurant.vicinity,
			isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
		}
	})
	return camelize(mappedResults)
}

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location]
		if (!mock) {
			reject("Not found")
		}
		resolve(mock)
	})
}

/* restaurantRequest()
	.then((data) => restaurantsTransform(data))
	.then((data) => console.log(data + "aaa"))
	.catch((error) => console.log(error)) */
