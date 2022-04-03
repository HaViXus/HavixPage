import React, { useEffect, useState } from "react";
import { getBoxImage } from "./MainBoxButton.adapters";
import { MainBoxButtonProps } from "./MainBoxButton.interfaces";
import { BoxButtonFooter, BoxButtonTitle, BoxFooterBackground, HoverEffectContainer, MainBoxButtonStyled, StyledImage } from "./MainBoxButton.styles";

export const MainBoxButton = (props: MainBoxButtonProps) => {
	const [imageURL, setImageURL] = useState<string>();
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	useEffect(()=>{
		getBoxImage(props.imagePath, setImageURL);
	}, [props.imagePath]);

	const onImageLoad = () => setIsLoaded(true);

	return(
		<MainBoxButtonStyled onClick={props.onClick} meanImageColor={props.meanImageColor}>
			{imageURL && <StyledImage src={imageURL} onLoad={onImageLoad} isLoaded={isLoaded}/>}
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
