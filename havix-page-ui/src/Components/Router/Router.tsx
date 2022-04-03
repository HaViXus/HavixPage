import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerPaths } from "./RouterPaths";


const Router = () => {
	const getRoutes = () => {
		return Object.values(routerPaths).map((routerPathProps) => (
			<Route key={routerPathProps.path} path={routerPathProps.path} element={routerPathProps.pageComponent}/>
		));
	};

	const RouterPaths = getRoutes();

	return(
		<BrowserRouter >
			<Routes>
				{RouterPaths}
			</Routes>
		</BrowserRouter>
	);
};

export default Router; 
