import { useZoom } from "../../Utils/useZoom";
import { ZoomPanel } from "../ZoomPanel/ZoomPanel";
import { SpriteSheetPreviewProps } from "./SpriteSheetPreview.interfaces";
import { StyledImage, StyledImageContainer, StyledImagePreviewContainer } from "./SpriteSheetPreview.styles";

export const SpriteSheetPreview = (props: SpriteSheetPreviewProps) => {
	const {imageZoom, calculateDefaultZoom, onZoomOnClick, onZoomOutClick, onDefaultZoomClick} = useZoom();

	const onImageLoad = ({ target: img }) => {
		const { offsetHeight, offsetWidth } = img;

		const imageContainer = img.parentNode as HTMLDivElement;
		const containerWidth = imageContainer.getBoundingClientRect().width;
		const containerHeight = imageContainer.getBoundingClientRect().height;
		console.log(offsetWidth, offsetHeight, containerWidth, containerHeight);

		calculateDefaultZoom(offsetWidth, offsetHeight, containerWidth, containerHeight);
	};

	return(
		<StyledImagePreviewContainer>
			<StyledImageContainer >
				{props.imageURL && <StyledImage 
					onLoad={onImageLoad}
					src={props.imageURL} 
					zoom={imageZoom}
				/>}
			</StyledImageContainer>
			<ZoomPanel onDefaultZoomClick={onDefaultZoomClick} onZoomOnClick={onZoomOnClick} onZoomOutClick={onZoomOutClick}/>
		</StyledImagePreviewContainer>
	);
};
