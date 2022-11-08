import React, { useEffect, useState } from "react";
import { getContent } from "../../Pages/Gallery/ContentHandler";
import { GalleryObject } from "../../Pages/Gallery/Gallery.interfaces";
import { ListImageProps } from "./List.interfaces";
import { StyledListImageContainer } from "./List.styles";

export const ListImage = (props: ListImageProps) => {
	const { objectReceiver, objectMetadata } = props;
	const [ object, setObject ] = useState<GalleryObject>();
	// const [imageURL, setImageURL] = useState<string>();

	// useEffect(() => {
	// 	if(props.imagePath){
	// 		axios.get(`/images?path=${props.imagePath}`, {responseType: "blob"}).then((response => {
	// 			const imageURL = URL.createObjectURL(response.data);
	// 			setImageURL(imageURL);
	// 		}));
	// 	}
	// }, [props.imagePath]);
	useEffect(()=>{
		objectReceiver(objectMetadata, setObject);
	}, [objectMetadata]);

	return(
		<StyledListImageContainer selected={props.selected} onClick={props.onClick}>
			{getContent(object)}
		</StyledListImageContainer>
	);

};
