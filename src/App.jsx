import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Newsletter, Error } from "./pages";

import { loader as searchCocktailLit } from "./pages/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ element: <Landing />, index: true, loader: searchCocktailLit },
			{ path: "about", element: <About /> },
			{ path: "newsletter", element: <Newsletter /> },
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
