import React, { useEffect, useRef } from "react";
import { NavbarTileProps } from "./Navbar.interfaces";
import { StyledNavbarMenu, StyledNavbarMenuTile, StyledNavbarTile } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../Utils/useOutsideClick";

export const NavbarMenu = (props: NavbarTileProps) => {
	const rootPath = routerPaths[props.id];
	const rootMenuTileText = rootPath.nameToDisplay;
	const category = rootPath.category;
	const menuPaths = Object.entries(routerPaths).filter(([, routerPath]) => routerPath.category === category && !routerPath.isRoot);
	const displayTileMenu = props.selectedTile === props.id;
	const menuRef = useRef<HTMLInputElement>(null);

	const hideVisibleTile = () => props.setSelectedTile(undefined);

	useOutsideClick(menuRef, hideVisibleTile);

	const onRootTileClick = () => {
		props.selectedTile === props.id ? hideVisibleTile() : props.setSelectedTile(props.id);
	};

	const getMenuTiles = () => {
		const tiles = menuPaths.map(([pathKey, routerPath]) => {
			return (
				<StyledNavbarMenuTile key={pathKey}>
					<Link to={routerPath.path}> {routerPath.nameToDisplay} </Link> 
				</StyledNavbarMenuTile>
			);
		});

		return tiles;
	};

	const menuTiles = getMenuTiles();

	return(
		<StyledNavbarTile ref={menuRef} onClick={onRootTileClick}>
			{rootMenuTileText} V
			{displayTileMenu === true && 
				<StyledNavbarMenu>
					{menuTiles} 
				</StyledNavbarMenu>
			}
		</StyledNavbarTile>
		
	);
};