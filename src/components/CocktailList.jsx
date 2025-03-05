import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return (
			<h4 style={{ textAlign: "center" }}>
				No matching cocktail found...
			</h4>
		);
	}

	const formatedDrinks = drinks.map((drink) => {
		const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
			drink;
		return {
			id: idDrink,
			info: strAlcoholic,
			name: strDrink,
			image: strDrinkThumb,
			glass: strGlass,
		};
	});

	return (
		<Wrapper>
			{formatedDrinks.map((drink) => {
				drink;
				return <CocktailCard key={drink.id} {...drink} />;
			})}
		</Wrapper>
	);
};

export default CocktailList;
