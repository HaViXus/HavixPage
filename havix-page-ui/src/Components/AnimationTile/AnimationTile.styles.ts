import styled from "styled-components";
import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";


export const StyledAnimationTile = styled.div<{height?: number}>`
	display: flex;
	position: relative;
	width: 45%;
	margin: 2.5%;
	height: ${props=>props.height}px;
	aspect-ratio: 1/1;
`;

export const TileImage = styled.canvas<{imageURL: string, animationData: AnimationTileData}>`
	display: flex;
	width: 100%;
	height: 100%;
	image-rendering: pixelated;
`;
