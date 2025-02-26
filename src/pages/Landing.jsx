import React from "react";
import CocktailList from "../components//CocktailList";
import SearchForm from "../components/SearchForm";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useLoaderData } from "react-router-dom";

const searchCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const searchCocktailList = (searchTerm) => {
	return {
		queryKey: ["search", searchTerm || "all"],
		queryFn: async () => {
			// searchTerm = searchTerm || "a";
			const { data } = await axios.get(
				`${searchCocktailUrl}${searchTerm}`
			);
			console.log(data.drinks);
			return data.drinks;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		const url = new URL(request.url);
		const searchTerm = url.searchParams.get("search") || "a";
		await queryClient.ensureQueryData(searchCocktailList(searchTerm));
		return { searchTerm };
	};

const Landing = () => {
	const { searchTerm } = useLoaderData();
	const { data: drinks } = useQuery(searchCocktailList(searchTerm));


	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Landing;
