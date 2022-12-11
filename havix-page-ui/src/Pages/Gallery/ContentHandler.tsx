import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledImage } from "../../Components/ImageFullPreview/ImageFullPreview.styles";
import { GalleryObject, GalleryObjectType } from "./Gallery.interfaces";
import { MoviePreviewIconContainer, MoviePreviewImageContainer } from "./Gallery.styles";

const getImage = (object: GalleryObject) => {
	return object.data ? <StyledImage src={object.data}/> :  <></>;
};

const MoviePreview = (props: {object: GalleryObject}) => {
	const { object } = { ...props };
	const movieUrlParts = object.path?.split("/");
	const lastUrlPartIndex = (movieUrlParts?.length || 0) - 1;
	const movieId = lastUrlPartIndex && movieUrlParts?.[lastUrlPartIndex];
	

	return (
		movieId ? (
			<MoviePreviewImageContainer>
				<StyledImage src={`https://img.youtube.com/vi/${movieId}/mqdefault.jpg`}/>
				<MoviePreviewIconContainer>
					<FontAwesomeIcon icon={faPlay}/>
				</MoviePreviewIconContainer>
			</MoviePreviewImageContainer>
			
		) : (
			<></>
		)
	);
};

export const getContent = (object: GalleryObject) => {
	if(object && object.type === GalleryObjectType.image) {
		return getImage(object);
	} else if(object && object.type === GalleryObjectType.movie) {
		return <MoviePreview object={object}/>;//getMoviePreview(object);
	} else {
		return <></>;
	}
};