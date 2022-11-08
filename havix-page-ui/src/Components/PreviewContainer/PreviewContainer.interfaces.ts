import { ReactNode } from "react";
import { GalleryObject, PreviewFunctionProps } from "../../Pages/Gallery/Gallery.interfaces";

export interface PreviewContainerProps {
	//selectedObjectPath: string;
	selectedObject: GalleryObject;
	isFullScreenPreview: boolean;
	onPreviewClick: (props: PreviewFunctionProps) => void;
	title: string;
	description: string;
	previewLeftButtonRef?: any;
	previewRightButtonRef?: any;
	//previewType?: GalleryType;
	buttons?: ReactNode[];
}

export interface PreviewContainerImageProps {
	selectedObject: GalleryObject;
	onImageClick: () => void;
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