import styled from "styled-components";
import { ComponentColor } from "./IconButton.interfaces";

export const StyledIconButton = styled.button<{backgroundColor: ComponentColor, iconColor: ComponentColor}>`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1 / 1;

	${(props) => props.backgroundColor ? `background-color: ${props.backgroundColor[0]};` : ""}
	cursor: pointer;

	svg{
		height: 85%;
		${(props) => props.iconColor ? `color: ${props.iconColor[0]};` : ""}
	}

	&:hover{
		${(props) => props.backgroundColor ? `background-color: ${props.backgroundColor[1]};` : ""}
		svg{
			${(props) => props.iconColor ? `color: ${props.iconColor[1]};` : ""}
		}	
	}
`;