import styled from "styled-components";

export const StyledImageFullPreviewContainer = styled.div<{isVisible: boolean}>`
	display: ${props => props.isVisible ? "flex" : "none"};
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.9);
	z-index: 1;
	user-select: none;
`;

export const StyledImageFullPreview = styled.div`
	display: flex;
	position: relative;
	width: 95%;
	height: 95%;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled.img`
	display: flex;
	width: 100%;
	height: 100%;
	object-fit: contain;
    image-rendering: pixelated;
`;

export const StyledXMarkIconContainer = styled.div`
	display: flex;
	position: absolute;
	height: 10%;
	aspect-ratio: 1/1;
	top: 1%;
	right: 1%;
	cursor: pointer;

	&:hover svg{
		color: rgba(255,255,255,0.4);
	}
	
	svg{
		color: rgba(200,200,200,0.4);
		height: 100%;
	}
`;

export const StyledArrowIconContainer = styled.div<{left?: number, right?: number}>`
	display: flex;
	position: absolute;
	height: 20%;
	aspect-ratio: 1/1;
	top: 44%;
	${props => props.right ? `right: ${props.right}%;` : ""};
	${props => props.left ? `left: ${props.left}%;` : ""};
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover svg{
		color: rgba(255,255,255,0.4);
	}
	
	svg{
		color: rgba(200,200,200,0.4);
		height: 100%;
	}
`;
