import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useState } from "react";
import { SizeMe} from "react-sizeme";
import ReactTooltip from "react-tooltip";
import { PaginationComponentProps, PaginationProps } from "./Pagination.interfaces";
import { StyledLink, StyledPagination, StyledPaginationButton, StyledTooltipContent, StyledTooltipInput, StyledTooltipSearch } from "./Pagination.styles";

const Pagination = (props: PaginationComponentProps) => {
	const [newPageNumber, setNewPageNumber] = useState<number>(props.pageNumber);

	useEffect(()=>{
		setNewPageNumber(props.pageNumber);
	}, [props.pageNumber]);

	const buttonWidth = 48;
	const containerWidth = props.size?.width;
	const elementsToFit = Math.floor(containerWidth / buttonWidth);

	const specialButtons = props.navigationButtons === false ? 0 : 2;
	const elementsToCreate = Math.min(elementsToFit - specialButtons, props.maxPage);
	const isAllFit = elementsToCreate === props.maxPage;

	const elementsWithRelativeIndex = elementsToCreate - 2;
	const elementsWithRelativeIndexWithoutCurrent = elementsWithRelativeIndex - 1;
	const halfRelativeElementsWithoutCurrent = elementsWithRelativeIndexWithoutCurrent / 2;

	const calculateBeforeElementsWithRelativeIndex = () => {
		const defaultValue = Math.ceil(halfRelativeElementsWithoutCurrent);
		const minIndex = props.pageNumber - defaultValue;

		let elementsToReturn = defaultValue;
		if(minIndex < 1) {
			elementsToReturn = props.pageNumber - 1;
		}

		const afterRelativeElements = elementsWithRelativeIndexWithoutCurrent - elementsToReturn;
		const afterOverflow = props.pageNumber + afterRelativeElements - props.maxPage + 1; 
		if(afterOverflow > 0) {
			elementsToReturn += afterOverflow;
		}

		return elementsToReturn;
	};
	const beforeElementsWithRelativeIndex = calculateBeforeElementsWithRelativeIndex();
	const isTripleDotBefore = props.pageNumber - beforeElementsWithRelativeIndex > 1;
	
	const calculateIsTripleDotAfter = () => {
		let minimumElementsNumber = 3 + specialButtons;
		if(isTripleDotBefore) {
			minimumElementsNumber += 1;
		}
		const maxPossibleNumber = elementsToFit - minimumElementsNumber;
		const distanceToMaxNumber = props.maxPage - props.pageNumber;
		const isTripleDotAfter = maxPossibleNumber < distanceToMaxNumber;
		
		return isTripleDotAfter;
	};

	const isTripleDotAfter = calculateIsTripleDotAfter();

	const movePage = (newPageNumber: number, isDisabled: boolean) => {
		if(!isDisabled) {
			props.onPageChange(newPageNumber);
		}
	};

	const getMovePageButton = (changeNumber: number, character: string) => {
		const newPageNumber = props.pageNumber + changeNumber;
		const isDisabled = newPageNumber < 1 || newPageNumber > props.maxPage;
		//const onClick = () => movePage(newPageNumber, isDisabled);
		const className = isDisabled ? "nes-btn is-disabled" : "nes-btn";

		const link = isDisabled ? "#" : props.linkCreator(newPageNumber);

		return (
			<StyledLink href={link}>
				<StyledPaginationButton type="button" className={className} isDisabled={isDisabled}>
					{character}	
				</StyledPaginationButton>
			</StyledLink>
		);
	};

	const getTripleDotButton = (dataTip: string) => {
		const onTripleDotInputChange = (event) => {
			const value = event.target.value;

			if((value >= 1 && value <= props.maxPage && props.pageNumber !== value) || !value) {
				value ? setNewPageNumber(Number(value)) : setNewPageNumber(value);
			}
		};

		const onSearchClick = () => {
			if(newPageNumber) {
				props.onPageChange(newPageNumber);
			}
		};

		return (
			<>
				<StyledPaginationButton data-tip data-for={dataTip} data-event={"click focus"}
					className="nes-btn"
				>
					...
				</StyledPaginationButton>
				<ReactTooltip id={dataTip} effect={"solid"} clickable={true} globalEventOff='click'> 
					<StyledTooltipContent>
						<StyledTooltipInput value={newPageNumber} onChange={onTripleDotInputChange}/>
						<StyledTooltipSearch isDisabled={!newPageNumber}>
							<FontAwesomeIcon icon={faSearch} onClick={onSearchClick}/>
						</StyledTooltipSearch>
					</StyledTooltipContent>
				</ReactTooltip>
			</>
		);
	};

	const getStandardButton = (index: number) => {
		// const onClick = () => {
		// 	props.onPageChange(index);
		// };

		const isSelected = index === props.pageNumber;
		const nesTemplate = isSelected ? "nes-btn is-error" : "nes-btn";
		const link = props.linkCreator(index);

		return(
			<StyledLink href={link}>
				<StyledPaginationButton isSelected={isSelected}
					className={nesTemplate}
				>
					{index}
				</StyledPaginationButton>
			</StyledLink>
		);
	};

	const advancePagination = (buttons: ReactNode[]) => {
		let relativeIndex = props.pageNumber - beforeElementsWithRelativeIndex + 1;

		for(let index = 1; index <= elementsToCreate; index++) {

			if(isTripleDotBefore && index === 2) {
				buttons.push(getTripleDotButton("tripleDotBefore"));
			} else if(isTripleDotAfter && index === elementsToCreate - 1){
				buttons.push(getTripleDotButton("tripleDotAfter"));
			} else {
				const isFirstElement = index === 1;
				const isLastElement = index === elementsToCreate;
				if(isFirstElement) {
					buttons.push(getStandardButton(index));
				} else if(isLastElement) {
					buttons.push(getStandardButton(props.maxPage));
				} else {
					buttons.push(getStandardButton(relativeIndex));
					relativeIndex++;
				}
			}
		}

		return buttons;
	};

	const defaultPagination = (buttons: ReactNode[]) => {
		for(let index = 1; index <= elementsToCreate; index++) {
			buttons.push(getStandardButton(index));
		}

		return buttons;
	};

	const getButtons = () => {
		const buttons: ReactNode[] = [];

		props.navigationButtons && buttons.push(getMovePageButton(-1, "<"));
		if(isAllFit) {
			defaultPagination(buttons);
		} else {
			advancePagination(buttons);
		}
		props.navigationButtons && buttons.push(getMovePageButton(1, ">"));

		return buttons;
	};

	return (
		<StyledPagination>
			{getButtons()}
		</StyledPagination>
	);
};

const PaginationWrapper = (PaginationProps: PaginationProps) => {
	const display = PaginationProps.maxPage > 1;
	
	return (
		<>
			{display && <SizeMe>{({ size }) => (
				<Pagination {...PaginationProps} size={size}/>
			)}</SizeMe>}
		</>
	);
};

export default PaginationWrapper;
