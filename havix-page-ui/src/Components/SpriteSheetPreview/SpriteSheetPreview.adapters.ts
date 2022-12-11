import axios from "axios";
import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";

export const getSpriteSheetAnimations = (imagePath: string, setAnimationsData: (animationsData: AnimationTileData[]) => void) => {
	axios.get(`/spriteSheets?path=${imagePath}`).then((response => {
		const animationsData = response.data;
		setAnimationsData(animationsData);
	}));
};