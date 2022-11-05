import { useEffect, useState } from "react";

export enum MouseButton {
	Left = 0,
	Right = 2
}

export enum ButtonState {
	Up,
	Down
}

const isCorrectMouseKey = (event, correctButton: MouseButton) => correctButton === undefined || event.button == correctButton;

export const useMouseClick = function(targetRef, mouseButton?: MouseButton) {
	const [objectClicked, setObjectClicked] = useState(false);
  
	const getButtonHandler = (buttonState: ButtonState) => {
		const buttonHandler = (event) => {
			const correctButton = isCorrectMouseKey(event, mouseButton);
			if (correctButton && targetRef?.current.contains(event.target)) {
				setObjectClicked(buttonState === ButtonState.Down);
			}
		};
		
		return buttonHandler;
	};
  
	useEffect(() => {
		const buttonDownHandler = getButtonHandler(ButtonState.Down);
		const buttonUpHandler =  getButtonHandler(ButtonState.Up);

		window.addEventListener("mousedown", buttonDownHandler);
		window.addEventListener("mouseup", buttonUpHandler);
  
		return () => {
			window.removeEventListener("mousedown", buttonDownHandler);
			window.removeEventListener("mouseup", buttonUpHandler);
		};
	});
  
	return objectClicked;
};