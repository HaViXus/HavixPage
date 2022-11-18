import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Direction, ListProps } from "./List.interfaces";
import { StyledList, StyledListButton, StyledListContainer } from "./List.styles";
import { ListMediaTile } from "./ListMediaTile";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useKeyPress } from "../../Utils/useKeyPress";
import { MouseButton, useMouseClick } from "../../Utils/useMouseClick";
import { getAllImagesNames, getAllImagesNamesFromRequest } from "./List.adapters";
import { GalleryMetadata } from "../../Pages/Gallery/Gallery.interfaces";

const List = (props: ListProps) => {
	const {objectsMetadata, selectedObject } = props;
	const [chunkPosition, setChunkPosition] = useState<number>(0);
	const [maxChunkPosition, setMaxChunkPosition] = useState<number>(0);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const chunkSize = 6;

	const leftKey = useKeyPress("ArrowLeft");
	const rightKey = useKeyPress("ArrowRight");

	const externalButtonLeftPressed = props.externalLeftButtonRef && useMouseClick(props.externalLeftButtonRef, MouseButton.Left);
	const externalButtonRightPressed = props.externalRightButtonRef && useMouseClick(props.externalRightButtonRef, MouseButton.Left);

	useEffect(()=>{
		rightKey && handleArrowClick(Direction.Right);
	}, [rightKey]);

	useEffect(()=>{
		leftKey && handleArrowClick(Direction.Left);
	}, [leftKey]);

	useEffect(()=>{
		externalButtonLeftPressed && handleArrowClick(Direction.Left);
	}, [externalButtonLeftPressed]);

	useEffect(()=>{
		externalButtonRightPressed && handleArrowClick(Direction.Right);
	}, [externalButtonRightPressed]);

	const handleArrowClick = (direction: Direction) => {
		const offset = direction === Direction.Left ? -1 : 1;
		const localIndex = selectedIndex - chunkSize * chunkPosition;
		const changedLocalIndex = localIndex + offset;
		const changedIndex = selectedIndex + offset;

		if(changedIndex >= objectsMetadata.length){
			setSelectedIndex(0);
			changePage(direction);
		}
		else if(changedLocalIndex >= chunkSize){
			setSelectedIndex(changedIndex);
			changePage(direction);
		} else if(changedLocalIndex < 0){
			if(changedIndex < 0){
				setSelectedIndex(objectsMetadata.length - 1);
			} else{
				setSelectedIndex(changedIndex);
			}
			changePage(direction);
		} else {
			setSelectedIndex(changedIndex);
		}
	};

	useEffect(()=>{
		const selectedObject = getObjectByIndex(selectedIndex);
		selectedObject && props.onSelect(selectedObject);
	}, [selectedIndex]);
	
	const getChunkObjectsMetadata = () => {
		const startPos = chunkSize * chunkPosition;
		const end = startPos + chunkSize;
		const endPos = end > objectsMetadata.length ? objectsMetadata.length : end;

		const chunkImagesNames = objectsMetadata.slice(startPos, endPos);
		return chunkImagesNames;
	};

	const getObjectByIndex = (index: number) => {
		const chunkObjects = getChunkObjectsMetadata();
		const localIndex = index - chunkSize * chunkPosition;
		const objectToReturn = chunkObjects?.[localIndex];

		return objectToReturn;
	};

	const createListTiles = () => {
		const chunkObjectsMetadata = getChunkObjectsMetadata();
		const tiles = chunkObjectsMetadata.map((objectMetadata: GalleryMetadata, index: number) => {
			const isDefaultSelection = !selectedObject?.path && index === 0;
			const isSelected = objectMetadata?.path === selectedObject?.path || isDefaultSelection;
			const globalIndex = chunkSize * chunkPosition + index;

			if(isDefaultSelection){
				props.onSelect(objectMetadata);
			}

			const onImageClick = () => {
				setSelectedIndex(globalIndex);
			};

			return <ListMediaTile key={objectMetadata.path}
				objectMetadata={objectMetadata}
				objectReceiver={props.objectReceiver}
				onClick={onImageClick}
				selected={isSelected}
			/>; 
		});

		return tiles;
	};

	const resetList = (maxPosition: number) => {
		setChunkPosition(0);
		setMaxChunkPosition(maxPosition);
		setSelectedIndex(0);
		props.onSelect(undefined);
	};

	useEffect(()=>{
		const maxPosition = objectsMetadata?.length ? Math.ceil(objectsMetadata.length / chunkSize) - 1 : 0;
		resetList(maxPosition);
	}, [objectsMetadata]);

	const changePage = (direction: Direction) => {
		const newChunkPosition = chunkPosition + 1 * direction;
		if(newChunkPosition < 0){
			setChunkPosition(maxChunkPosition);
		} else if(newChunkPosition > maxChunkPosition){
			setChunkPosition(0);
		} else{
			setChunkPosition(newChunkPosition);
		}
	};

	const onLeftClick = () => changePage(Direction.Left);

	const onRightClick = () => changePage(Direction.Right);

	const buttonsDisabled = maxChunkPosition === 0;

	return(
		<StyledListContainer>
			<StyledListButton onClick={onLeftClick} disabled={buttonsDisabled}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</StyledListButton>
			<StyledList>
				{createListTiles()}
			</StyledList>
			<StyledListButton onClick={onRightClick} disabled={buttonsDisabled}>
				<FontAwesomeIcon icon={faAngleRight}/>
			</StyledListButton>
		</StyledListContainer>
	);

};

export default List;
