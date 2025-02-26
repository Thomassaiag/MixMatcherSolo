import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Newsletter, Error } from "./pages";

import { loader as searchCocktailLit } from "./pages/Landing";
import { action as newsLetterAction } from "./pages/Newsletter";
import SingleErrorPage from "./pages/SingleErrorPage";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				element: <Landing />,
				index: true,
				loader: searchCocktailLit,
				errorElement: <SingleErrorPage />,
			},
			{ path: "about", element: <About /> },
			{
				path: "newsletter",
				element: <Newsletter />,
				action: newsLetterAction,
			},
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
