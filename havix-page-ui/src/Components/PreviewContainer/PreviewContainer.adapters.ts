import axios from "axios";
import { defaultDescription, defaultTitle } from "./PreviewContainer.utils";

export const getImageURL = (imagePath: string, setImageURL: (imageURL: string) => void) => {
	axios.get(`/images?path=${imagePath}`, {responseType: "blob"}).then((response => {
		const imageURL = URL.createObjectURL(response.data);
		setImageURL(imageURL);
	}));
};

export const getDefaultPreview = (
	selectedObjectPath: string,
	setTitle: (title: string) => void,
	setDescription: (description: string) => void
) => {
	axios.get(`/previews?path=${selectedObjectPath}`).then(response => {
		setTitle(response.data?.title);
		setDescription(response.data?.description);
	}).catch(() => {
		setTitle(defaultTitle);
		setDescription(defaultDescription);
	});
};
