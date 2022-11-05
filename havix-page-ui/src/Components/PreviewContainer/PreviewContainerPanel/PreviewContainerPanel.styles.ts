import styled, { css } from "styled-components";
import { Colors } from "../../../ThemeContext/ThemeContext.styles";

export const StyledPreviewContainerPanel = styled.div`
	display: flex;
	position: absolute;
	width: 50%;
	height: 100%;
	flex-direction: column;
	background-color: ${Colors.darkGray};
	clip-path: polygon(0 0, 81% 0, 100% 100%, 0% 100%);
	font-family: "PressStart";
	overflow-x: hidden;
    overflow-y: hidden;
	z-index: 1
`;

export const PanelDataContainer = styled.div`
	display: flex;
	width: 100%;
	max-height: 80%;
	flex-grow: 1;
	flex-direction: column;
	user-select: none;
	overflow-y: hidden;
`;

export const TextContainer = css`
	margin: 2% 20% 0% 2%;
	font-size: 1.5rem;
`;

export const TitleContainer = styled.div`
	${TextContainer}
`;

export const CaptionContainer = styled.div`
	${TextContainer}
	overflow-y: auto;
`;

export const StyledText = styled.span`
	color: red;
`;

export const StyledButtonsPanel = styled.div`
	display: flex;
	width: 100%;
	height: 20%;
	margin-left: 2%;
	margin-bottom: 1%;
`;

export const PanelButtonContainer = styled.div`
	display: flex;
	aspect-ratio: 1/1;
	margin-left: 3%;
`;
