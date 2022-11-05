/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IconButton } from "../../IconButton/IconButton";
import { PreviewContainerPanelProps } from "../PreviewContainer.interfaces";
import { CaptionContainer, PanelButtonContainer, PanelDataContainer, StyledButtonsPanel, StyledPreviewContainerPanel, StyledText, TextContainer, TitleContainer } from "./PreviewContainerPanel.styles";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";

export const PreviewContainerPanel = (props: PreviewContainerPanelProps) => {

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

	return(
		<StyledPreviewContainerPanel>
			<PanelDataContainer>
				<TitleContainer>
					<StyledText>Title: </StyledText>
					{props.title}
				</TitleContainer>
				<CaptionContainer>
					<StyledText>Description: </StyledText>
					{props.description}
				</CaptionContainer>
			</PanelDataContainer>
			<StyledButtonsPanel>
				<PanelButtonContainer>
					<DownloadButton/>
				</PanelButtonContainer>
				<PanelButtonContainer>
					<FullScreenButton/>
				</PanelButtonContainer>
			</StyledButtonsPanel>
		</StyledPreviewContainerPanel>
	);
};
