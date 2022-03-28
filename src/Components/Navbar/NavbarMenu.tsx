import React, { useRef, useState } from "react";
import { NavbarTileProps } from "./Navbar.interfaces";
import { StyledNavbarMenu, StyledNavbarMenuTile, StyledNavbarTile } from "./Navbar.styles";
import { routerPaths } from "../Router/RouterPaths";
import { useOutsideClick } from "../../Utils/useOutsideClick";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "../Router/Router.interfaces";

export const NavbarMenu = (props: NavbarTileProps) => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const rootPath = routerPaths[props.id];
	const rootMenuTileText = rootPath.nameToDisplay;
	const category = rootPath.category;
	const menuPaths = Object.entries(routerPaths).filter(([, routerPath]) => routerPath.category === category && !routerPath.isRoot);
	const menuRef = useRef<HTMLInputElement>(null);
	const navigation = useNavigate();

	const hideVisibleTile = () => setIsMenuVisible(false);

	useOutsideClick(menuRef, hideVisibleTile);

	const onRootTileClick = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	const isMenuTileSelected = (id: RouterKeys) => {
		const path = window.location.pathname;
		const isSelected = !!menuPaths.find(([key, routerPath]) => id === key && routerPath.path === path);
		return isSelected;
	};

	const getMenuTiles = () => {
		const tiles = menuPaths.map(([pathKey, routerPath], index) => {
			const onMenuTileClick = () => {
				const pathToGo = routerPath.path;
				navigation(pathToGo);
			};

			const isLast = index === menuPaths.length - 1;

			return (
				<StyledNavbarMenuTile key={pathKey}
					onClick={onMenuTileClick}
					isSelected={isMenuTileSelected(pathKey as RouterKeys)}
					isLast={isLast}
				>
					{routerPath.nameToDisplay}
				</StyledNavbarMenuTile>
			);
		});

		return tiles;
	};

	return(
		<StyledNavbarTile ref={menuRef}
			onClick={onRootTileClick}
			isSelected={props.isSelected}
			isLast={props.isLast}
		>
			{rootMenuTileText} V
			{isMenuVisible === true && 
				<StyledNavbarMenu>
					{getMenuTiles()} 
				</StyledNavbarMenu>
			}
		</StyledNavbarTile>
		
	);
};