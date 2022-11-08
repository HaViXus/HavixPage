import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ComponentColor = [normal: string, hover: string];

export interface IconButtonProps {
	icon?: IconDefinition;
	onClick: () => void;
	backgroundColor: ComponentColor;
	iconColor?: ComponentColor;
	text?: string;
}
