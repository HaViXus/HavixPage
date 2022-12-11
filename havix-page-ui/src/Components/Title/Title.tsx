import { TitleProps } from "./Title.interfaces";
import { StyledLinkTitle, StyledTitle } from "./Title.styles";

export const Title = (props: TitleProps) => {
	const baseApplicationPath = process.env.REACT_APP_DOMAIN;
	const link = baseApplicationPath + props.href;

	const getTitle = () => {
		const Title = props.isLink ? (
			<StyledLinkTitle href={link} size={props.size}>
				{props.text}
			</StyledLinkTitle>
		) : (
			<StyledTitle size={props.size}>
				{props.text}
			</StyledTitle>
		);

		return Title;
	};

	return (
		getTitle()
	);
};
