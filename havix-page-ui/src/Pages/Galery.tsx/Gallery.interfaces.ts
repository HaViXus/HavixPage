export enum GalleryType {
	PixelArt = "PixelArt",
	SpriteSheet = "SpriteSheet",
	Game = "Game"
}

export interface GalleryProps {
	type: GalleryType;
}
