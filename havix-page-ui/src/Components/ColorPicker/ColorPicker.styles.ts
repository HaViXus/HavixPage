import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

export const StyledColorPickerContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const StyledColorPickerIcon = styled.div<{color: string}>`
	display: flex;
	width: 3rem;
	height: 3rem;
	border: solid 2px ${Colors.darkGray};
	background-color: ${props=>props.color};
	cursor: pointer;
`;

export const StyledPickerContainer = styled.div`
	display: flex;
	position: absolute;
	top: 0;
`;

export const StyledPickerContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;
