import { PreviewFunctionProps } from "../../Pages/Gallery/Gallery.interfaces";

export interface PreviewContainerProps {
	selectedObjectPath: string;
	isFullScreenPreview: boolean;
	onPreviewClick: (props: PreviewFunctionProps) => void;
	previewLeftButtonRef?: any;
	previewRightButtonRef?: any;
}

export interface PreviewContainerImageProps {
	imageURL: string;
	onImageClick: () => void;
}

export interface PreviewContainerPanelProps { 
	title: string;
	description: string;
	onPreviewClick: () => void;
	onDownloadClick: () => void;
}