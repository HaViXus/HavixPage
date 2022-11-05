export interface ListProps {
	dataPath: string;
	onSelect: (objectPath: string)=>void;
	selectedPosition?: string;
	externalLeftButtonRef?: any;
	externalRightButtonRef?: any;
} 

export interface ListImageProps {
	imagePath: string;
	onClick: () => void;
	selected: boolean;
}

export enum Direction {
	Left = -1,
	Right = 1
}
