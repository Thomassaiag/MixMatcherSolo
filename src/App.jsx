import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Newsletter } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
        children:[

            { element: <Landing />, index: true },
            { path: "about", element: <About/> },
            { path: "newsletter", element: <Newsletter/> },
        ]

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
