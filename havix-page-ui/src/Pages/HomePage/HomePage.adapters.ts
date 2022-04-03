import axios from "axios";
import { HomeCategory } from "./HomePage.interfaces";

export const getCategoriesData = (setData: (data: HomeCategory[]) => void) => {
	axios.get("/categories").then((response) => {
		setData(response.data);
	}).catch(error => {
		console.log("ERROR: ", error?.message);
	});
};
