import React from "react";
import  CocktailList  from "../components//CocktailList";
import SearchForm from "../components/SearchForm"

import axios from "axios";
import { useLoaderData } from "react-router-dom";

const searchCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({request}) => {

    const url= new URL (request.url)
    const searchTerm = url.searchParams.get("search") || "a";
	const {data} = await axios.get(`${searchCocktailUrl}${searchTerm}`);
	return {data, searchTerm};
};

const Landing = () => {
	const {data,searchTerm} = useLoaderData();
    const {drinks}=data
    
	return (
		<>
            <SearchForm searchTerm={searchTerm}/>
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Landing;
