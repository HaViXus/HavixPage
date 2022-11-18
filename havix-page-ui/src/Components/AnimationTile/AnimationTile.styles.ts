import styled from "styled-components";
import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";

const getBorder = (isSelected: boolean, isHovered: boolean) => {
	if(isSelected || isHovered) {
		const borderColor = isHovered ? "blue" : "red";
		return `border: solid 3px ${borderColor};`;
	}
};

export const StyledAnimationTile = styled.div<{isSelected: boolean, isHovered: boolean, height?: number}>`
	display: flex;
	position: relative;
	width: 45%;
	margin: 2.5%;
	height: ${props=>props.height}px;
	aspect-ratio: 1/1;
	cursor: pointer;

	${props=>(props.isSelected || props.isHovered) && `
		width: calc(45% - 6px);
		${getBorder(props.isSelected, props.isHovered)}
	`}
`;

export const TileImage = styled.canvas<{imageURL: string, animationData: AnimationTileData}>`
	display: flex;
	width: 100%;
	height: 100%;
	image-rendering: pixelated;
`;
