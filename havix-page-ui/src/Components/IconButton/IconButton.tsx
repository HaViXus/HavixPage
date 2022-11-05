import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconButtonProps } from "./IconButton.interfaces";
import { StyledIconButton } from "./IconButton.styles";

export const IconButton = (props: IconButtonProps) => {
	return(
		<StyledIconButton backgroundColor={props.backgroundColor}
			onClick={props.onClick}
			iconColor={props.iconColor}
		>
			<FontAwesomeIcon icon={props.icon}/>
		</StyledIconButton>
	);
};
