import axios from "axios";

export const getBoxImage = (path: string, setImage: (imageURL: string) => void) => {
	axios.get(`/images?path=${path}`, {responseType: "blob"}).then((response => {
		const imageBlob = response.data;
		const imageURL = URL.createObjectURL(imageBlob);
		setImage(imageURL);
	}));
};
