/** @format */

import React, { useState, useContext, useEffect } from "react"
import { Searchbar } from "react-native-paper"
import styled from "styled-components/native"
import { LocationContext } from "../../services/location/LocationContext"

const SearchComponent = styled.View`
	padding: 16px;
`

export const Search = () => {
	const { search, keyword } = useContext(LocationContext)
	const [searchBar, setSearchBar] = useState(keyword)

	return (
		<SearchComponent>
			<Searchbar
				placeholder='location'
				onChangeText={(searchText) => setSearchBar(searchText)}
				value={searchBar}
				onSubmitEditing={() => {
					search(searchBar)
				}}
			/>
		</SearchComponent>
	)
}
