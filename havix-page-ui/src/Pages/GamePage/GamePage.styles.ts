import styled from "styled-components";

const DEFAULT_ASPECT_RATIO = "16/9";

export const StyledGamePage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
`;

export const GameWindow = styled.iframe<{aspectRatio: string}>`
	width: 70%;
	aspect-ratio: ${props=>props.aspectRatio || DEFAULT_ASPECT_RATIO};
	border: none;
`;
