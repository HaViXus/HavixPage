import { WithSizeOnSizeCallback } from "react-sizeme";

export interface PaginationProps {
	pageNumber: number;
	maxPage: number;
	onPageChange: (pageNumber: number) => void;
	navigationButtons?: boolean;
	linkCreator: (number: number) => string;
}

export interface PaginationComponentProps extends  PaginationProps{
	size?: any;
}
