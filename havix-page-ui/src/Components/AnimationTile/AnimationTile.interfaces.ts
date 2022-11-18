import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";

export interface AnimationTileProps {
	imageURL: string;
	tileId: string;
	animationData: AnimationTileData;
	backgroundColor: string;
	animationSpeed: number;
	isSelected?: boolean;
	isHovered?: boolean;
	onTileClick?: (id: string) => void;
	onHoverBegin?: (tileId: string) => void;
	onHoverEnd?: (tileId: string) => void;
}


