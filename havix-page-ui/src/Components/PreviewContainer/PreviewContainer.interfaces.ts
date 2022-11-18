import { ReactNode } from "react";
import { GalleryObject, PreviewFunctionProps } from "../../Pages/Gallery/Gallery.interfaces";

export interface PreviewContainerProps {
	selectedObject: GalleryObject;
	isFullScreenPreview?: boolean;
	onPreviewClick: (previewProps: PreviewFunctionProps) => void;
	title: string;
	description: string;
	previewLeftButtonRef?: any;
	previewRightButtonRef?: any;
	buttons?: ReactNode[];
	isPanel?: boolean;
}

export interface PreviewContainerImageProps {
	selectedObject: GalleryObject;
	onImageClick: () => void;
	withoutPanel: boolean;
}

export interface PreviewContainerPanelProps { 
	title: string;
	description: string;
	buttons?: ReactNode[];
}

export interface PreviewDefaultButtonsProps {
	onPreviewClick: () => void;
	onDownloadClick: () => void;
}