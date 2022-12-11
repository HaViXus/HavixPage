import { FilterApiEntity, FilterApiEntityType, FilterDataEntity, FilterEntityType, FilterRawData } from "./Filter.interfaces";

const tagLabelPrefix = "Tag: ";

const checkIsTag = (searchEntity: FilterRawData) => {
	const isTag = typeof searchEntity !== "string" && searchEntity.type === FilterEntityType.Tag;
	return isTag;
};

const checkIsTitle = (searchEntity: FilterRawData) => {
	const isTitle = (typeof searchEntity === "string") ||
		(typeof searchEntity !== "string" && searchEntity.type.valueOf() === FilterEntityType.Title.valueOf());

	return isTitle;
};

export const getFilterEntitiesByType = (data: FilterRawData[]) => {
	const tagsSearch = data.filter(searchEntity => {
		return checkIsTag(searchEntity);
	});

	const titleSearch = data.filter(searchEntity => {
		return checkIsTitle(searchEntity);
	});

	const groupedTags = {
		[FilterEntityType.Tag]: tagsSearch as FilterDataEntity[],
		[FilterEntityType.Title]: titleSearch as FilterRawData[]
	};

	return groupedTags;
};

export const convertFromFilterRawData = (rawData: FilterRawData[]) => {
	const groupedEntities = getFilterEntitiesByType(rawData);
	const tagSearch = groupedEntities[FilterEntityType.Tag];
	const titleSearch = groupedEntities[FilterEntityType.Title];

	const filterData = [...tagSearch];
	
	if(titleSearch.length === 1) {
		const titleRawSearch = titleSearch[0];
		if(typeof titleSearch === "string") {
			const titleSearchEntity: FilterDataEntity = {
				label: titleRawSearch as string,
				type: FilterEntityType.Title
			};
			filterData.push(titleSearchEntity);
		} else {
			filterData.push(titleRawSearch as FilterDataEntity);
		}
	}

	return filterData;
};

export const filterDataToString = (filterData: FilterDataEntity[]) => {
	const groupedFilters = getFilterEntitiesByType(filterData);
	let result = "";

	const title = groupedFilters[FilterEntityType.Title] as FilterDataEntity[];
	if(title.length === 1){
		result += `title=${title[0].label}`;
	}

	const tags = groupedFilters[FilterEntityType.Tag];
	tags.forEach((tag, index) => {
		if(index !== 0) {
			result += `;${tag.label}`;
		} else {
			if(result === "") {
				result += `tags=${tag.label}`;
			} else {
				result += `&tags=${tag.label}`;
			}
		}
	});

	return result;
};

const tagLabelConstructor = (label: string) => {
	const isLabelWithPrefix = label.indexOf(tagLabelPrefix) === 0;
	if(isLabelWithPrefix) {
		return label;
	} else {
		return `${tagLabelPrefix}${label}`;
	}
};

export const stringToFilterData = (title: string, tags: string) => {
	const filterEntities: FilterRawData[] = [];

	if(title) {
		const titleFilterEntity: FilterDataEntity = {
			label: title,
			type: FilterEntityType.Title
		};

		filterEntities.push(titleFilterEntity);
	}

	if(tags) {
		const tagsArray = tags.split(";");
		const tagEntries = tagsArray.map(tag => {

			const newTagEntry: FilterDataEntity = {
				label: tagLabelConstructor(tag),
				type: FilterEntityType.Tag
			};

			return newTagEntry;
		});

		filterEntities.push(...tagEntries);
	}

	return filterEntities;

};

export const filterDataToApiFilter = (title: string, tags: string) => {
	const filterEntities: FilterApiEntity[] = [];

	if(title) {
		const titleFilterEntity: FilterApiEntity = {
			query: title,
			type: FilterApiEntityType.Title.valueOf()
		};

		filterEntities.push(titleFilterEntity);
	}
	if(tags) {
		const tagsArray = tags.split(";");
		const tagEntries = tagsArray.map(tag => {
			const tagLabel = tag.replace(tagLabelPrefix, "");

			const newTagEntry: FilterApiEntity = {
				query: tagLabel,
				type: FilterApiEntityType.Tags.valueOf()
			};

			return newTagEntry;
		});

		filterEntities.push(...tagEntries);
	}

	return filterEntities;
};
