import { Colors } from "../../ThemeContext/ThemeContext.styles";
import { IconButton } from "../IconButton/IconButton";
import { StyledButtonsPanel } from "./ZoomPanel.styled";
import { faPlus, faMinus, faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { ZoomPanelProps } from "./ZoomPanel.interfaces";


export const ZoomPanel = (props: ZoomPanelProps) => {
	return (
		<StyledButtonsPanel>
			<IconButton backgroundColor={[Colors.gray, Colors.lightGray]}
				iconColor={["#ffffff", "#d7d7d7"]}
				icon={faPlus}
				onClick={props.onZoomOnClick}
			/>
			<IconButton backgroundColor={[Colors.gray, Colors.lightGray]}
				iconColor={["#ffffff", "#d7d7d7"]}
				icon={faMinus}
				onClick={props.onZoomOutClick}
			/>
			<IconButton backgroundColor={[Colors.gray, Colors.lightGray]}
				iconColor={["#ffffff", "#d7d7d7"]}
				icon={faArrowsToDot}
				onClick={props.onDefaultZoomClick}
			/>
		</StyledButtonsPanel>
	);
};