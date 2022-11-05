import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageFullPreview } from "../ImageFullPreview/ImageFullPreview";
import { getImageURL } from "./PreviewContainer.adapters";
import { PreviewContainerProps } from "./PreviewContainer.interfaces";
import { StyledPreviewContainer } from "./PreviewContainer.styles";
import { PreviewContainerImage } from "./PreviewContainerImage/PreviewContainerImage";
import { PreviewContainerPanel } from "./PreviewContainerPanel/PreviewContainerPanel";

export const PreviewContainer = (props: PreviewContainerProps) => {
	const [imageURL, setImageURL] = useState<string>();
	const defaultTitle = "Nice title";
	const defaultDescription = "Could be better, but still not bad";
	const [title, setTitle] = useState<string>(defaultTitle);
	const [description, setDescription] = useState<string>(defaultDescription);

	const onPreviewClick = () => {
		props.onPreviewClick({imageName: undefined, imageURL: imageURL});
	};

	const onDownloadClick = () => {
		if(imageURL){
			const link = document.createElement("a");
			link.href = imageURL;
			link.setAttribute("download", `${title}.png`); 
			document.body.appendChild(link);
			link.click();
		}
	};

	const getObjectData = () => {
		if(props.selectedObjectPath){
			axios.get(`/previews?path=${props.selectedObjectPath}`).then(response => {
				setTitle(response.data?.title);
				setDescription(response.data?.description);
			}).catch(() => {
				setTitle(defaultTitle);
				setDescription(defaultDescription);
			});
		}
	};

	useEffect(()=> {
		if(props.selectedObjectPath){
			getImageURL(props.selectedObjectPath, setImageURL);
			getObjectData();
		}
	}, [props.selectedObjectPath]);

	return(
		<>
			<StyledPreviewContainer>
				<PreviewContainerPanel title={title}
					description={description}
					onPreviewClick={onPreviewClick}
					onDownloadClick={onDownloadClick}/>
				<PreviewContainerImage imageURL={imageURL} onImageClick={onPreviewClick}/>
			</StyledPreviewContainer>
			<ImageFullPreview imageURL={imageURL}
				isVisible={props.isFullScreenPreview}
				onClose={onPreviewClick}
				externalLeftButtonRef={props.previewLeftButtonRef}
				externalRightButtonRef={props.previewRightButtonRef}
			/>
		</>
	);
};
