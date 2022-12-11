import axios from "axios";

export const getImage= (requestPath: string) => {
	if(requestPath) {
		return axios.get(requestPath, {responseType: "blob"})
			.then((response => {
				const imageSrcUrl = URL.createObjectURL(response.data);
				return imageSrcUrl;
			}));
	} else {
		return undefined;
	}
	
};
