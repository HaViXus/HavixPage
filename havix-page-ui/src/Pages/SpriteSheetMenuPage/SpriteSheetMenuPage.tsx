import { useEffect, useState } from "react";
import { defaultDescription, defaultTitle } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { Gallery } from "../Gallery/Gallery";
import { GalleryObject, GalleryMetadata, PreviewFunctionProps } from "../Gallery/Gallery.interfaces";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { getAllSpriteSheetsMetadata, getSpriteSheetPreviewData, getSpriteSheetURI } from "./SpriteSheetMenuPage.adapters";
import { useNavigate } from "react-router-dom";

export const SpriteSheetMenuPage = () => {
	const navigate = useNavigate();
	const [ selectedSpriteSheet, setSelectedSpriteSheet ] = useState<GalleryObject>(emptyGalleryObject);
	const [ spriteSheetsMetadata, setSpriteSheetsMetadata ] = useState<GalleryMetadata[]>([]);
	const [ title, setTitle ] = useState<string>(defaultTitle);
	const [ description, setDescription ] = useState<string>(defaultDescription);

	useEffect(()=>{
		getAllSpriteSheetsMetadata(setSpriteSheetsMetadata);
	}, []);

	useEffect(()=>{
		if(selectedSpriteSheet?.path) {
			getSelectedSpriteSheetData(selectedSpriteSheet , setSelectedSpriteSheet);
			updateSpriteSheetPreviewData();
		}
	}, [selectedSpriteSheet?.path]);

	const getSelectedSpriteSheetData = (
		selectedSpriteSheet: GalleryObject,
		setSelectedSpriteSheet: (selectedSpriteSheet: GalleryObject) => void
	) => {
		getSpriteSheetURI(selectedSpriteSheet).then(response => {
			const updatedSelectedGameCover: GalleryObject = {
				...selectedSpriteSheet,
				data: response
			};

			setSelectedSpriteSheet(updatedSelectedGameCover);
		});
	};

	const updateSpriteSheetPreviewData = () => {
		const spriteSheetPath = selectedSpriteSheet.path;
		if(spriteSheetPath) {
			getSpriteSheetPreviewData(selectedSpriteSheet, setTitle, setDescription);
		}
	};

	const objectReceiver = (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => {
		getSpriteSheetURI(objectMetadata).then(response => {
			const newObject: GalleryObject = {
				...objectMetadata,
				data: response
			};

			setObject(newObject);
		});
	};

	const onSpriteSheetPreviewClick = () => {
		const spriteSheetPage = `/Gallery/SpriteSheets/${selectedSpriteSheet.path}`;
		navigate(spriteSheetPage);
	};

	return (
		<Gallery selectedObject={selectedSpriteSheet}
			objectsMetadata={spriteSheetsMetadata}
			objectReceiver={objectReceiver}
			setSelectedObject={setSelectedSpriteSheet}
			onPreviewClick={onSpriteSheetPreviewClick}
			title={title}
			description={description}/>
	);
};

