import React, { useEffect, useState } from "react";
import { ImageFullPreview } from "../ImageFullPreview/ImageFullPreview";
import { PreviewContainerProps } from "./PreviewContainer.interfaces";
import { StyledPreviewContainer } from "./PreviewContainer.styles";
import { defaultDescription, defaultTitle } from "./PreviewContainer.utils";
import { PreviewDefaultButtons } from "./PreviewContainerDefaultButtons";
import { PreviewContainerImage } from "./PreviewContainerImage/PreviewContainerImage";
import { PreviewContainerPanel } from "./PreviewContainerPanel/PreviewContainerPanel";

export const PreviewContainer = (props: PreviewContainerProps) => {
	const {selectedObject, description, title, } = props;
	//const [imageURL, setImageURL] = useState<string>();
	//const [title, setTitle] = useState<string>(defaultTitle);
	//const [description, setDescription] = useState<string>(defaultDescription);
	const previewData = selectedObject.data;

	const onPreviewClick = () => {
		props.onPreviewClick({imageName: undefined, imageURL: previewData});
	};

	const onDownloadClick = () => {
		if(previewData){
			const link = document.createElement("a");
			link.href = previewData;
			link.setAttribute("download", `${props.title}.png`); 
			document.body.appendChild(link);
			link.click();
		}
	};

	const defaultButtons = PreviewDefaultButtons({onDownloadClick, onPreviewClick});
	const buttons = props.buttons || defaultButtons;

	// const getObjectData = () => {
	// 	if(props.selectedObjectPath){
	// 		if(props.previewType === GalleryType.Game) {
	// 			getGamePreview(props.selectedObjectPath, setTitle, setDescription);
	// 		} else {
	// 			getDefaultPreview(props.selectedObjectPath, setTitle, setDescription);
	// 		}
	// 	}
	// };

	// useEffect(()=> {
	// 	if(props.selectedObjectPath){
	// 		getImageURL(props.selectedObjectPath, setImageURL);
	// 		getObjectData();
	// 	}
	// }, [props.selectedObjectPath]);

	return(
		<>
			<StyledPreviewContainer>
				<PreviewContainerPanel title={title}
					description={description}
					buttons={buttons}/>
				<PreviewContainerImage selectedObject={selectedObject} onImageClick={onPreviewClick}/>
			</StyledPreviewContainer>
			<ImageFullPreview selectedObject={selectedObject}
				isVisible={props.isFullScreenPreview}
				onClose={onPreviewClick}
				externalLeftButtonRef={props.previewLeftButtonRef}
				externalRightButtonRef={props.previewRightButtonRef}
			/>
		</>
	);
};
