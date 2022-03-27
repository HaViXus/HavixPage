import React from "react";
import { GamesMenuPage } from "../../Pages/GamesMenuPage/GamesMenuPage";
import { HomePage } from "../../Pages/HomePage/HomePage";
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
	Game: {
		path: "/Games/:id",
		nameToDisplay: "Game",
		pageComponent: <GamesMenuPage/>,
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
		pageComponent: <GamesMenuPage/>,
		display: true,
		category: "Gallery"
	},
	SpriteSheet: {
		path: "/Gallery/SpriteSheets/:id",
		nameToDisplay: "Sprite sheet",
		pageComponent: <GamesMenuPage/>,
	},
	PixelArts: {
		path: "/Gallery/PixelArts",
		nameToDisplay: "Pixel arts",
		pageComponent: <GamesMenuPage/>,
		display: true,
		category: "Gallery"
	},
	BoxOfStuff: {
		path: "/BoxOfStuff",
		nameToDisplay: "Box of stuff",
		pageComponent: <GamesMenuPage/>,
		display: true,
	},
	Contact: {
		path: "/Contact",
		nameToDisplay: "Contact",
		pageComponent: <GamesMenuPage/>,
		display: true,
	}
};
