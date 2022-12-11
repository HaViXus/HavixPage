import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Filter } from "../../Components/Filter/Filter";
import { FilterDataEntity, FilterEntityType, FilterRawData } from "../../Components/Filter/Filter.interfaces";
import { convertFromFilterRawData, filterDataToApiFilter, filterDataToString, getFilterEntitiesByType, stringToFilterData } from "../../Components/Filter/Filter.utils";
import { PageListItem } from "../../Components/PageListItem/PageListItem";
import { ListItemData } from "../../Components/PageListItem/PageListItem.interfaces";
import { PaginationContentList } from "../../Components/PaginationContentList/PaginationContentList";
import { Title } from "../../Components/Title/Title";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { getPagedItemsList } from "./BoxOfStuffPage.adapters";
import { PagedDataType } from "./BoxOfStuffPage.interfaces";
import { StyledBoxOfContent, StyledTitleWithFilterContainer } from "./BoxOfStuffPage.styles";

const top100Films = [
	{label: "Tag: tag1", type: FilterEntityType.Tag},
	{label: "Tag: tag2", type: FilterEntityType.Tag},
	{label: "Tag: tag3", type: FilterEntityType.Tag},
	{label: "Tag: tag4", type: FilterEntityType.Tag},
	{label: "Tag: tag5", type: FilterEntityType.Tag},
	{label: "Tag: tag6", type: FilterEntityType.Tag},

	{label: "Title1", type: FilterEntityType.Title},
	{label: "longer title", type: FilterEntityType.Title},
	{label: "the longest title", type: FilterEntityType.Title},
	{label: "the longest title about capybaras", type: FilterEntityType.Title},
	{label: "title 2", type: FilterEntityType.Title},
	{label: "something about something", type: FilterEntityType.Title},
];

export const BoxOfStuffPage = (props) => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const defaultPageNumber = Number(searchParams.get("pageNumber")) || 1;
	const [ page, setPage ] = useState<number>(defaultPageNumber);
	const [ pagedData, setPagedData ] = useState<PagedDataType<ListItemData>>();
	const [ rawFilter, setRawFilter ] = useState<FilterRawData[]>([]);
	const pageSize = 3;

	useEffect(() => {
		const title = searchParams.get("title");
		const tags = searchParams.get("tags");
		const apiFilters = filterDataToApiFilter(title, tags);

		getPagedItemsList(page, pageSize, apiFilters).then(response => {
			const responseData = response;
			const maxPage = responseData.totalPages;
			const newPagedData: PagedDataType<ListItemData> = {
				content: responseData.content,
				page: responseData.number + 1,
				maxPage: maxPage
			};

			setPagedData(newPagedData);
		});
	}, [page, rawFilter]);

	useEffect(() => {
		const title = searchParams.get("title");
		const tags = searchParams.get("tags");

		const newFilter = stringToFilterData(title, tags);
		setRawFilter(newFilter);

	}, [searchParams]);
	
	const onPageChange = (pageNumber: number) => {
		setPage(pageNumber);
	};

	const createPageList = () => {
		const ListItems = pagedData?.content.map(item => {
			const imageRequestPath = `boxOfStuff/getPageCover?id=${item.id}`;

			return(
				<PageListItem key={item.id}
					id={item.id}
					title={item.title}
					shortDescription={item.shortDescription}
					tags={item.tags}
					date={item.date}
					imageRequestPath={imageRequestPath}
				/>
			);
		});

		return ListItems;
	};
	
	const getFiltersURI = () => {
		if(rawFilter.length > 0) {
			const stringFilters = filterDataToString(rawFilter as FilterDataEntity[]);
			const URIstringFilters = encodeURI(stringFilters);
			return URIstringFilters;
		} else {
			return "";
		}
	};

	const paginationLinkFunction = (pageNumber: number) => {
		const hrefBase = `${window.location.origin}${window.location.pathname}`;
		return `${hrefBase}?pageNumber=${pageNumber}&pageSize=${pageSize}&${getFiltersURI()}`;
	};

	const onSearchClick = (rawValue: FilterRawData[]) => {
		navigate(`/BoxOfStuff?${getFiltersURI()}`);
	};

	const getOptions = (filterData: FilterRawData[]) => {
		const groupedFilter = getFilterEntitiesByType(filterData);
		const isTitleInFilter = groupedFilter[FilterEntityType.Title].length > 0;
		const tagsFilters = groupedFilter[FilterEntityType.Tag];

		const searchFilteredTitle = isTitleInFilter ? (
			top100Films.filter(filterSearchEntity => filterSearchEntity.type !== FilterEntityType.Title)
		) : top100Films;
		
		const optionsToReturn = searchFilteredTitle.filter(searchEntity => {
			const isSelected = tagsFilters.some(filterTag => filterTag.label === searchEntity.label);
			return !isSelected;
		});

		return optionsToReturn;
	};

	return (
		<PageTemplate>
			<StyledBoxOfContent>
				<StyledTitleWithFilterContainer>
					<Title text="Box of stuff"/>
					<Filter filter={rawFilter}
						setFilter={setRawFilter}
						onSearchClick={onSearchClick}
						options={getOptions(rawFilter)}
					/>
				</StyledTitleWithFilterContainer>
				
				<PaginationContentList data={createPageList()} 
					page={page}
					pagesNumber={pagedData?.maxPage}
					onPageChange={onPageChange}
					linkCreator={paginationLinkFunction}
					isTopPagination
				/>
			</StyledBoxOfContent>
		</PageTemplate>
	);
};
