/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faExpand, faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { IconButton } from "../IconButton/IconButton";
import { ButtonNESTemplate } from "../IconButton/IconButton.interfaces";
import { PreviewDefaultButtonsProps } from "./PreviewContainer.interfaces";


export const PreviewDefaultButtons = (props: PreviewDefaultButtonsProps) => {
	
	const FullScreenButton = () => <IconButton iconDefinition={faExpand}
		onClick={props.onPreviewClick} 
		backgroundColor={["#c7c7c7", "#888888"]}
		iconColor={["#ffffff", "#d7d7d7"]}
		nesTemplate={ButtonNESTemplate.blue}
	/>;

	const DownloadButton = () => <IconButton iconDefinition={faDownload}
		onClick={props.onDownloadClick}
		backgroundColor={["#a70000", "#880000"]}
		iconColor={["#ffffff", "#d7d7d7"]}
		nesTemplate={ButtonNESTemplate.red}
	/>;

	return [<DownloadButton/>, <FullScreenButton/>] as ReactNode[];
};