import { faDownload, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "../../Components/IconButton/IconButton";
import { LocationPath } from "../../Components/NavigationPath/NavigationPath";
import { TextHTML } from "../../Components/TextHTML/TextHTML";
import { Title } from "../../Components/Title/Title";
import { Gallery } from "../Gallery/Gallery";
import { GalleryMetadata, GalleryObject, GalleryObjectType } from "../Gallery/Gallery.interfaces";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { getAllGameImagesMetadata, getAllGameMoviesMetadata, getGameData, getGameImage } from "./GameDetailsPage.adapters";
import { GameData } from "./GameDetailsPage.interfaces";
import { ButtonContainer, Content, DescriptionAndPlayContainer, PlayNowContainer, PlayNowTextContainer, StandardTextContainer, StyledGallery, StyledGameDetails, TitleWrapper } from "./GameDetailsPage.styles";

export const GameDetailsPage = () => {
	const navigate = useNavigate();
	const params = useParams();
	const gameName = params.id;
	const [selectedObject, setSelectedObject] = useState<GalleryObject>(emptyGalleryObject);
	const [objectsMetadata, setObjectsMetadata] = useState<GalleryMetadata[]>([]);
	const [gameData, setGameData] = useState<GameData>();


	useEffect(()=>{
		getAllGameImagesMetadata(gameName).then(imagesMetadata => {
			getAllGameMoviesMetadata(gameName, imagesMetadata, setObjectsMetadata);
		});

		getGameData(gameName).then(response => {
			setGameData(response);
		});
	},[]);

	useEffect(()=>{
		const isSelectedObjectUpDirty = selectedObject && !selectedObject.data && selectedObject.path;
		if(isSelectedObjectUpDirty){
			objectReceiver(selectedObject, setSelectedObject);
		}
		
	},[selectedObject]);

	const objectReceiver = (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => {
		if(objectMetadata.type === GalleryObjectType.image) {
			getGameImage(gameName, objectMetadata).then(response => {
				const updatedSelectedObject: GalleryObject = {
					...objectMetadata,
					data: response
				};
				setObject(updatedSelectedObject);
			});
		} else if(objectMetadata.type === GalleryObjectType.movie) {
			const updatedSelectedObject: GalleryObject = {
				...objectMetadata
			};
			setObject(objectMetadata);
		}
	};

	const onButtonClick = () => {
		if(gameData?.available) {
			const gamePath = `/Games/${gameName}`;
			navigate(gamePath);
		}
	};

	const isGameAvailable = gameData?.available;
	const playNowText = isGameAvailable ? "Play now: " : "Download: ";
	const playNowButtonText = isGameAvailable ? "Play" : "Download";

	const PlayNowButton = () => <IconButton text={playNowButtonText}
		onClick={onButtonClick} 
		backgroundColor={["#a70000", "#880000"]}
		iconColor={["#ffffff", "#d7d7d7"]}
	/>;

	

	return (
		<PageTemplate>
			<StyledGameDetails>
				<LocationPath />
				<Content>
					<TitleWrapper>
						<Title text={gameData?.name}/>
					</TitleWrapper>
					<StyledGallery>
						<Gallery selectedObject={selectedObject}
							objectsMetadata={objectsMetadata}
							setSelectedObject={setSelectedObject}
							objectReceiver={objectReceiver}
							fullScreenOnPreviewClick={true}
							isPreviewPanel={false}
						/>
					</StyledGallery>
					<DescriptionAndPlayContainer>
						<Title text={"Description"} size={2}/>
						<PlayNowContainer>
							<PlayNowTextContainer>
								<Title text={playNowText} size={2}/>
							</PlayNowTextContainer>
							<ButtonContainer>
								{PlayNowButton()}
							</ButtonContainer>
						</PlayNowContainer>
					</DescriptionAndPlayContainer>
					<StandardTextContainer>
						<TextHTML text={gameData?.fullDescription}/>
					</StandardTextContainer>
					<TitleWrapper>
						<Title text={"Controls"} size={2}/>
					</TitleWrapper>
					<StandardTextContainer>
						<TextHTML text={gameData?.controls}/>
					</StandardTextContainer>
					<TitleWrapper>
						<Title text={"Requirements"} size={2}/>
					</TitleWrapper>
					<StandardTextContainer>
						<TextHTML text={gameData?.requirements}/>
					</StandardTextContainer>
				</Content>
			</StyledGameDetails>
		</PageTemplate>
	);
};