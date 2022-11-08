import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultTitle, defaultDescription } from "../../Components/PreviewContainer/PreviewContainer.utils";
import { Gallery } from "../Gallery/Gallery";
import { GalleryObject, GalleryMetadata, PreviewFunctionProps } from "../Gallery/Gallery.interfaces";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { getAllPixelArtsMetadata, getPixelArtPreviewData, getPixelArtURI } from "./PixelArtMenuPage.adapters";


export const PixelArtMenuPage = () => {
	const navigate = useNavigate();
	const [ pixelArtSheet, setSelectedPixelArt ] = useState<GalleryObject>(emptyGalleryObject);
	const [ pixelArtsMetadata, setPixelArtsMetadata ] = useState<GalleryMetadata[]>([]);
	const [ title, setTitle ] = useState<string>(defaultTitle);
	const [ description, setDescription ] = useState<string>(defaultDescription);

	useEffect(()=>{
		getAllPixelArtsMetadata(setPixelArtsMetadata);
	}, []);

	useEffect(()=>{
		if(pixelArtSheet?.path) {
			getSelectedPixelArtData(pixelArtSheet , setSelectedPixelArt);
			updatePixelArtPreviewData();
		}
	}, [pixelArtSheet?.path]);

	const getSelectedPixelArtData = (
		selectedSpriteSheet: GalleryObject,
		setSelectedSpriteSheet: (selectedSpriteSheet: GalleryObject) => void
	) => {
		getPixelArtURI(selectedSpriteSheet).then(response => {
			const updatedSelectedGameCover: GalleryObject = {
				...selectedSpriteSheet,
				data: response
			};

			setSelectedSpriteSheet(updatedSelectedGameCover);
		});
	};

	const updatePixelArtPreviewData = () => {
		const spriteSheetPath = pixelArtSheet.path;
		if(spriteSheetPath) {
			getPixelArtPreviewData(pixelArtSheet, setTitle, setDescription);
		}
	};

	const objectReceiver = (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => {
		getPixelArtURI(objectMetadata).then(response => {
			const newObject: GalleryObject = {
				...objectMetadata,
				data: response
			};

			setObject(newObject);
		});
	};


	return (
		<Gallery selectedObject={pixelArtSheet}
			objectsMetadata={pixelArtsMetadata}
			objectReceiver={objectReceiver}
			setSelectedObject={setSelectedPixelArt}
			fullScreenOnPreviewClick={true}
			title={title}
			description={description}/>
	);
};