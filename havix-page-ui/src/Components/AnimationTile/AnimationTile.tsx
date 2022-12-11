import { useEffect, useRef, useState } from "react";
import { AnimationTileProps } from "./AnimationTile.interfaces";
import { StyledAnimationTile, TileImage } from "./AnimationTile.styles";
import { useResizeDetector } from "react-resize-detector";
import { getTileId } from "./AnimationTile.utils";

export const AnimationTile = (props: AnimationTileProps) => {
	const [forcedTileHeight, setForcedTileHeight] = useState<number>();
	const tileId = getTileId(props.animationData.number, props.animationData.path);
	const { width, height, ref } = useResizeDetector();
	const canvasRef = useRef(null);
	const spriteSheet = new Image();

	useEffect(() => {
		resizeTileToKeepAspectRatio(ref, width, height);
	}, [width, height]);

	useEffect(() => {
		initTile(props.imageURL);

		const interval = setInterval(() => {
			drawAnimation(props.backgroundColor);
		}, props.animationSpeed);
		return () => clearInterval(interval);
	}, [props.imageURL, props.animationSpeed, props.backgroundColor]);

	let animationFrame = 0, currentStartX = 0, lastRowYChangeFrame = 0, rowY = 0;

	const tileWidth = props.animationData.width;
	const tileHeight = props.animationData.height;
	const srcStartX = props.animationData.x;
	const srcStartY = props.animationData.y;

	const initTile = (imageURL: string) => {
		spriteSheet.src = imageURL;
		resetTileVariables();
	};

	const resetTileVariables = () => {
		currentStartX = srcStartX;
		animationFrame = 0;
		lastRowYChangeFrame = 0;
		rowY = 0;
	};

	const calculateSrcX = () => {
		const spriteSheetWidth = spriteSheet.width;
		const maxHorizontalFrames = Math.floor((spriteSheetWidth - currentStartX) / tileWidth);
		let frameInCurrentRow = animationFrame - lastRowYChangeFrame;

		if(frameInCurrentRow >= maxHorizontalFrames) {
			lastRowYChangeFrame = animationFrame;
			currentStartX = 0;
			frameInCurrentRow = 0;
			rowY += 1;
		}

		const srcX = currentStartX + frameInCurrentRow * tileWidth;
		return srcX;	
	};

	const calculateSrcY = () => {
		const srcY = srcStartY + rowY * tileHeight;
		return srcY;
	};

	const drawSpriteSheetFramePart = (ctx: CanvasRenderingContext2D) => {
		const srcX = calculateSrcX();
		const srcY = calculateSrcY();

		ctx.drawImage(spriteSheet, srcX, srcY, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
	};

	const refreshTile = (ctx: CanvasRenderingContext2D, backgroundColor: string) => {
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, tileWidth, tileHeight);
	};

	const updateFrameValue = () => {
		const maxFrameValue = props.animationData.frames - 1;
		if(animationFrame >= maxFrameValue){
			resetTileVariables();
		} else {
			animationFrame += 1;
		}
	};

	const drawAnimation = (backgroundColor: string) => {
		const canvas = canvasRef.current as HTMLCanvasElement;
		
		if (canvas?.getContext) {
			const ctx = canvas.getContext("2d");
			refreshTile(ctx, backgroundColor);
			drawSpriteSheetFramePart(ctx);
			updateFrameValue();
		}
	};

	const resizeTileToKeepAspectRatio = (ref: React.MutableRefObject<HTMLCanvasElement>, width: number, height: number) => {
		if(width < height) {
			setForcedTileHeight(width);
		} else if(width > forcedTileHeight) {
			setForcedTileHeight(width);
		}
	};

	const onTileClick = () => {
		props?.onTileClick(tileId);
	};

	const onHoverBegin = () => {
		props?.onHoverBegin(tileId);
	};

	const onHoverEnd = () => {
		props?.onHoverEnd(tileId);
	};

	return(
		<StyledAnimationTile ref={ref} 
			isSelected={props.isSelected}
			isHovered={props.isHovered}
			height={forcedTileHeight}
		>
			<TileImage ref={canvasRef}
				id={tileId}
				width={props.animationData.width}
				height={props.animationData.height}
				imageURL={props.imageURL}
				animationData={props.animationData}
				onClick={onTileClick}
				onMouseEnter={onHoverBegin}
				onMouseOut={onHoverEnd}
			/>
		</StyledAnimationTile>
	);
};
