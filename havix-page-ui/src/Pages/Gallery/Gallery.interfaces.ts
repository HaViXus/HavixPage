export interface GalleryProps {
	//type: GalleryType;
	selectedObject: GalleryObject;
	objectsMetadata: GalleryMetadata[];
	objectReceiver: (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => void
	setSelectedObject: (selectedObject: GalleryObject) => void;
	title?: string;
	description?: string;
	previewButtons?: React.ReactNode[];
	onPreviewClick?: (props: PreviewFunctionProps) => void;
	fullScreenOnPreviewClick?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PreviewFunctionProps {

}

export enum GalleryObjectType {
	image = "image",
	movie = "movie"
}

export interface GalleryObject {
	type: GalleryObjectType;
	path: string;
	data?: string;
}

export interface GalleryMetadata {
	type: GalleryObjectType,
	path: string;
}
