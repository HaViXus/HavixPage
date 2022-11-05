export interface SpriteSheetPageProps {
	imageURL?: string;
	imageName?: string;
}

export interface AnimationTileData {
	x: number;
	y: number;
	height: number;
	width: number;
	frames: number;
	number: number;
	path: string;
}

export interface SettingsProps {
	backgroundColor: string;
	setBackgroundColor: (backgroundColor: string) => void;
	animationSpeed: number;
	setAnimationSpeed: (animationSpeed: number) => void;
}
