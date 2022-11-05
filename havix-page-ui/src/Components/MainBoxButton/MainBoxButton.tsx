import React, { useEffect, useState } from "react";
import { getBoxImage } from "./MainBoxButton.adapters";
import { MainBoxButtonProps } from "./MainBoxButton.interfaces";
import { BoxButtonFooter, BoxButtonTitle, BoxFooterBackground, HoverEffectContainer, MainBoxButtonStyled, StyledImage } from "./MainBoxButton.styles";

export const MainBoxButton = (props: MainBoxButtonProps) => {
	const [thumbnailURL, setThumbnailURL] = useState<string>();
	const [imageURL, setImageURL] = useState<string>();
	const [isThumbnailLoaded, setIsThumbnailLoaded] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const createThumbnailURL = (imagePath: string) => {
		const indexOfSlice = imagePath.lastIndexOf("/");
		const pathToImage = imagePath.substring(0, indexOfSlice);
		const imageName = imagePath.substring(indexOfSlice + 1);
		const thumbnailPath = pathToImage + "/min/" + imageName;
		
		getBoxImage(thumbnailPath, setThumbnailURL);
	};
	
	useEffect(()=>{
		if(props.imagePath){
			createThumbnailURL(props.imagePath);
		}
	}, [props.imagePath]);

	useEffect(() => {
		if(props.imagePath){
			getBoxImage(props.imagePath, setImageURL);
		}
	}, [thumbnailURL]);

	const onThumbnailLoad = () => setIsThumbnailLoaded(true);

	const onImageLoad = () => setIsLoaded(true);

	return(
		<MainBoxButtonStyled onClick={props.onClick} meanImageColor={props.meanImageColor}>
			{thumbnailURL && !imageURL && <StyledImage src={thumbnailURL}
				onLoad={onThumbnailLoad} 
				isLoaded={isThumbnailLoaded}
				isBlurred={true}
			/>}
			{imageURL && <StyledImage src={imageURL}
				onLoad={onImageLoad} 
				isLoaded={isLoaded}
				isBlurred={false}
			/>}
			<HoverEffectContainer/>
			<BoxButtonFooter>
				<BoxFooterBackground/>
				<BoxButtonTitle>
					{props.title}
				</BoxButtonTitle>
			</BoxButtonFooter>
		</MainBoxButtonStyled>
	);
};
