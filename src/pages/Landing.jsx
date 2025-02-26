import React from "react";
import { NavBar } from "../components/NavBar";
import  CocktailList  from "../components//CocktailList";

import axios from "axios";
import { useLoaderData } from "react-router-dom";

const searchCocktailUrl = "https://www.thecocktaildb.com/api/json/v1f/1/search.php?s=";

export const loader = async () => {
    const searchTerm = "margarita";
	const response = await axios.get(`${searchCocktailUrl}${searchTerm}`);
	return response;
};

const Landing = () => {
	const {data} = useLoaderData();
    const {drinks}=data
    
	return (
		<>
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Landing;
