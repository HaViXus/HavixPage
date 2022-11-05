export enum GalleryType {
	PixelArt = "PixelArt",
	SpriteSheet = "SpriteSheet",
	Game = "Game"
}

export interface GalleryProps {
	type: GalleryType;
}

export interface PreviewFunctionProps {
	imageName?: string;
	imageURL?: string;
}
