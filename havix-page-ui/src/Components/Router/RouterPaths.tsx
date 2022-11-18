import React from "react";
import { GameDetailsPage } from "../../Pages/GameDetailsPage/GameDetailsPage";
import { GamePage } from "../../Pages/GamePage/GamePage";
import { GamesMenuPage } from "../../Pages/GamesMenuPage/GamesMenuPage";
import {HomePage} from "../../Pages/HomePage/HomePage";
import { PixelArtMenuPage } from "../../Pages/PixelArtMenuPage/PixelArtMenuPage";
import { SpriteSheetMenuPage } from "../../Pages/SpriteSheetMenuPage/SpriteSheetMenuPage";
import { SpriteSheetPage } from "../../Pages/SpriteSheetPage/SpriteSheetPage";
import { RouterPathsDictionary } from "./Router.interfaces";


export const routerPaths: RouterPathsDictionary = {
	Home: {
		path: "/",
		nameToDisplay: "Home",
		pageComponent: <HomePage/>,
		display: true
	},
	GamesMenu: {
		path: "/Games",
		nameToDisplay: "Games",
		pageComponent: <GamesMenuPage/>,
		display: true
	},
	GameDetails: {
		path: "/Games/details/:id",
		nameToDisplay: "Game details",
		pageComponent: <GameDetailsPage/>
	},
	Game: {
		path: "/Games/:id",
		nameToDisplay: "Game",
		pageComponent: <GamePage/>
	},
	Gallery: {
		path: "/Gallery",
		nameToDisplay: "Gallery",
		pageComponent: <GamesMenuPage/>,
		display: true,
		category: "Gallery",
		isRoot: true
	},
	SpriteSheetsMenu: {
		path: "/Gallery/SpriteSheets",
		nameToDisplay: "Sprite sheets",
		pageComponent: <SpriteSheetMenuPage/>,
		display: true,
		category: "Gallery"
	},
	SpriteSheet: {
		path: "/Gallery/SpriteSheets/:id",
		nameToDisplay: "Sprite sheet",
		pageComponent: <SpriteSheetPage/>
	},
	PixelArts: {
		path: "/Gallery/PixelArts",
		nameToDisplay: "Pixel arts",
		pageComponent: <PixelArtMenuPage/>,
		display: true,
		category: "Gallery"
	},
	BoxOfStuff: {
		path: "/BoxOfStuff",
		nameToDisplay: "Box of stuff",
		pageComponent: <GamesMenuPage/>,
		display: true
	},
	Contact: {
		path: "/Contact",
		nameToDisplay: "Contact",
		pageComponent: <GamesMenuPage/>,
		display: true
	}
};
