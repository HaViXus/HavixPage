export const formatDate = (date: number) => {
	const dateToFormat = new Date(date);

	const formattedDate = ("0" + dateToFormat.getDate()).slice(-2) + "-" 
		+ ("0"+(dateToFormat.getMonth()+1)).slice(-2) + "-" 
		+ dateToFormat.getFullYear();

	return formattedDate;
};
