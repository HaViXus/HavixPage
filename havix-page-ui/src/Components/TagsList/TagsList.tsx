import { TagsListProps } from "./TagsList.interfaces";
import { StyledLink, StyledTag } from "./TagsList.styles";

export const TagsList = (props: TagsListProps) => {

	const getCurrentLocationHref = () => `${window.location.origin}${window.location.pathname}`;

	const getTags = () => {
		const extractedTags = props.tags?.split(";") || [];
		const tagsComponent = extractedTags.map((tag) => {
			const tagLinkBase = props.redirectLinkBase || getCurrentLocationHref();
			const tagLink = `${tagLinkBase}?tags=${tag}`;

			return (
				<StyledLink key={tag} href={tagLink}>
					<StyledTag className="nes-btn">{tag}</StyledTag>
				</StyledLink>
			);
		});

		return tagsComponent;
	};


	return (
		<>
			{getTags()}
		</>
	);
};
