import { SettingsMenuItemProps } from "../../Components/AnimationTileSettingsMenu/SettingsMenuItem/SettingsMenuItem.interfaces";
import { SettingsMenuItem } from "../../Components/AnimationTileSettingsMenu/SettingsMenuItem/SettingsMenuItem";
import { SettingsProps } from "./SpriteSheetPage.interfaces";
import { ColorPicker } from "../../Components/ColorPicker/ColorPicker";
import RangeSlider from "react-bootstrap-range-slider";
import { ChangeEvent} from "react";

export const SpriteSheetPageSettingsDefinition = (props: SettingsProps) => {
	const onAnimationSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.setAnimationSpeed(parseInt(event.target.value));
	};

	const settingsItemsProps: SettingsMenuItemProps[] = [
		{
			optionName: "Background color",
			baseComponent: <ColorPicker color={props.backgroundColor} onColorChange={props.setBackgroundColor}/>
		},
		{
			optionName: "Animation speed (ms)",
			baseComponent:  <RangeSlider
				value={props.animationSpeed}
				onChange={onAnimationSpeedChange}
				min={1}
				max={350}/>
		}
	];

	return ( 
		<>
			{settingsItemsProps.map((itemProps: SettingsMenuItemProps, index: number) => (
				<SettingsMenuItem key={index}
					optionName={itemProps.optionName}
					baseComponent={itemProps.baseComponent}
					optionalComponent={itemProps.optionalComponent}/>
			))}
		</>
	);
};
