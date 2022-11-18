import { createDownloadLink } from "../../Utils/createDownloadLink";
import { ImageFullPreview } from "../ImageFullPreview/ImageFullPreview";
import { PreviewContainerProps } from "./PreviewContainer.interfaces";
import { StyledPreviewContainer } from "./PreviewContainer.styles";
import { PreviewDefaultButtons } from "./PreviewContainerDefaultButtons";
import { PreviewContentContainer } from "./PreviewContainerImage/PreviewContainerImage";
import { PreviewContainerPanel } from "./PreviewContainerPanel/PreviewContainerPanel";

export const PreviewContainer = (props: PreviewContainerProps) => {
	const {selectedObject, description, title, } = props;
	const previewData = selectedObject.data;

	const onPreviewClick = () => {
		props.onPreviewClick({imageName: undefined, imageURL: previewData});
	};

	const onDownloadClick = () => {
		const fileName = `${props.title}.png`;
		createDownloadLink(previewData, fileName);
	};

	const defaultButtons = PreviewDefaultButtons({onDownloadClick, onPreviewClick});
	const buttons = props.buttons || defaultButtons;
	const isPreviewWithoutPanel = !(props.isPanel === false);
	return (
		<>
			<StyledPreviewContainer>
				{isPreviewWithoutPanel &&<PreviewContainerPanel title={title}
					description={description}
					buttons={buttons}/>}
				<PreviewContentContainer selectedObject={selectedObject}
					onImageClick={onPreviewClick}
					withoutPanel={!isPreviewWithoutPanel}/>
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
