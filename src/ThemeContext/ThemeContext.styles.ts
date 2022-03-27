import styled from "styled-components";
import { Dictionary } from "../Utils/Dictionary";
import { Theme } from "./ThemeContext";
import { ThemeConfig, ThemeElement } from "./ThemeContext.interfaces";

export const enum Colors {
	lightGray = "#191919",
	gray="#0F0F0F",
	darkGray = "#070707"
}

export const themeStyle: Dictionary<ThemeConfig> = {
	[Theme.Light as string]: {
		pageColor: "white",
		defaultTextColor: "black"
	},
	[Theme.Dark as string]: {
		pageColor: Colors.gray,
		defaultTextColor: "white"
	}
};

export const PageStyle = styled.div<{getThemeStyle: (element: ThemeElement) => string}>`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.getThemeStyle(ThemeElement.pageColor)};
    color: ${(props) => props.getThemeStyle(ThemeElement.defaultTextColor)};
`;