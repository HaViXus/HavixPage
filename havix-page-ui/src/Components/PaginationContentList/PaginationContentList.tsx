import { ReactNode } from "react";
import Pagination from "./Pagination/Pagination";
import { PaginationContentListProps } from "./PaginationContentList.interfaces";
import { StyledContentWrapper, StyledListContentContainer, StyledPaginationContentList } from "./PaginationContentList.styles";

export const PaginationContentList = (props: PaginationContentListProps<ReactNode>) => {
	const maxPage = props.pagesNumber;//Math.ceil(props.data?.length / props.pageSize);
	
	return (
		<StyledPaginationContentList>
			{props.isTopPagination && <Pagination pageNumber={props.page}
				maxPage={maxPage}
				onPageChange={props.onPageChange}
				navigationButtons={true}
				linkCreator={props.linkCreator}/>}
			
			<StyledContentWrapper>
				<StyledListContentContainer>
					{props.data}
				</StyledListContentContainer>
			</StyledContentWrapper>
			
			<Pagination pageNumber={props.page}
				maxPage={maxPage}
				onPageChange={props.onPageChange}
				navigationButtons={true}
				linkCreator={props.linkCreator}
			/>
		</StyledPaginationContentList>
	);
};
