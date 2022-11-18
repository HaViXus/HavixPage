import { AnimationTileData } from "../../Pages/SpriteSheetPage/SpriteSheetPage.interfaces";
import { Vector2D, RegionOptions, RegionLine } from "./SpriteSheetPreview.interfaces";

const OFFSET = 1;

const drawLine = (ctx, start: Vector2D<number>, end: Vector2D<number>, color: string) => {
	ctx.beginPath();
	ctx.moveTo(start.x, start.y);
	ctx.lineTo(end.x, end.y);
	ctx.strokeStyle = color;
	ctx.lineWidth = OFFSET;
	ctx.stroke();
};

const drawVerticalLine = (ctx, start: Vector2D<number>, height: number, color: string) => {
	const endY = start.y + height + OFFSET;
	const end: Vector2D<number> = {x: start.x, y: endY};
	drawLine(ctx, start, end, color);
};

const drawLineRegion = (ctx, start: Vector2D<number>, end: Vector2D<number>, options: RegionOptions, color: string) => {
	if(options.isStart) {
		const height = end.y - start.y;
		drawVerticalLine(ctx, start, height, color);
	}
	if(options.isEnd) {
		const height = end.y - start.y;
		const startOfEndLine: Vector2D<number> = {x: end.x, y: start.y};
		drawVerticalLine(ctx, startOfEndLine, height, color);
	}

	//top line
	const topLineEnd: Vector2D<number> = {x: end.x, y: start.y};
	drawLine(ctx, start, topLineEnd, color);

	//bottom line
	const bottomLineStart: Vector2D<number> = {x: start.x, y: end.y};
	drawLine(ctx, bottomLineStart, end, color);
};

const getAbsoluteLineRegionsEndPosition = (spriteSheet: HTMLImageElement, animationData: AnimationTileData) => {
	const imageWidth = spriteSheet.width;
	const regionLength = animationData.frames * animationData.width;
	
	const firstRowLength = imageWidth - animationData.x;

	const regionLengthToSlice = regionLength - firstRowLength;

	if(regionLengthToSlice > 0) {
		const lineRegionNumber = 1 + Math.ceil(regionLengthToSlice / spriteSheet.width); 
		const endX = regionLengthToSlice % imageWidth;
		const endY = animationData.y + lineRegionNumber * animationData.height;

		const regionEnd: Vector2D<number> = {x: endX, y: endY};
		return regionEnd;
	} else {
		const endX = animationData.x + regionLength;
		const endY = animationData.y + animationData.height;

		const regionEnd: Vector2D<number> = {x: endX, y: endY};
		return regionEnd;
	}
};

const getLineRegions = (spriteSheet: HTMLImageElement, animationData: AnimationTileData) => {
	const height = animationData.height;
	const lineRegions: RegionLine[] = [];

	const absoluteEndPosition = getAbsoluteLineRegionsEndPosition(spriteSheet, animationData);
	const lineRegionNumber = (absoluteEndPosition.y - animationData.y) / animationData.height;

	const topOffset = Math.max(OFFSET - 1, 0);

	if(lineRegionNumber === 1) {
		const newRegion: RegionLine = {
			start: {x: animationData.x, y: animationData.y - topOffset},
			end: {x: absoluteEndPosition.x + 1, y: absoluteEndPosition.y + 1},
			options: {isStart: true, isEnd: true}
		};

		lineRegions.push(newRegion);
	} else {
		for(let rowIndex = 0; rowIndex<lineRegionNumber; rowIndex++) {
			const isFirstRow = rowIndex === 0;
			const isLastRow = rowIndex === lineRegionNumber - 1;

			if(isFirstRow) {
				const newRegion: RegionLine = {
					start: {x: animationData.x, y: animationData.y - topOffset},
					end: {x: spriteSheet.width + 1, y: animationData.y + height + 1},
					options: {isStart: true, isEnd: false}
				};
	
				lineRegions.push(newRegion);
			} else if(isLastRow) {
				const newRegion: RegionLine = {
					start: {x: 0, y: absoluteEndPosition.y - height - topOffset},
					end: {x: absoluteEndPosition.x + 1, y: absoluteEndPosition.y + 1},
					options: {isStart: false, isEnd: true}
				};
	
				lineRegions.push(newRegion);
			} else {
				const topLineY = animationData.y + rowIndex * height;
				const newRegion: RegionLine = {
					start: {x: 0, y: topLineY - topOffset},
					end: {x: spriteSheet.width + 1, y: topLineY + height + 1},
					options: {isStart: false, isEnd: false}
				};
	
				lineRegions.push(newRegion);
			}
		}
	}

	return lineRegions;
};

export const drawRegionByAnimationData = (ctx, spriteSheet, animationData: AnimationTileData, color: string) => {
	const regions = getLineRegions(spriteSheet, animationData);
	regions.forEach(region => {
		drawLineRegion(ctx, region.start, region.end, region.options, color);
	});
};

export const refreshPreview = (ctx, spriteSheet) => {
	ctx.clearRect(0, 0, spriteSheet.width, spriteSheet.height);
	ctx.drawImage(spriteSheet, OFFSET, OFFSET, spriteSheet.width, spriteSheet.height);
};