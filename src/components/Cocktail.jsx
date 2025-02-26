import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const Cocktail = ({ id, info, name, image, glass }) => {
	return (
		<Wrapper>
			<div className="img-container">
				<img src={image} alt={name} className="img" />
			</div>
			<div className="footer">
				<h4>{name}</h4>
				<h5>{glass}</h5>
				<p>{info}</p>
				<Link to={`cocktail/${id}`} className="btn">
					Detail
				</Link>
			</div>
		</Wrapper>
	);
};

export default Cocktail;
