import { GalleryMetadata, GalleryObject } from "../../Pages/Gallery/Gallery.interfaces";

export interface ListProps {
	selectedObject: GalleryObject;
	objectsMetadata: GalleryMetadata[];
	objectReceiver: (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => void;
	onSelect: (object: GalleryMetadata) => void;
	//selectedPosition?: string;
	externalLeftButtonRef?: any;
	externalRightButtonRef?: any;
} 

export interface ListImageProps {
	objectMetadata: GalleryMetadata;
	onClick: () => void;
	objectReceiver: (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => void;
	selected: boolean;
}

export enum Direction {
	Left = -1,
	Right = 1
}
