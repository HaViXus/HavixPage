import { useEffect, useState } from "react";
import { StandardTextContainer } from "../../Pages/GameDetailsPage/GameDetailsPage.styles";
import { formatDate } from "../../Utils/date";
import { TagsList } from "../TagsList/TagsList";
import { TextHTML } from "../TextHTML/TextHTML";
import { Title } from "../Title/Title";
import { getImage } from "./PageListItem.adapters";
import { ListItemData } from "./PageListItem.interfaces";
import { DateContainer, StyledContentContainer, StyledDetailsContainer, StyledImage, StyledImageContainer, StyledImageWrapper, StyledLink, StyledPageListItem } from "./PageListItem.styles";

export const PageListItem = (props: ListItemData) => {
	const [ imageURI, setImageURI ] = useState<string>();
	const titleLink = `BoxOfStuff/Content/${props.id}`;

	useEffect(() => {
		getImage(props.imageRequestPath).then(request => {
			setImageURI(request);
		});
	}, []);

	return(
		<StyledPageListItem>
			<StyledImageContainer>
				<StyledLink href={titleLink}/>
				{imageURI && <StyledImageWrapper>
					<StyledImage src={imageURI}/>
				</StyledImageWrapper>}
			</StyledImageContainer>
			<StyledContentContainer>
				<Title text={props.title}
					size={1.5} 
					isLink={true} 
					href={titleLink}/>
				<StandardTextContainer>
					<TextHTML text={props.shortDescription}/>
				</StandardTextContainer>
				<StyledDetailsContainer>
					<TagsList tags={props.tags} redirectLinkBase={props.tagRedirectHrefBase}/>
					<DateContainer>
						Created: {formatDate(props.date)}
					</DateContainer>
					
				</StyledDetailsContainer>
			</StyledContentContainer>
			

		</StyledPageListItem>
	);
};