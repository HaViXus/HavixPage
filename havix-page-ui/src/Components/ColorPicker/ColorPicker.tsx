import { ColorPickerProps } from "./ColorPicker.interfaces";
import { StyledColorPickerContainer, StyledColorPickerIcon, StyledPickerContainer, StyledPickerContainerWrapper } from "./ColorPicker.styles";
import { ChromePicker } from "react-color";
import { useOutsideClick } from "../../Utils/useOutsideClick";
import { useRef, useState } from "react";


export const ColorPicker = (props: ColorPickerProps) => {
	const [isShowing, setIsShowing] = useState<boolean>(false);
	const ref = useRef(null);

	const onClick = (isShowing) => {
		return (_event) => setIsShowing(!isShowing);
	};

	const outsideClick = (event) => {
		setIsShowing(false);
	};

	useOutsideClick(ref, outsideClick);

	const onChangeComplete = (color: any) => {
		props.onColorChange(color?.hex);
	};

	return (
		<StyledColorPickerContainer ref={ref}>
			<StyledColorPickerIcon color={props.color} onClick={onClick(isShowing)}/>
			<StyledPickerContainerWrapper>
				<StyledPickerContainer >
					{isShowing && <ChromePicker color={ props.color } onChange={ onChangeComplete }/>}
				</StyledPickerContainer>
			</StyledPickerContainerWrapper>
		</StyledColorPickerContainer>
	);
};
