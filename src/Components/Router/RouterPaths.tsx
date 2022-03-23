import React from "react";
import { GamesMenuPage } from "../../Pages/GamesMenuPage/GamesMenuPage";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { Dictionary } from "../../Utils/Dictionary";
import { RouterPath } from "./Router.interfaces";

export const routerPaths: Dictionary<RouterPath> = {
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
	SpriteSheets: {
		path: "/Gallery/SpriteSheets",
		nameToDisplay: "Sprite sheets",
		pageComponent: <GamesMenuPage/>,
		display: true,
		category: "Gallery"
	},
	Pictures: {
		path: "/Gallery/Pictures",
		nameToDisplay: "Pictures",
		pageComponent: <GamesMenuPage/>,
		display: true,
		category: "Gallery"
	}
};
