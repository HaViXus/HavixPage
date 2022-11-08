import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconButtonProps } from "./IconButton.interfaces";
import { StyledIconButton } from "./IconButton.styles";

export const IconButton = (props: IconButtonProps) => {
	const content = props.icon ? <FontAwesomeIcon icon={props.icon}/> : props.text;
	return(
		<StyledIconButton backgroundColor={props.backgroundColor}
			onClick={props.onClick}
			iconColor={props.iconColor}
			isText={!!props.text}
		>
			{content}
		</StyledIconButton>
	);
};
