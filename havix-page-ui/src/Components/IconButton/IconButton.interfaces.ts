import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ComponentColor = [normal: string, hover: string];

export enum ButtonNESTemplate {
	blue = "nes-btn is-primary",
	green = "nes-btn is-success",
	yellow = "nes-btn is-warning",
	red = "nes-btn is-error",
	disabled = "nes-btn is-disabled",
	default = "nes-btn",
	none = ""
}

export interface IconButtonProps {
	iconDefinition?: IconDefinition;
	icon?: ReactNode;
	onClick?: () => void;
	backgroundColor?: ComponentColor;
	iconColor?: ComponentColor;
	text?: string;
	nesTemplate?: ButtonNESTemplate;
}
