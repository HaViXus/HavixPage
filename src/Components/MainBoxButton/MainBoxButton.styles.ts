import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";


export const MainBoxButtonStyled = styled.div`
	display: flex;
	position: relative;
	height: 100%;
	aspect-ratio: 2 / 1;
	background-color: ${Colors.lightGray};
`;

export const BoxButtonFooter = styled.div`
	display: flex;
	position: absolute;
	height: 28%;
	width: 100%;
	bottom: 0;
	background-color: ${Colors.darkGray};
	font-size: 7vh;
`;