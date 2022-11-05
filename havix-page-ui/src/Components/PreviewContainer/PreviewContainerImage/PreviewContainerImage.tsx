import React from "react";
import { PreviewContainerImageProps } from "../PreviewContainer.interfaces";
import { StyledImage, StyledImageContainer, StyledPreviewContainerImage } from "./PreviewContainerImage.styles";

export const PreviewContainerImage = (props: PreviewContainerImageProps) => {
	return(
		<StyledPreviewContainerImage>
			<StyledImageContainer>
				<StyledImage src={props.imageURL} onClick={props.onImageClick}/>
			</StyledImageContainer>
		</StyledPreviewContainerImage>
	);
};
