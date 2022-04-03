import React from "react";
import { NavbarTileProps } from "./Navbar.interfaces";
import { StyledNavbarTile } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { NavbarMenu } from "./NavbarMenu";
import { useNavigate } from "react-router-dom";


export const NavbarTile = (props: NavbarTileProps) => {
	const routerPathToUse = routerPaths[props.id];
	const tileText = routerPathToUse.nameToDisplay;
	const navigation = useNavigate();

	const onTileClick = () => {
		const pathToGo = routerPathToUse.path;
		navigation(pathToGo);
	};

	return(
		routerPathToUse.isRoot ? (
			<NavbarMenu id={props.id} 
				selectedTile={props.selectedTile}
				isLast={props.isLast}
				isSelected={props.isSelected}
			/>
		) : (
			<StyledNavbarTile isLast={props.isLast}
				isSelected={props.isSelected}
				onClick={onTileClick}
			>
				{tileText}
			</StyledNavbarTile>
		)
	);
};