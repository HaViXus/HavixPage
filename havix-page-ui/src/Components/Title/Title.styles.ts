import styled from "styled-components";

export const StyledTitle = styled.div<{size: number}>`
	display: flex;
	align-items: center;
	font-family: "PressStart";
	font-size: ${props=> props.size || 3}rem;
`;

export const StyledLinkTitle = styled.a<{size: number}>`
	display: flex;
	align-items: center;
	font-family: "PressStart";
	font-size: ${props=> props.size || 3}rem;
	color: inherit;
	text-decoration: none;

	&:hover{
		color: red;
	}
`;