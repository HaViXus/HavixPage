import { ReactNode } from "react";

export interface SettingsMenuItemProps {
	optionName: string;
	baseComponent: ReactNode;
	optionalComponent?: ReactNode;
}