import { TitleProps } from "./Title.interfaces";
import { StyledTitle } from "./Title.styles";

export const Title = (props: TitleProps) => {
	return (
		<StyledTitle size={props.size}>
			{props.text}
		</StyledTitle>
	);
};
