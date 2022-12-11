import styled from "styled-components";
import { StandardTextContainer } from "../../Pages/GameDetailsPage/GameDetailsPage.styles";
import { Colors } from "../../ThemeContext/ThemeContext.styles";
import { hoverEffectImageAnimationOnHover } from "../MainBoxButton/MainBoxButton.styles";

export const StyledPageListItem = styled.div`
	display: flex;
	width: 100%;
	min-height: 196px; 
	border: solid 2px ${Colors.darkGray};
	margin: 0.2rem 0;
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	image-rendering: pixelated;
`;
export const StyledImageWrapper = styled.div`
	display: flex;
	width: 348px;
	height: 200px;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const StyledLink = styled.a`
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

export const StyledImageContainer = styled.div`
	display: flex;
	position: relative;
	min-width: 348px;
	width: 348px;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	background-color: ${Colors.darkGray};
	
	&:hover{
		${StyledImage} {
			animation-name: ${hoverEffectImageAnimationOnHover};
			animation-duration: 0.5s;	
			animation-fill-mode: forwards;
		}
	}
`;

export const StyledContentContainer = styled.div`
	display: flex;
	width: calc(96% - 348px);
	flex-direction: column;
	margin: 1% 2%;

	${StandardTextContainer} {
		flex: 1;
		margin-left: 2%;
	}
`;

export const StyledDetailsContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 2.5rem;
	align-items: center;
	font-family: PressStart;
	flex-wrap: wrap;
	font-size: 1rem;
`;

export const DateContainer = styled.div`
	display: flex;
	height: 2rem;
	justify-content: end;
	align-items: center;
	flex-grow: 1;
`;
