import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

import errorImage from "../assets/not-found.svg";

const Error = () => {
	const error = useRouteError();

	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img
						src={errorImage}
						alt="page not found"
						className="img"
					/>
					<h3>Ohhh !!!</h3>
					<p>We can't seem to find the page you're looking for</p>
					<Link to="/">Back Home</Link>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div>
				<p></p>
				Something went wrong
			</div>
		</Wrapper>
	);
};

export default Error;
