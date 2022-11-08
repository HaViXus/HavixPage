/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Gallery } from "../Gallery/Gallery";
import { GalleryMetadata, GalleryObject } from "../Gallery/Gallery.interfaces";
import { getGamePreview as getGamePreviewData } from "./GamesMenuPage.adapters";
import { defaultDescription, defaultTitle } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { getAllCoversMetadata, getGameCoverURL } from "./GamesMenuPage.adapters";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { GamesMenuButtonsPanel } from "./GamesMenuButtonsPanel";


export const GamesMenuPage = () => {
	const [ selectedGameCover, setSelectedGameCover ] = useState<GalleryObject>(emptyGalleryObject);
	const [ gameCoversMetadata, setGameCoversMetadata ] = useState<GalleryMetadata[]>([]);
	const [ title, setTitle ] = useState<string>(defaultTitle);
	const [ description, setDescription ] = useState<string>(defaultDescription);

	useEffect(()=>{
		getAllCoversMetadata(setGameCoversMetadata);
	}, []);

	useEffect(()=>{
		if(selectedGameCover?.path) {
			getSelectedGameCoverData(selectedGameCover , setSelectedGameCover);
			updateGamePreviewData();
		}
	}, [selectedGameCover?.path]);

	const getSelectedGameCoverData = (
		selectedGameCover: GalleryObject,
		setSelectedGameCover: (selectedGameCover: GalleryObject) => void
	) => {
		getGameCoverURL(selectedGameCover).then(response => {
			const updatedSelectedGameCover: GalleryObject = {
				...selectedGameCover,
				data: response
			};

			setSelectedGameCover(updatedSelectedGameCover);
		});
	};

	const updateGamePreviewData = () => {
		const gameCoverPath = selectedGameCover.path;
		if(gameCoverPath) {
			getGamePreviewData(gameCoverPath, setTitle, setDescription);
		}
	};

	const objectReceiver = (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => {
		getGameCoverURL(objectMetadata).then(response => {
			const newObject: GalleryObject = {
				...objectMetadata,
				data: response
			};

			setObject(newObject);
		});
	};

	const onMoreButtonClick = () => {
		console.log("A", selectedGameCover);
	};

	const onPlayClick = () => {
		console.log("B");
	};

	const previewButtons = GamesMenuButtonsPanel({ onMoreButtonClick, onPlayClick});

	return(
		<>
			{selectedGameCover && <Gallery selectedObject={selectedGameCover}
				objectsMetadata={gameCoversMetadata}
				objectReceiver={objectReceiver}
				setSelectedObject={setSelectedGameCover}
				previewButtons={previewButtons}
				title={title}
				description={description}/>}
		</>
	);
};
