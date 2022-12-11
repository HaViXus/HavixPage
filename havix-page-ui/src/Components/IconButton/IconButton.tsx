import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonNESTemplate, ComponentColor, IconButtonProps } from "./IconButton.interfaces";
import { StyledIconButton } from "./IconButton.styles";

export const IconButton = (props: IconButtonProps) => {

	const getContent = () => {
		if(props.iconDefinition) {
			return <FontAwesomeIcon icon={props.iconDefinition}/>;
		} else if(props.icon) {
			return props.icon;
		} else {
			return props.text;
		}
	};

	const content = getContent(); //props.iconDefinition ? <FontAwesomeIcon icon={props.iconDefinition}/> : props.text;
	const emptyBackgroundColor: ComponentColor = ["", ""];

	const isTemplate = props.nesTemplate && props.nesTemplate.valueOf() !== ButtonNESTemplate.none.valueOf();
	const background = isTemplate ? emptyBackgroundColor : props.backgroundColor;

	return(
		<StyledIconButton type="button" className={props.nesTemplate} backgroundColor={background}
			onClick={props.onClick}
			iconColor={props.iconColor}
			isText={!!props.text}
		>
			{content}
		</StyledIconButton>
	);
};
