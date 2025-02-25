import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Newsletter } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{ path: "/landing", element: <Landing />, index: true },
			{ path: "/about", element: <About/> },
			{ path: "/newsletter", element: <Newsletter/> },
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<div>App</div>
		</>
	);
};

export default App;
