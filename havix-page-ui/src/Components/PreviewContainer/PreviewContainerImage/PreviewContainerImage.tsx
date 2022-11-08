import React from "react";
import { GalleryObject, GalleryObjectType } from "../../../Pages/Gallery/Gallery.interfaces";
import { PreviewContainerImageProps } from "../PreviewContainer.interfaces";
import { StyledImage, StyledImageContainer, StyledPreviewContainerImage } from "./PreviewContainerImage.styles";

export const PreviewContainerImage = (props: PreviewContainerImageProps) => {
	const getImage = (object: GalleryObject) => {
		return object.data ? <StyledImage src={object.data} onClick={props.onImageClick}/> :  <></>;
	};

	const getContent = (object: GalleryObject) => {
		if(object && object.type === GalleryObjectType.image) {
			return getImage(object);
		} else {
			return <></>;
		}
	};

	return(
		<StyledPreviewContainerImage>
			<StyledImageContainer>
				{getContent(props.selectedObject)}
			</StyledImageContainer>
		</StyledPreviewContainerImage>
	);
};
