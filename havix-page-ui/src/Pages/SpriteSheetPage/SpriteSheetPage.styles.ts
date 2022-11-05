import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

export const StyledSpriteSheetPage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	overflow: hidden;
	flex-direction: column;
`;

export const StyledSpriteSheetContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	user-select: none;
	overflow: hidden;
`;

export const StyledAnimationsContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 50%;
	height: 100%;	
	background-color: ${Colors.darkGray};
`;

export const StyledAnimationsContainerData = styled.div`
	display: flex;	
	flex-direction: column;
	width: 90%;
`;

export const StyledAnimationsContainerHeader = styled.div`
	display: flex;	
	flex-direction: row;
	width: 100%;
	height: 5rem;
`;

export const AnimationsContainerSettings = styled.div`
	display: flex;	
	position: relative;
	width: 10%;
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 100%;
	margin: 2% 0 0 3%;
	font-size: 2rem;
	font-family: "PressStart";
	color: white;
	user-select: text;
`;

export const AnimationListContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	overflow-y: auto;
`;
