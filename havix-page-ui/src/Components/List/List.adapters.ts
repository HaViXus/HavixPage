import axios from "axios";

export const getAllImagesNames = (folderPath: string, setImages: (images: string[]) => void) => {
	axios.get(`/images/imagesNames?folder=${folderPath}`).then((response => {
		setImages(response.data);
	})).catch(() => {
		setImages([]);
	});
};

export const getAllImagesNamesFromRequest = ( requestPath: string, setImages: (images: string[]) => void ) => {
	axios.get(`${requestPath}`).then((response => {
		const imagesPaths: string[] = response.data || [];
		const formattedPaths = imagesPaths.map(imagePath => imagePath.replace("\\", "/"));
		setImages(formattedPaths);
	})).catch(() => {
		setImages([]);
	});
};
