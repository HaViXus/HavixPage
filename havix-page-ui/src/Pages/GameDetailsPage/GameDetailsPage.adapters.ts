import axios from "axios";
import { GalleryMetadata,  GalleryObjectType } from "../Gallery/Gallery.interfaces";
import { GameMovieData } from "./GameDetailsPage.interfaces";

export const getAllGameImagesMetadata = ( gameName: string ) => {
	return axios.get(`/games/getAllImagesNames?gameName=${gameName}`).then((response => {
		const imagesPaths: string[] = response.data || [];
		const formattedPaths = imagesPaths.map(imagePath => imagePath.replace("\\", "/"));
		const imagesMetadata: GalleryMetadata[] = formattedPaths.map(imagePath => {
			const newImageMetadata: GalleryMetadata = {
				path: imagePath,
				type: GalleryObjectType.image
			};

			return  newImageMetadata; 
		});
		
		return imagesMetadata;
	})).catch(() => {
		return [];
	});
};

export const getAllGameMoviesMetadata = ( 
	gameName: string,
	galleryMetadata: GalleryMetadata[],
	setGalleryMetadata: (galleryMetadata: GalleryMetadata[]) => void 
) => {
	axios.get(`/gameMovies/get?gameName=${gameName}`).then((response => {
		const moviesPaths: GameMovieData[] = response.data || [];
		const formattedPaths = moviesPaths.map(moviePath => moviePath.url?.replace("\\", "/"));
		const moviesMetadata: GalleryMetadata[] = formattedPaths.map(moviePath => {
			const newMovieMetadata: GalleryMetadata = {
				path: moviePath,
				type: GalleryObjectType.movie
			};

			return newMovieMetadata; 
		});

		const newMetadata = [...moviesMetadata, ...galleryMetadata ]; 
		setGalleryMetadata(newMetadata);
	})).catch(() => {
		setGalleryMetadata([...galleryMetadata]);
	});
};

export const getGameData = (gameName: string) => {
	return axios.get(`/games/get?gameName=${gameName}`)
		.then(response => response.data);
};

export const getGameImage = (gameName: string, selectedGameImage: GalleryMetadata) => {
	return axios.get(`/images?path=game/${gameName}/details/${selectedGameImage.path}`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};
