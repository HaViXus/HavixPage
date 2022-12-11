export interface FilterProps<T> {
	filter: T[];
	setFilter: (filter: T[]) => void;
	onSearchClick: (filterValue: T[]) => void;
	options: T[];
}

export enum FilterEntityType {
	Tag = "Tag",
	Title = "Title"
}

export enum FilterApiEntityType {
	Tags = "tags",
	Title = "title"
}

export interface FilterDataEntity {
	label: string;
	type: FilterEntityType;
}

export interface FilterApiEntity {
	query: string;
	type: string;
}

export type FilterRawData = (FilterDataEntity | string);
