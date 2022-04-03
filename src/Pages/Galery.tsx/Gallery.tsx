import React from "react";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { GalleryProps } from "./Gallery.interfaces";
import { StyledGallery, StyledGalleryContent, StyledGalleryListContainer } from "./Gallery.styles";

export const Gallery = (props: GalleryProps) => {

	const mockedData = {
		
	};
	
	return(
		<PageTemplate>
			<StyledGallery>
				<StyledGalleryContent>

				</StyledGalleryContent>
				<StyledGalleryListContainer>

				</StyledGalleryListContainer>
			</StyledGallery>
		</PageTemplate>
	);
};
