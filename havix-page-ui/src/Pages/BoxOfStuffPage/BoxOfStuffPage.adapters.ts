import axios from "axios";
import { FilterApiEntity } from "../../Components/Filter/Filter.interfaces";
const options = {
	headers: { "Content-Type": "application/json","Accept": "application/json" }
};

export const getPagedItemsList = (pageNumber: number, pageSize: number, filters: FilterApiEntity[] ) => {
	if(pageNumber && pageSize) {
		return axios.post(`/boxOfStuff/getListOfPages?pageNumber=${pageNumber-1}&pageSize=${pageSize}`, {filters: filters})
			.then(response => response.data);
	} else {
		return undefined;
	}
	
};