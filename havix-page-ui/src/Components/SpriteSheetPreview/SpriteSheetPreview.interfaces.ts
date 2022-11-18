import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";

export interface SpriteSheetPreviewProps {
	imageURL?: string;
	selectedTileData: AnimationTileData;
	hoveredTileData: AnimationTileData;
}

export interface Vector2D<T> {
	x: T;
	y: T;
}

export interface RegionOptions {
	isStart?: boolean;
	isEnd?: boolean;
}

export interface RegionLine {
	start: Vector2D<number>;
	end: Vector2D<number>;
	options: RegionOptions;
}
