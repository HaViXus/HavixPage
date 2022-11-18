/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Gallery } from "../Gallery/Gallery";
import { GalleryMetadata, GalleryObject } from "../Gallery/Gallery.interfaces";
import { getGamePreview as getGamePreviewData } from "./GamesMenuPage.adapters";
import { defaultDescription, defaultTitle } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { getAllCoversMetadata, getGameCoverURL } from "./GamesMenuPage.adapters";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { GamesMenuButtonsPanel } from "./GamesMenuButtonsPanel";
import { useNavigate } from "react-router-dom";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { GameData } from "../GameDetailsPage/GameDetailsPage.interfaces";
import { getGameData } from "../GameDetailsPage/GameDetailsPage.adapters";
import { createDownloadLink } from "../../Utils/createDownloadLink";


export const GamesMenuPage = () => {
	const navigate = useNavigate();
	const [ selectedGameCover, setSelectedGameCover ] = useState<GalleryObject>(emptyGalleryObject);
	const [ gameCoversMetadata, setGameCoversMetadata ] = useState<GalleryMetadata[]>([]);
	const [ title, setTitle ] = useState<string>(defaultTitle);
	const [ description, setDescription ] = useState<string>(defaultDescription);
	const [ gameData, setGameData ] = useState<GameData>();

	const gameName = selectedGameCover?.path?.split("/")?.[0];

	useEffect(()=>{
		getAllCoversMetadata(setGameCoversMetadata);
	}, []);

	useEffect(()=>{
		if(selectedGameCover?.path) {
			getSelectedGameCoverData(selectedGameCover , setSelectedGameCover);
			updateGamePreviewData();
			getGameData(gameName).then(response => {
				setGameData(response);
			});
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
		const gameDetailsPath = `/Games/details/${gameName}`;
		navigate(gameDetailsPath);
	};

	const onPlayClick = () => {
		if(gameData?.available){
			const gamePath = `/Games/${gameName}`;
			navigate(gamePath);
		} else {
			fetch(`http://localhost:8082/games/getGameFile?gameName=${gameName}.rar`)
				.then(response => {
					response.blob().then(blob => {
						const fileName = `${gameName}.rar`;
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.href = url;
						a.download = fileName;
						a.click();
					});
				});		

			//navigate(`/games/getGameFile?gameName=${gameName}.rar`);
		}
	};

	const previewButtons = GamesMenuButtonsPanel({ onMoreButtonClick, onPlayClick, isAvailable: gameData?.available});

	return(
		<PageTemplate>
			{selectedGameCover && <Gallery selectedObject={selectedGameCover}
				objectsMetadata={gameCoversMetadata}
				objectReceiver={objectReceiver}
				setSelectedObject={setSelectedGameCover}
				previewButtons={previewButtons}
				title={title}
				description={description}/>}
		</PageTemplate>
	);
};
