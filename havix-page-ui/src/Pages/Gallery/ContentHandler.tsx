import { StyledImage } from "../../Components/ImageFullPreview/ImageFullPreview.styles";
import { GalleryObject, GalleryObjectType } from "./Gallery.interfaces";

const getImage = (object: GalleryObject) => {
	return object.data ? <StyledImage src={object.data}/> :  <></>;
};

export const getContent = (object: GalleryObject) => {
	if(object && object.type === GalleryObjectType.image) {
		return getImage(object);
	} else {
		return <></>;
	}
};