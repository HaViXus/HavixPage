import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

export const StyledListContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	background-color: ${Colors.darkGray};
	user-select: none;
`;

export const StyledListButton = styled.div<{disabled?: boolean}>`
	display: flex;
	height: 100%;
	width: 10%;
	font-size: 7rem;
	justify-content: center;
    align-items: center;
	background-color: ${Colors.gray};
	cursor: pointer;

	&:hover{
		font-size: 8rem;
		background-color: ${Colors.lightGray};
	}

	${props => props.disabled && `
		color: ${Colors.lightGray};
		
		&:hover{
			cursor: default;
			font-size: 7rem;
			background-color: ${Colors.gray};
			color: ${Colors.lightGray};
		}
	`}
`;

export const StyledList = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

export const StyledListImageContainer = styled.div<{selected: boolean}>`
	display: flex;
	flex-grow: 1;
	max-width: 16.6%;
	overflow-x: hidden;
	align-items: center;
	justify-content: center;
	${props => props.selected ? `background-color: ${Colors.lightGray};` : ""}
	cursor: pointer;
	selectable: none;

	&:hover{
		background-color: ${Colors.lightGray};
	}
`;
