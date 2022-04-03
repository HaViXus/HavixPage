import React, { useState } from "react";
import { ThemeContext, Theme} from "./ThemeContext";
import { ThemeElement } from "./ThemeContext.interfaces";
import { PageStyle, themeStyle } from "./ThemeContext.styles";

export const ThemeContextWrapper: React.FC = (props) => {
	const [theme, setTheme] = useState(Theme.Dark);

	const changeTheme = (theme: Theme) => {
		setTheme(theme);
	};

	const getThemeStyle = (property: ThemeElement) => themeStyle[theme]?.[property];

	return (
		<ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme, getThemeStyle: getThemeStyle }}>
			<PageStyle getThemeStyle={getThemeStyle}>
				{props.children}
			</PageStyle>
		</ThemeContext.Provider>
	);
};
