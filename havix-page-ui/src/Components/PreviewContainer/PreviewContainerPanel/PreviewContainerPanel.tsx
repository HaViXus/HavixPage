/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { PreviewContainerPanelProps } from "../PreviewContainer.interfaces";
import { CaptionContainer, PanelButtonContainer, PanelDataContainer, StyledButtonsPanel, StyledPreviewContainerPanel, StyledText, TitleContainer } from "./PreviewContainerPanel.styles";


export const PreviewContainerPanel = (props: PreviewContainerPanelProps) => {

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
				{props.buttons.map(button => {
					return (
						<PanelButtonContainer>
							{button}
						</PanelButtonContainer>
					);
				})}
			</StyledButtonsPanel>
		</StyledPreviewContainerPanel>
	);
};
