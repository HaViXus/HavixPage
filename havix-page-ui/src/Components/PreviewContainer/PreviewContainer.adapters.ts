import axios from "axios";

export const getImageURL = (imagePath: string, setImageURL: (imageURL: string) => void) => {
	axios.get(`/images?path=${imagePath}`, {responseType: "blob"}).then((response => {
		const imageURL = URL.createObjectURL(response.data);
		setImageURL(imageURL);
	}));
};
