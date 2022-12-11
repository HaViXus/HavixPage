import axios from "axios";
import { GalleryMetadata, GalleryObjectType } from "../Gallery/Gallery.interfaces";
import { GameMovieData } from "../GameDetailsPage/GameDetailsPage.interfaces";

export const getPageData = (id: string) => {
	if(id) {
		return axios.get(`/boxOfStuff/getPage/${id}`)
			.then(response => response.data);
	} else {
		return undefined;
	}
};

export const getAllPageImagesMetadata = ( pageId: string ) => {
	return axios.get(`/boxOfStuff/getAllImagesNames?id=${pageId}`).then((response => {
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

export const getAllPageMoviesMetadata = ( 
	pageId: string,
	galleryMetadata: GalleryMetadata[],
	setGalleryMetadata: (galleryMetadata: GalleryMetadata[]) => void 
) => {
	axios.get(`/boxOfStuffMovies/get?pageId=${pageId}`).then((response => {
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

export const getImage = (pageId: string, selectedImage: GalleryMetadata) => {
	return axios.get(`/images?path=page/${pageId}/page/${selectedImage.path}`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};
