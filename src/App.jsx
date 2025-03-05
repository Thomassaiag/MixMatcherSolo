import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	HomeLayout,
	Landing,
	About,
	Newsletter,
	Error,
	Cocktail,
	SingleErrorPage,
} from "./pages";

import { loader as cocktailListLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				element: <Landing />,
				index: true,
				loader: cocktailListLoader(queryClient),
				errorElement: <SingleErrorPage />,
			},
			{ path: "about", element: <About /> },
			{
				path: "newsletter",
				element: <Newsletter />,
				action: newsLetterAction,
			},
			{
				path: "cocktail/:id",
				element: <Cocktail />,
				loader: singleCocktailLoader(queryClient),
				errorElement: <SingleErrorPage />,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
};

export default App;
