/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { IconButton } from "../../Components/IconButton/IconButton";
import { GamesMenuButtonsPanelProps } from "./GamesMenuPage.interfaces";

export const GamesMenuButtonsPanel = (props: GamesMenuButtonsPanelProps) => {
	const MoreButton = () => <IconButton text={"More"}
		onClick={props.onMoreButtonClick} 
		backgroundColor={["#c7c7c7", "#888888"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	const PlayButton = () => <IconButton icon={faGamepad}
		onClick={props.onPlayClick}
		backgroundColor={["#a70000", "#880000"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	const previewButtons = [<MoreButton/>, <PlayButton/>] as ReactNode[];

	return previewButtons;
};