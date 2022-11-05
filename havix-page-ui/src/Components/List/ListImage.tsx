import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListImageProps } from "./List.interfaces";
import { StyledListImage, StyledListImageContainer } from "./List.styles";

export const ListImage = (props: ListImageProps) => {
	const [imageURL, setImageURL] = useState<string>();

	useEffect(() => {
		if(props.imagePath){
			axios.get(`/images?path=${props.imagePath}`, {responseType: "blob"}).then((response => {
				const imageURL = URL.createObjectURL(response.data);
				setImageURL(imageURL);
			}));
		}
	}, [props.imagePath]);

	return(
		<StyledListImageContainer selected={props.selected} onClick={props.onClick}>
			<StyledListImage src={imageURL}/>
		</StyledListImageContainer>
	);

};
