import styled from "styled-components";

export const StyledTitle = styled.div<{size: number}>`
	display: flex;
	align-items: center;
	font-family: "PressStart";
	font-size: ${props=> props.size || 3}rem;
`;