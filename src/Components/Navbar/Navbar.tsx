import React from "react";
import { StyledNavbar } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { NavbarTile } from "./NavbarTile";
import { RouterKeys } from "../Router/Router.interfaces";

export const Navbar = () => {
	const path = window.location.pathname;
	const selectedTileEntry = Object.entries(routerPaths).find(([, routerPath]) => routerPath.path === path);
	const selectedTile = selectedTileEntry?.[0] || routerPaths[RouterKeys.Home].path;
	
	const isSelected = (id: string) => id === selectedTile;

	const getTiles = () => {
		const routerPathsToDisplay = Object.entries(routerPaths).filter(([, routerPath]) => {
			const isCategoryRoot = routerPath.category && routerPath.isRoot;
			const isNotCategory = !routerPath.category;
			const isPathToDisplay = routerPath.display && (isCategoryRoot || isNotCategory);
			
			return !!isPathToDisplay;
		});

		const isLast = (index: number) => index === routerPathsToDisplay.length - 1;

		return routerPathsToDisplay.map(([key], index) => (
			<NavbarTile key={key} 
				id={key as RouterKeys} 
				selectedTile={selectedTile}
				isSelected={isSelected(key)}
				isLast={isLast(index)}
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