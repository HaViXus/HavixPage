import { useRef } from "react";
import { useOutsideClick } from "../../Utils/useOutsideClick";
import { AnimationTileSettingsMenuProps } from "./AnimationTileSettingsMenu.interfaces";
import { SettingsContainer } from "./AnimationTileSettingsMenu.styles";

export const AnimationTileSettingsMenu = (props: AnimationTileSettingsMenuProps) => {
	// const ref = useRef();
	
	// const onOutsideMenuClick = (_event: any) => {
	// 	props.toggle(false);
	// };

	// useOutsideClick(ref, onOutsideMenuClick);

	return (
		//Style absolute is here as hack for nes library container template. Without absolute - white borders will disappear. 
		props.isShowing && <SettingsContainer //ref={ref} 
			className="nes-container is-dark is-rounded" 
			style={{position: "absolute"}}
		>
			{props.items}
		</SettingsContainer>
	);
};
