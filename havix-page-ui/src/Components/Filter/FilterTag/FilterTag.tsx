import { FilterTagProps } from "./FilterTag.interfaces";
import { StyledIconContainer, StyledTag, StyledTagContent } from "./FilterTag.styles";

export const FilterTag = (props: FilterTagProps) => {
	const isTagToDisplay = !!props.label;
	return (
		isTagToDisplay && <StyledTag href="#" className="nes-badge is-icon">
			<StyledIconContainer className="is-error" onClick={props.onDelete}>X</StyledIconContainer>
			<StyledTagContent className="is-warning">{props.label}</StyledTagContent>
		</StyledTag>
	);
};