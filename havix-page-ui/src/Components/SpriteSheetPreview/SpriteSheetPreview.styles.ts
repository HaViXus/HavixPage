import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

export const StyledImagePreviewContainer = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	height: 100%;
	background-color: ${Colors.gray};
	overflow: hidden;
`;

export const StyledImageContainer = styled.div`

	width: 100%;
	height: 100%;
	justify-content: center;
    align-items: center;
	image-rendering: pixelated;
	overflow: auto;
`;

export const StyledImage = styled.img<{zoom: number}>`
	display: flex;
	padding: calc(6% + 25px);
	width: ${props=>`${100 * props.zoom}%`};
	margin: auto;
`;
