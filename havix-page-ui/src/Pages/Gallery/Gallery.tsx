import { useRef, useState } from "react";
import { GalleryObject, GalleryProps as PixelsGalleryProps, PreviewFunctionProps } from "./Gallery.interfaces";
import { StyledGallery, StyledGalleryContent, StyledGalleryListContainer } from "./Gallery.styles";
import ListComponent from "../../Components/List/List";
import { PreviewContainer } from "../../Components/PreviewContainer/PreviewContainer";


export const Gallery = (props: PixelsGalleryProps) => {
	const [isFullPreview, setIsFullPreview] = useState<boolean>(false);

	const previewLeftButtonRef = useRef(null);
	const previewRightButtonRef = useRef(null);

	const onListSelect = (selectedObject: GalleryObject) => {
		if(selectedObject) {
			props.setSelectedObject(selectedObject);
		}
	};

	const onPreviewClick = (previewProps: PreviewFunctionProps) => {
		props.fullScreenOnPreviewClick && setIsFullPreview(!isFullPreview);
		props.onPreviewClick(previewProps);
	};


	return(
		<StyledGallery>
			<StyledGalleryContent>
				<PreviewContainer
					selectedObject={props.selectedObject}
					description={props.description}
					title={props.title}
					previewLeftButtonRef={previewLeftButtonRef}
					previewRightButtonRef={previewRightButtonRef}
					isFullScreenPreview={isFullPreview}
					onPreviewClick={onPreviewClick}
					buttons={props.previewButtons}
					isPanel={props.isPreviewPanel}
				/>
			</StyledGalleryContent>
			<StyledGalleryListContainer>
				<ListComponent selectedObject={props.selectedObject}
					objectsMetadata={props.objectsMetadata}
					objectReceiver={props.objectReceiver}
					onSelect={onListSelect}
					externalLeftButtonRef={previewLeftButtonRef}
					externalRightButtonRef={previewRightButtonRef}
				/>
			</StyledGalleryListContainer>
		</StyledGallery>

	);
};
