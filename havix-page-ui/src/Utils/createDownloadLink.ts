export const createDownloadLink = (data: string, outputName: string) => {
	if(data){
		const link = document.createElement("a");
		link.href = data;
		link.setAttribute("download", outputName); 
		document.body.appendChild(link);
		link.click();
	}
};
