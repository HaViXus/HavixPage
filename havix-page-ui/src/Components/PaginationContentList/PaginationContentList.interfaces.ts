export interface PaginationContentListProps<T> {
	data: T[];
	page?: number;
	pagesNumber: number;
	isTopPagination?: boolean;
	onPageChange: (pageNumber: number) => void;
	linkCreator: (number: number) => string;
}