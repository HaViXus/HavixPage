export const getTileId = (number: number, path: string) => `canvas_${number}_${path}`;

export const getNumberFromTileId = (tileId: string) => {
	const number = tileId.split("_")?.[1];
	return number;
};

export const getPathFromTileId = (tileId: string) => {
	const path = tileId.split("_")?.[2];
	return path;
};
