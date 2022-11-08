import axios from "axios";
import { defaultTitle, defaultDescription } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { GalleryObject, GalleryMetadata, GalleryObjectType } from "../Gallery/Gallery.interfaces";

export const getPixelArtURI = (selectedGameCover: GalleryObject) => {
	return axios.get(`/images?path=pixelArt/${selectedGameCover.path}`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};

export const getAllPixelArtsMetadata = (setPixelArtMetadata: (images: GalleryMetadata[]) => void) => {
	axios.get("/images/imagesNames?folder=pixelArt").then((response => {

		const spriteSheetsMetadata: GalleryMetadata[] = response.data.map(spriteSheetPath => {
			const newCoverMetadata: GalleryMetadata = {
				path: spriteSheetPath,
				type: GalleryObjectType.image
			};

			return newCoverMetadata; 
		});
		setPixelArtMetadata(spriteSheetsMetadata);
	})).catch(() => {
		setPixelArtMetadata([]);
	});
};

export const getPixelArtPreviewData = (
	selectedObject: GalleryObject,
	setTitle: (title: string) => void,
	setDescription: (description: string) => void
) => {
	axios.get(`/previews?path=pixelArt/${selectedObject.path}`).then(response => {
		setTitle(response.data?.title);
		setDescription(response.data?.description);
	}).catch(() => {
		setTitle(defaultTitle);
		setDescription(defaultDescription);
	});
};