import React, { useRef, useState } from "react";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { GalleryProps as PixelsGalleryProps, GalleryType, PreviewFunctionProps } from "./Gallery.interfaces";
import { StyledGallery, StyledGalleryContent, StyledGalleryListContainer } from "./Gallery.styles";
import ListComponent from "../../Components/List/List";
import { PreviewContainer } from "../../Components/PreviewContainer/PreviewContainer";
import { useNavigate } from "react-router-dom";

export const PixelsGallery = (props: PixelsGalleryProps) => {
	const navigate = useNavigate();
	const [selectedObject, setSelectedObject] = useState<string>();
	const [isFullPreview, setIsFullPreview] = useState<boolean>(false);

	const previewLeftButtonRef = useRef(null);
	const previewRightButtonRef = useRef(null);

	const onListSelect = (selectedPosition: string) => {
		setSelectedObject(selectedPosition);
	};

	const dataPath = {
		[GalleryType.PixelArt]: "pixelArt",
		[GalleryType.SpriteSheet]: "spriteSheet"
	};

	const onPixelArtPreviewClick = (props: PreviewFunctionProps) => {
		setIsFullPreview(!isFullPreview);
	};

	const onSpriteSheetPreviewClick = ({imageName}: PreviewFunctionProps) => {
		const spriteSheetPage = `/Gallery/SpriteSheets/${imageName}`;
		navigate(spriteSheetPage);
	};

	const onPreviewClick = {
		[GalleryType.PixelArt]: onPixelArtPreviewClick,
		[GalleryType.SpriteSheet]: onSpriteSheetPreviewClick 
	};

	const previewClickFunction = () => {
		const slashIndex = selectedObject?.lastIndexOf("/");
		const imageName = selectedObject.substring(slashIndex + 1);

		onPreviewClick[props.type] && onPreviewClick[props.type]({imageName, imageURL: selectedObject});
	};
	
	return(
		<PageTemplate>
			<StyledGallery>
				<StyledGalleryContent>
					<PreviewContainer selectedObjectPath={selectedObject}
						previewLeftButtonRef={previewLeftButtonRef}
						previewRightButtonRef={previewRightButtonRef}
						isFullScreenPreview={isFullPreview}
						onPreviewClick={previewClickFunction}

					/>
				</StyledGalleryContent>
				<StyledGalleryListContainer>
					<ListComponent dataPath={dataPath[props.type]}
						onSelect={onListSelect}
						selectedPosition={selectedObject}
						externalLeftButtonRef={previewLeftButtonRef}
						externalRightButtonRef={previewRightButtonRef}
					/>
				</StyledGalleryListContainer>
			</StyledGallery>
		</PageTemplate>
	);
};
