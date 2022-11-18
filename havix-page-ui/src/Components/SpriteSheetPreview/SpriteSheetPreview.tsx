import { useEffect, useState } from "react";
import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";
import { useZoom } from "../../Utils/useZoom";
import { ZoomPanel } from "../ZoomPanel/ZoomPanel";
import { drawRegionByAnimationData, refreshPreview } from "./PreviewCanvasController";
import { SpriteSheetPreviewProps, Vector2D } from "./SpriteSheetPreview.interfaces";
import { StyledImage, StyledImageContainer, StyledImagePreviewContainer } from "./SpriteSheetPreview.styles";

export const SpriteSheetPreview = (props: SpriteSheetPreviewProps) => {
	const {imageZoom, calculateDefaultZoom, onZoomOnClick, onZoomOutClick, onDefaultZoomClick} = useZoom();
	const [ imageSize, setImageSize ] = useState<Vector2D<number>>({x:0, y:0});
	const [ canvasRef, setCanvasRef ] = useState<HTMLCanvasElement>();
	const offset = 1;
	const marginOffset = 2 * offset;

	useEffect(() => {
		if(canvasRef){
			render(canvasRef);
		}
	},[props.imageURL, canvasRef, props.selectedTileData, props.hoveredTileData]);

	const render = (canvasRef: HTMLCanvasElement) => {	
		const spriteSheet = new Image();
		spriteSheet.src = props.imageURL;
		spriteSheet.onload = () => {
			renderImage(spriteSheet, canvasRef);
		};
	};

	const renderImage = (spriteSheet: HTMLImageElement, canvasRef:HTMLCanvasElement) => {
		handleCanvasZoom(spriteSheet, canvasRef);
		const imageSize: Vector2D<number> = {x: spriteSheet.width, y: spriteSheet.height};
		setImageSize(imageSize);

		const isSelected = !!props.selectedTileData;
		const isHovered = !!props.hoveredTileData;
		drawContent(spriteSheet, isSelected, isHovered);
	};

	const handleCanvasZoom = (spriteSheet: HTMLImageElement, canvasRef: HTMLCanvasElement) => {
		const { offsetHeight, offsetWidth } = spriteSheet;
		
		const imageContainer = canvasRef.parentNode as HTMLDivElement;
		const containerWidth = imageContainer.getBoundingClientRect().width;
		const containerHeight = imageContainer.getBoundingClientRect().height;

		calculateDefaultZoom(offsetWidth, offsetHeight, containerWidth, containerHeight);
	};
	
	const drawContent = (spriteSheet, isSelected: boolean, isHovered: boolean) => {
		const canvas = canvasRef;
		if (canvas?.getContext) {
			const ctx = canvas.getContext("2d");
			refreshPreview(ctx, spriteSheet);
			if(isHovered) {
				drawRegionByAnimationData(ctx, spriteSheet, props.hoveredTileData, "blue");
			}
			if(isSelected) {
				drawRegionByAnimationData(ctx, spriteSheet, props.selectedTileData, "red");
			}
		}
	};

	const handleCanvasRef = (newRef: HTMLCanvasElement) => {
		setCanvasRef(newRef);
	};

	return(
		<StyledImagePreviewContainer>
			<StyledImageContainer >
				{props.imageURL && <StyledImage 
					ref={handleCanvasRef}
					width={imageSize.x + marginOffset}
					height={imageSize.y + marginOffset}
					zoom={imageZoom}
				/>}
			</StyledImageContainer>
			<ZoomPanel onDefaultZoomClick={onDefaultZoomClick} onZoomOnClick={onZoomOnClick} onZoomOutClick={onZoomOutClick}/>
		</StyledImagePreviewContainer>
	);
};
