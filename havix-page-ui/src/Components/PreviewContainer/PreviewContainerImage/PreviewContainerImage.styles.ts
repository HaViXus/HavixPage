import styled from "styled-components";
import { Colors } from "../../../ThemeContext/ThemeContext.styles";

export const StyledPreviewContainerImage = styled.div<{withoutPanel: boolean}>`
	display: flex;
	position: relative;
	width: 100%;
	${props=> !props.withoutPanel && "margin-left: 40%;"}
	height: 100%;
	background-color: ${Colors.gray};
	justify-content: center;
	user-select: none;
`;

export const StyledImage = styled.img`
	display: flex;
	height: 100%;
	width: 100%;
	object-fit: contain;
	cursor: pointer;

`;

export const StyledImageContainer = styled.div`
	display: flex;
	max-width: 77%;
	image-rendering: pixelated;
	user-select: none;

	&:hover{
		background-color: rgba(255,255,255,0.1);
		${StyledImage}{
			mix-blend-mode: exclusion;
		}
	}
`;

export const StyledMediaPlayerContainer = styled.iframe`
	display: flex;
	width: 100%;
	height: 100%;
	aspect-ratio: 650/315;
	border: none;
`;