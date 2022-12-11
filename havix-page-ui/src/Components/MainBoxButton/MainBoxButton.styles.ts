import styled, { keyframes } from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";


const getBackgroundColor = (backgroundColor: string) => backgroundColor ? `rgb(${backgroundColor})` : Colors.darkGray;

const mainBoxButtonAnimationOnHover = keyframes`
	0% {}
	100% {
		font-size: 10vh;
	}
`;

const hoverEffectContainerAnimationOnHover = keyframes`
	0%{}
	100%{
		background: linear-gradient(70deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.02) 36%, rgba(255,255,255,0.02) 100%);
	}
`;

export const hoverEffectImageAnimationOnHover = keyframes`
	0%{}
	100%{
		width: 110%;
		height: 110%;
	}
`;

export const HoverEffectContainer = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const StyledImage = styled.img<{isLoaded: boolean, isBlurred: boolean}>`
	display: ${props => props.isLoaded ? "flex" : "none"};
	width: 100%;
	height: 100%;
	image-rendering: pixelated;
	object-fit: cover;
	user-select: none;
	${props => props.isBlurred ? "filter: blur(8px)" : ""};
`;

export const MainBoxButtonStyled = styled.div<{meanImageColor: string}>`
	display: flex;
	position: relative;
	height: 100%;
	aspect-ratio: 2 / 1;
	align-items: center;
	justify-content: center;
	font-size: 8.5vh;
	cursor: pointer;
	overflow: hidden;
	background-color: ${props => getBackgroundColor(props.meanImageColor)};

	&:hover{
		animation-name: ${mainBoxButtonAnimationOnHover};
		animation-duration: 0.08s;	
		animation-fill-mode: forwards;	

		${HoverEffectContainer}{
			animation-name: ${hoverEffectContainerAnimationOnHover};
			animation-duration: 0.08s;	
			animation-fill-mode: forwards;
		}

		${StyledImage}{
			animation-name: ${hoverEffectImageAnimationOnHover};
			animation-duration: 0.5s;	
			animation-fill-mode: forwards;
		}
	}
`;

export const BoxButtonFooter = styled.div`
	display: flex;
	position: absolute;
	height: 28%;
	width: 100%;
	bottom: 0;
`;

export const BoxFooterBackground = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color:${Colors.darkGray};
	clip-path: polygon(0 0, 100% 55%, 100% 100%, 0% 100%);
	z-index: 0;
`;

export const BoxButtonTitle = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 80%;
	z-index: 2;
	top: -45%;
	left: 5%;
	user-select: none;

`;
