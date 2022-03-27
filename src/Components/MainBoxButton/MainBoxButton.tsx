import React from "react";
import { MainBoxButtonProps } from "./MainBoxButton.interfaces";
import { BoxButtonFooter, MainBoxButtonStyled } from "./MainBoxButton.styles";

export const MainBoxButton = (props: MainBoxButtonProps) => {
	return(
		<MainBoxButtonStyled onClick={props.onClick}>
			<BoxButtonFooter>
				{props.title}
			</BoxButtonFooter>
		</MainBoxButtonStyled>
	);
};
