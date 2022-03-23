import React, { useState } from "react";
import { StyledNavbar } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { NavbarTile } from "./NavbarTile";

export const Navbar = () => {
	const [selectedTile, setSelectedTile] = useState<string>();

	const getTiles = () => {
		const routerPathsToDisplay = Object.entries(routerPaths).filter(([, routerPath]) => {
			const isCategoryRoot = routerPath.category && routerPath.isRoot;
			const isNotCategory = !routerPath.category;
			const isPathToDisplay = routerPath.display && (isCategoryRoot || isNotCategory);
			
			return !!isPathToDisplay;
		});
		return routerPathsToDisplay.map(([key]) => (
			<NavbarTile key={key} 
				id={key} 
				selectedTile={selectedTile}
				setSelectedTile={setSelectedTile}
			/>
		));
	};

	const Tiles = getTiles();

	return(
		<StyledNavbar>
			{Tiles}
		</StyledNavbar>
	);
};