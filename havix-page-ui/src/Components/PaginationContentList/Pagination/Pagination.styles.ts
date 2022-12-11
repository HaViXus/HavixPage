import styled from "styled-components";
import { Colors } from "../../../ThemeContext/ThemeContext.styles";

export const StyledPagination = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledPaginationButton = styled.a<{isSelected?: boolean, isDisabled?: boolean}>`
	display: flex;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1/1;
	width: 48px;
    font-size: 1.4rem;
	padding-top: 4px;
    margin: 3px;
	background-color: ${Colors.lightGray};
	cursor: pointer;
	user-select: none;
	font-family: "PressStart";

	${props => props.isSelected && `
		background-color: red;
	`}

	
	${props => props.isDisabled && `
		color: ${Colors.gray};
		cursor: default;
	`}
`;

export const StyledTooltipContent = styled.div`
	display: flex;
	width: 100%;
`;

export const StyledTooltipInput = styled.input`
	width: 30px;
	margin-right: 5px;
`;

export const StyledTooltipSearch = styled.div<{isDisabled: boolean}>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	${props => props.isDisabled && `
		cursor: default;
		color: ${Colors.gray}
	`}

`;

export const StyledLink = styled.a`
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;

	&:hover{
		color: #ffffff;
		text-decoration: none;
	}
`;

