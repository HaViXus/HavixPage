import axios from "axios";
import { defaultDescription, defaultTitle } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { GalleryMetadata, GalleryObject, GalleryObjectType } from "../Gallery/Gallery.interfaces";

export const getSpriteSheetURI = (selectedSpriteSheet: GalleryObject) => {
	return axios.get(`/images?path=spriteSheet/${selectedSpriteSheet.path}`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};

export const getAllSpriteSheetsMetadata = (setSpriteSheetsMetadata: (images: GalleryMetadata[]) => void) => {
	axios.get("/images/imagesNames?folder=spriteSheet").then((response => {

		const spriteSheetsMetadata: GalleryMetadata[] = response.data.map(spriteSheetPath => {
			const newCoverMetadata: GalleryMetadata = {
				path: spriteSheetPath,
				type: GalleryObjectType.image
			};

			return newCoverMetadata; 
		});
		setSpriteSheetsMetadata(spriteSheetsMetadata);
	})).catch(() => {
		setSpriteSheetsMetadata([]);
	});
};

export const getSpriteSheetPreviewData = (
	selectedObject: GalleryObject,
	setTitle: (title: string) => void,
	setDescription: (description: string) => void
) => {
	axios.get(`/previews?path=spriteSheet/${selectedObject.path}`).then(response => {
		setTitle(response.data?.title);
		setDescription(response.data?.description);
	}).catch(() => {
		setTitle(defaultTitle);
		setDescription(defaultDescription);
	});
};

