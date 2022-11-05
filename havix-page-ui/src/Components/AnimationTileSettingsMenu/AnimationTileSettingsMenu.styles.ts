import styled from "styled-components";
import { Colors } from "../../ThemeContext/ThemeContext.styles";

export const SettingsContainer = styled.div`
	display: flex;
	position: absolute;
	left: -65%;
	flex-direction: column;
	background-color: ${Colors.lightGray};
	width: 300px;
	font-family: "PressStart";
    font-size: 0.8rem;
    padding: 0.2rem;
    z-index: 1;
`;
