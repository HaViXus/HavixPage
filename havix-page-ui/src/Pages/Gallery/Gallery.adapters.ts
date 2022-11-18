import axios from "axios";

export const getYtMovieThumbnail = (movieId: string) => {
	return axios.get(`https://img.youtube.com/vi/${movieId}/default.jpg`, {responseType: "blob"})
		.then((response => {
			const imageSrcUrl = URL.createObjectURL(response.data);
			return imageSrcUrl;
		}));
};