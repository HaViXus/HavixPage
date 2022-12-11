import axios from "axios";
import { defaultDescription, defaultTitle } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { GalleryMetadata, GalleryObject, GalleryObjectType } from "../Gallery/Gallery.interfaces";


export const getGameCoverURL = (selectedGameCover: GalleryObject) => {
	return axios.get(`/images?path=game/${selectedGameCover.path}`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};

export const getAllCoversMetadata = ( setGalleryMetadata: (galleryMetadata: GalleryMetadata[]) => void ) => {
	axios.get("/games/getAllCoversPaths").then((response => {
		const coversPaths: string[] = response.data || [];
		const formattedPaths = coversPaths.map(coverPath => coverPath.replace("\\", "/"));
		const coversMetadata: GalleryMetadata[] = formattedPaths.map(coverPath => {
			const newCoverMetadata: GalleryMetadata = {
				path: coverPath,
				type: GalleryObjectType.image
			};

			return newCoverMetadata; 
		});
		
		setGalleryMetadata(coversMetadata);
	})).catch(() => {
		setGalleryMetadata([]);
	});
};

export const getGamePreview = (
	gameCoverPath: string,
	setTitle: (title: string) => void,
	setDescription: (description: string) => void
) => {
	const gameName = gameCoverPath.split("/")?.[0];

	axios.get(`/games/get?gameName=${gameName}`).then(response => {
		setTitle(gameName);
		setDescription(response.data?.description);
	}).catch(() => {
		setTitle(defaultTitle);
		setDescription(defaultDescription);
	});
};
