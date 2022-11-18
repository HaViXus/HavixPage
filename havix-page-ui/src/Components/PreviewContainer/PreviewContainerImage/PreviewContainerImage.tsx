import React from "react";
import { GalleryObject, GalleryObjectType } from "../../../Pages/Gallery/Gallery.interfaces";
import { PreviewContainerImageProps as PreviewContentContainerProps } from "../PreviewContainer.interfaces";
import { StyledImage, StyledImageContainer as StyledContentContainer, StyledMediaPlayerContainer, StyledPreviewContainerImage as StyledPreviewContentContainer } from "./PreviewContainerImage.styles";

export const PreviewContentContainer = (props: PreviewContentContainerProps) => {
	const getImage = (object: GalleryObject) => {
		return object.data ? <StyledImage src={object.data} onClick={props.onImageClick}/> :  <></>;
	};

	const getMovie = (object: GalleryObject) => {
		return object.path ? <StyledMediaPlayerContainer src={object.path} allowFullScreen/> : <></>;
	};

	const getContent = (object: GalleryObject) => {
		if(object && object.type === GalleryObjectType.image) {
			return getImage(object);
		} else if(object && object.type === GalleryObjectType.movie) {
			return getMovie(object);
		} else {
			return <></>;
		}
	};

	return(
		<StyledPreviewContentContainer withoutPanel={props.withoutPanel}>
			<StyledContentContainer>
				{getContent(props.selectedObject)}
			</StyledContentContainer>
		</StyledPreviewContentContainer>
	);
};
