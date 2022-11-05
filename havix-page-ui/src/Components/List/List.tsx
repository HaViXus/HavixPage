import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Direction, ListProps } from "./List.interfaces";
import { StyledList, StyledListButton, StyledListContainer } from "./List.styles";
import { ListImage } from "./ListImage";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useKeyPress } from "../../Utils/useKeyPress";
import { MouseButton, useMouseClick } from "../../Utils/useMouseClick";

const List = (props: ListProps) => {
	const [allImagesNames, setAllImagesNames] = useState<string[]>([]);
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

		if(changedIndex >= allImagesNames.length){
			setSelectedIndex(0);
			changePage(direction);
		}
		else if(changedLocalIndex >= chunkSize){
			setSelectedIndex(changedIndex);
			changePage(direction);
		} else if(changedLocalIndex < 0){
			if(changedIndex < 0){
				setSelectedIndex(allImagesNames.length - 1);
			} else{
				setSelectedIndex(changedIndex);
			}
			changePage(direction);
		} else {
			setSelectedIndex(changedIndex);
		}
	};

	useEffect(()=>{
		const selectedImage = getImagePathByIndex(selectedIndex);
		selectedImage && props.onSelect(selectedImage);
	}, [selectedIndex]);

	const getAllImagesNames = (folderPath: string) => {
		axios.get(`/images/imagesNames?folder=${folderPath}`).then((response => {
			setAllImagesNames(response.data);
		})).catch(() => {
			setAllImagesNames([]);
		});
	};

	const getChunkImagesNames = () => {
		const startPos = chunkSize * chunkPosition;
		const end = startPos + chunkSize;
		const endPos = end > allImagesNames.length ? allImagesNames.length : end;

		const chunkImagesNames = allImagesNames.slice(startPos, endPos);
		return chunkImagesNames;
	};

	const getImagePathByIndex = (index: number) => {
		const chunkNames = getChunkImagesNames();
		const localIndex = index - chunkSize * chunkPosition;
		const imageName = chunkNames?.[localIndex];
		const imagePath = props.dataPath + "/" + imageName;

		return imageName ? imagePath : undefined;
	};

	const createListTiles = () => {
		const chunkNames = getChunkImagesNames();
		const imagesTiles = chunkNames.map((imageName: string, index: number) => {
			const imagePath = props.dataPath + "/" + imageName;
			const isDefaultSelection = !props.selectedPosition && index === 0;
			const isSelected = imagePath === props.selectedPosition || isDefaultSelection;

			const globalIndex = chunkSize * chunkPosition + index;

			if(isDefaultSelection){
				props.onSelect(imagePath);
			}

			const onImageClick = () => {
				setSelectedIndex(globalIndex);
			};

			return <ListImage key={imagePath}
				imagePath={imagePath}
				onClick={onImageClick}
				selected={isSelected}
			/>; 
		});

		return imagesTiles;
	};

	const resetList = (maxPosition: number) => {
		setChunkPosition(0);
		setMaxChunkPosition(maxPosition);
		setSelectedIndex(0);
		props.onSelect(undefined);
	};

	useEffect(()=>{
		getAllImagesNames(props.dataPath);
	}, [props.dataPath]);

	useEffect(()=>{
		const maxPosition = allImagesNames?.length ? Math.ceil(allImagesNames.length / chunkSize) - 1 : 0;
		resetList(maxPosition);
	},[allImagesNames]);

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

	return(
		<StyledListContainer>
			<StyledListButton onClick={onLeftClick}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</StyledListButton>
			<StyledList>
				{createListTiles()}
			</StyledList>
			<StyledListButton onClick={onRightClick}>
				<FontAwesomeIcon icon={faAngleRight}/>
			</StyledListButton>
		</StyledListContainer>
	);

};

export default List;
