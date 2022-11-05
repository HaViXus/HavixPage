import { ReactNode } from "react";


export interface AnimationTileSettingsMenuProps {
	items: ReactNode;
	isShowing: boolean;
	toggle: (state?: boolean) => void;
}
