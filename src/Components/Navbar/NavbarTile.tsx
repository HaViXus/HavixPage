import React from "react";
import { NavbarTileProps } from "./Navbar.interfaces";
import { StyledNavbarTile } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { Link } from "react-router-dom";
import { NavbarMenu } from "./NavbarMenu";

export const NavbarTile = (props: NavbarTileProps) => {
	const routerPathToUse = routerPaths[props.id];
	const pathToGo = routerPathToUse.path;
	const tileText = routerPathToUse.nameToDisplay;

	return(
		routerPathToUse.isRoot ? (
			<NavbarMenu id={props.id} 
				selectedTile={props.selectedTile}
				setSelectedTile={props.setSelectedTile}
			/>
		) : (
			<StyledNavbarTile>
				<Link to={pathToGo}> {tileText} </Link>
			</StyledNavbarTile>
		)
	);
};