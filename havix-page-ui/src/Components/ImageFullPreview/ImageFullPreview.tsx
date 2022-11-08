import React, { useEffect } from "react";
import { ImageFullPreviewProps } from "./ImageFullPreview.interfaces";
import { StyledArrowIconContainer, StyledImage, StyledImageFullPreview, StyledImageFullPreviewContainer, StyledXMarkIconContainer } from "./ImageFullPreview.styles";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getContent } from "../../Pages/Gallery/ContentHandler";

export const ImageFullPreview = (props: ImageFullPreviewProps) => {

	useEffect(() => {
		document.addEventListener("keydown", handleKeyClick);
		return() => {
			document.addEventListener("keydown", handleKeyClick);
		};
	}, []);

	const handleKeyClick = (event) => {
		switch(event.key){
		case "Escape":
			closePreview();
			break;
		}
	};

	const closePreview = () => {
		props.onClose();
	};

	const onClick = () => {
		closePreview();
	};

	const arrowsButtonsOffset = -1;

	return (
		<StyledImageFullPreviewContainer isVisible={props.isVisible}>
			<StyledImageFullPreview>
				{getContent(props.selectedObject)}
				<StyledXMarkIconContainer onClick={onClick}>
					<FontAwesomeIcon icon={faXmark} />
				</StyledXMarkIconContainer>

				{props.externalLeftButtonRef && <StyledArrowIconContainer ref={props.externalLeftButtonRef} left={arrowsButtonsOffset}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</StyledArrowIconContainer>}

				{props.externalRightButtonRef && <StyledArrowIconContainer ref={props.externalRightButtonRef} right={arrowsButtonsOffset}>
					<FontAwesomeIcon icon={faChevronRight} />
				</StyledArrowIconContainer>}
				
			</StyledImageFullPreview>
		</StyledImageFullPreviewContainer>
	);
};
