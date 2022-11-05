import { useEffect, useState } from "react";

export const useZoom = () => {
	const zoomValueTable = [0.5, 0.75, 1, 1.5, 2, 2.5, 3, 5, 7, 10];
	const [zoomIndex, setZoomIndex] = useState<number>(2);
	const [imageZoom, setImageZoom] = useState<number>(zoomValueTable[zoomIndex]);
	const [defaultZoomIndex, setDefaultZoomIndex] = useState<number>();

	useEffect(()=>{
		setZoomIndex(defaultZoomIndex);
	},[defaultZoomIndex]);

	useEffect(()=>{
		setImageZoom(zoomValueTable[zoomIndex]);
	}, [zoomIndex]);

	const calculateDefaultZoom = (offsetWidth: number, offsetHeight: number, containerWidth: number, containerHeight: number) => {
		const horizontalRatio = offsetWidth /containerWidth ;
		const verticalRatio = offsetHeight / containerHeight;
		const ratioToUse = Math.min(horizontalRatio, verticalRatio);

		const maxZoomIndex = zoomValueTable.length - 1;
		const zoomToUseIndex = maxZoomIndex - zoomValueTable.reverse().findIndex(zoomValue => zoomValue <= ratioToUse);
		const finalZoomToUse = zoomToUseIndex === 10 ? 0 : zoomToUseIndex;
		setDefaultZoomIndex(finalZoomToUse);
	};

	const onZoomOnClick = () => {
		if(zoomIndex + 1 < zoomValueTable.length){
			setZoomIndex(zoomIndex + 1);
		}
	};

	const onZoomOutClick = () => {
		if(zoomIndex - 1 >= 0){
			setZoomIndex(zoomIndex - 1);
		}
	};

	const onDefaultZoomClick = () => {
		setZoomIndex(defaultZoomIndex);
	};

	return {imageZoom, calculateDefaultZoom, onZoomOnClick, onZoomOutClick, onDefaultZoomClick};
};
