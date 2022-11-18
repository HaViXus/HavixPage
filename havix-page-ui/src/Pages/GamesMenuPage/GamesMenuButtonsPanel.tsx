/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faDownload, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { IconButton } from "../../Components/IconButton/IconButton";
import { GamesMenuButtonsPanelProps } from "./GamesMenuPage.interfaces";

export const GamesMenuButtonsPanel = (props: GamesMenuButtonsPanelProps) => {
	const PlayButtonIcon = props.isAvailable ? faGamepad : faDownload;

	const isGameAvailable = props.isAvailable;
	const playNowButtonText = isGameAvailable ? "Play now" : "Download";

	const MoreButton = () => <IconButton text={"Read more"}
		onClick={props.onMoreButtonClick} 
		backgroundColor={["#c7c7c7", "#888888"]}
		iconColor={["#000000", "#222222"]}
	/>;

	const PlayButton = () => <IconButton text={playNowButtonText}
		onClick={props.onPlayClick}
		backgroundColor={["#a70000", "#880000"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	const previewButtons = [<MoreButton/>, <PlayButton/>] as ReactNode[];

	return previewButtons;
};