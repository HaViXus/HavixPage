import { useRef } from "react";
import { useOutsideClick } from "../../Utils/useOutsideClick";
import { AnimationTileSettingsMenuProps } from "./AnimationTileSettingsMenu.interfaces";
import { SettingsContainer } from "./AnimationTileSettingsMenu.styles";

export const AnimationTileSettingsMenu = (props: AnimationTileSettingsMenuProps) => {
	const ref = useRef();
	
	const onOutsideMenuClick = (_event: any) => {
		props.toggle(false);
	};

	useOutsideClick(ref, onOutsideMenuClick);

	return (
		props.isShowing && <SettingsContainer ref={ref}>
			{props.items}
		</SettingsContainer>
	);
};
