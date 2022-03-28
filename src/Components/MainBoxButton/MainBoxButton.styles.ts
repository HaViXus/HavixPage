import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

const MainBoXButtonStyleDefault = css`
	background-color: ${Colors.lightGray};
	font-size: 8.5vh;
`;

const MainBoxButtonStyledHover = css`
	font-size: 10vh;
	background: linear-gradient(70deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 36%, rgba(255,255,255,0.2) 100%);
`;

const MainBoxButtonAnimationOnHover = keyframes`
	0% {${MainBoXButtonStyleDefault}}
	100% {${MainBoxButtonStyledHover}}
`;

export const MainBoxButtonStyled = styled.div`
	display: flex;
	position: relative;
	height: 100%;
	aspect-ratio: 2 / 1;
	${MainBoXButtonStyleDefault}
	cursor: pointer;
	
	&:hover{
		animation-name: ${MainBoxButtonAnimationOnHover};
 		animation-duration: 0.08s;	
		animation-fill-mode: forwards;
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
`;

export const BoxButtonTitle = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 80%;
	z-index: 1;
	top: -45%;
	left: 5%;
	user-select: none;

`;
