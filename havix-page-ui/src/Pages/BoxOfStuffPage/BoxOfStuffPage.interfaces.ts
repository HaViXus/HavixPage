export interface PagedDataType<T> {
	content: T[];
	maxPage: number;
	page: number;
}
