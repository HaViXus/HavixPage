import React from "react";
import { MainBoxButtonProps } from "./MainBoxButton.interfaces";
import { BoxButtonFooter, BoxButtonTitle, BoxFooterBackground, MainBoxButtonStyled } from "./MainBoxButton.styles";

export const MainBoxButton = (props: MainBoxButtonProps) => {
	return(
		<MainBoxButtonStyled onClick={props.onClick}>
			<BoxButtonFooter>
				<BoxFooterBackground/>
				<BoxButtonTitle>
					{props.title}
				</BoxButtonTitle>
				
			</BoxButtonFooter>
		</MainBoxButtonStyled>
	);
};
