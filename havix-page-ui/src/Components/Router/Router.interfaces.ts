import React from "react";

export interface RouterPath {
    path: string;
    pageComponent: React.ReactNode;
    nameToDisplay: string;
    display?: boolean;
    category?: string;
    isRoot?: boolean;
}

export enum RouterKeys {
    Home = "Home",
    GamesMenu = "GamesMenu",
    GameDetails = "GameDetails",
	Game="Game",
	Gallery = "Gallery",
	SpriteSheetsMenu = "SpriteSheetsMenu",
	SpriteSheet = "SpriteSheet",
	PixelArts = "PixelArts",
	BoxOfStuff = "BoxOfStuff",
	Contact = "Contact"
}

export type RouterPathsDictionary = {
    [key in RouterKeys]: RouterPath
}
