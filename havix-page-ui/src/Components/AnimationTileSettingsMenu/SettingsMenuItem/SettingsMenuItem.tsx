import { SettingsMenuItemProps } from "./SettingsMenuItem.interfaces";
import { StyledBaseRow, StyledHalfOfBaseRow, StyledSettingsMenuItem } from "./SettingsMenuItem.styles";

export const SettingsMenuItem = (props: SettingsMenuItemProps) => {
	const textToDisplay = `${props.optionName}:`;

	return (
		<StyledSettingsMenuItem>
			<StyledBaseRow>
				<StyledHalfOfBaseRow>
					{textToDisplay}
				</StyledHalfOfBaseRow>
				<StyledHalfOfBaseRow>
					{props.baseComponent}
				</StyledHalfOfBaseRow>
			</StyledBaseRow>
			{props.optionalComponent}
		</StyledSettingsMenuItem>
	);
};
