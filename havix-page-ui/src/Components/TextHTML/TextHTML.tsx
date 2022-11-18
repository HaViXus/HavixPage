import { TextHTMLProps } from "./TextHTML.interfaces";
import { StyledTextHTML } from "./TextHTML.styled";
import DOMPurify from "dompurify";

export const TextHTML = (props: TextHTMLProps) => {
	const sanitizedText = DOMPurify.sanitize(props?.text);
	const formattedText = <div dangerouslySetInnerHTML={{ __html: sanitizedText}} />;

	return (
		<StyledTextHTML>
			{formattedText}
		</StyledTextHTML>
	);
};
