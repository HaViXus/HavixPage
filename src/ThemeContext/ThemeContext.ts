/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { ThemeElement } from "./ThemeContext.interfaces";

export enum Theme {
    Light = "Light",
    Dark = "Dark"
}

export const ThemeContext = createContext({
	theme: Theme.Dark,
	changeTheme: (theme: Theme) => {},
	getThemeStyle: (element: ThemeElement) => {}
});
