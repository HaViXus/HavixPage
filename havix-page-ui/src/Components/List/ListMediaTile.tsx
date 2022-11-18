import React, { useEffect, useState } from "react";
import { getContent } from "../../Pages/Gallery/ContentHandler";
import { GalleryObject } from "../../Pages/Gallery/Gallery.interfaces";
import { ListImageProps } from "./List.interfaces";
import { StyledListImageContainer } from "./List.styles";

export const ListMediaTile = (props: ListImageProps) => {
	const { objectReceiver, objectMetadata } = props;
	const [ object, setObject ] = useState<GalleryObject>();
	
	useEffect(()=>{
		objectReceiver(objectMetadata, setObject);
	}, [objectMetadata]);

	return(
		<StyledListImageContainer selected={props.selected} onClick={props.onClick}>
			{getContent(object)}
		</StyledListImageContainer>
	);

};
