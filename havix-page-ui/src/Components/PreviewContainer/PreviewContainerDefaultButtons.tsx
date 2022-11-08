/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faExpand, faDownload } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { IconButton } from "../IconButton/IconButton";
import { PreviewDefaultButtonsProps } from "./PreviewContainer.interfaces";


export const PreviewDefaultButtons = (props: PreviewDefaultButtonsProps) => {
	
	const FullScreenButton = () => <IconButton icon={faExpand}
		onClick={props.onPreviewClick} 
		backgroundColor={["#c7c7c7", "#888888"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	const DownloadButton = () => <IconButton icon={faDownload}
		onClick={props.onDownloadClick}
		backgroundColor={["#a70000", "#880000"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	return [<DownloadButton/>, <FullScreenButton/>] as ReactNode[];
};