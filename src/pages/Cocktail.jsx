import React from "react";

import { Link, useLoaderData, redirect, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
const singleCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchSingleCocktail = (id) => {
	return {
		queryKey: ["cocktailSearc", id],
		queryFn: async () => {
			const { data } = await axios.get(`${singleCocktailUrl}${id}`);
			console.log(data);
			return data;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
        await queryClient.ensureQueryData(searchSingleCocktail(id))
		return { id };
	};

const Cocktail = () => {
	const { id } = useLoaderData();
	// useQuery(searchSingleCocktail(id));
	const { data: data } = useQuery(searchSingleCocktail(id));
	console.log(data);
	if (!data) {
		return <Navigate to="/" />;
	}
	const singleDrink = data.drinks[0];
	console.log(singleDrink);

	const {
		strAlcoholic: info,
		strDrink: name,
		strDrinkThumb: image,
		strGlass: glass,
		strCategory: category,
		strInstructions: instructions,
	} = singleDrink;

	const validIngredients = Object.keys(singleDrink)
		.filter(
			(key) => key.startsWith("strIngredient") && singleDrink[key] != null
		)
		.map((item) => singleDrink[item]);
	console.log(validIngredients);

	return (
		<Wrapper>
			<header>
				<Link to="/" className="btn">
					Back Home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className="drink">
				<img src={image} alt={name} className="img" />
				<div className="drink-info">
					<p>
						<span className="drink-data">Name: </span>
						{name}
					</p>
					<p>
						<span className="drink-data">Info: </span>
						{info}
					</p>
					<p>
						<span className="drink-data">Category: </span>
						{category}
					</p>
					<p>
						<span className="drink-data">Glass: </span>
						{glass}
					</p>
					<p>
						<span className="drink-data">Ingredients: </span>
						{validIngredients.join(", ")}
					</p>
					<p>
						<span className="drink-data">Instructions: </span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Cocktail;
