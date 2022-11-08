import { GalleryObject } from "../../Pages/Gallery/Gallery.interfaces";

export interface ImageFullPreviewProps {
	selectedObject: GalleryObject;
	isVisible: boolean;
	onClose: () => void;
	externalLeftButtonRef?: any;
	externalRightButtonRef?: any;
}
