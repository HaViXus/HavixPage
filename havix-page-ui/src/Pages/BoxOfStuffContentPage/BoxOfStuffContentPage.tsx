import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationPath } from "../../Components/NavigationPath/NavigationPath";
import { RouterKeys } from "../../Components/Router/Router.interfaces";
import { routerPaths } from "../../Components/Router/RouterPaths";
import { TagsList } from "../../Components/TagsList/TagsList";
import { TextHTML } from "../../Components/TextHTML/TextHTML";
import { Title } from "../../Components/Title/Title";
import { StyledContentContainer } from "../../Components/Utils/StyledContentContainer";
import { formatDate } from "../../Utils/date";
import { Gallery } from "../Gallery/Gallery";
import { GalleryObject, GalleryMetadata, GalleryObjectType } from "../Gallery/Gallery.interfaces";
import { emptyGalleryObject } from "../Gallery/Gallery.utils";
import { Content, StandardTextContainer, StyledGallery, TitleWrapper } from "../GameDetailsPage/GameDetailsPage.styles";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { getAllPageImagesMetadata, getAllPageMoviesMetadata, getImage, getPageData } from "./BoxOfStuffContentPage.adapters";
import { PageData } from "./BoxOfStuffContentPage.interfaces";
import { StyledBottomSpace, StyledBoxOfStuffContentPage, StyledContent, StyledDate, StyledTagsContainer } from "./BoxOfStuffContentPage.styles";

export const BoxOfStuffContentPage = () => {
	const params = useParams();
	const contentId = params.id;
	const [selectedObject, setSelectedObject] = useState<GalleryObject>(emptyGalleryObject);
	const [objectsMetadata, setObjectsMetadata] = useState<GalleryMetadata[]>([]);
	const [pageData, setPageData] = useState<PageData>();

	const isGallery = objectsMetadata.length > 0;

	useEffect(()=>{
		getPageData(contentId).then(response => {
			setPageData(response);
		});
		getAllPageImagesMetadata(contentId).then(imagesMetadata => {
			getAllPageMoviesMetadata(contentId, imagesMetadata, setObjectsMetadata);
		});
	},[]);

	useEffect(()=>{
		const isSelectedObjectUpDirty = selectedObject && !selectedObject.data && selectedObject.path;
		if(isSelectedObjectUpDirty){
			objectReceiver(selectedObject, setSelectedObject);
		}
		
	},[selectedObject]);

	const objectReceiver = (objectMetadata: GalleryMetadata, setObject: (object: GalleryObject) => void) => {
		if(objectMetadata.type === GalleryObjectType.image) {
			getImage(contentId, objectMetadata).then(response => {
				const updatedSelectedObject: GalleryObject = {
					...objectMetadata,
					data: response
				};
				setObject(updatedSelectedObject);
			});
		} else if(objectMetadata.type === GalleryObjectType.movie) {
			setObject(objectMetadata);
		}
	};

	const tagHrefBaseLink = `${window.location.origin}${routerPaths[RouterKeys.BoxOfStuff].path}`;

	return (
		<PageTemplate>
			<StyledBoxOfStuffContentPage>
				<LocationPath removeLastPart={true}/>
				<Content>
					<TitleWrapper>
						<Title text={pageData?.title} size={3}/>
						<StyledDate>
							Created: {formatDate(pageData?.date)}
						</StyledDate>
					</TitleWrapper>
					{isGallery && <StyledGallery>
						<Gallery selectedObject={selectedObject}
							setSelectedObject={setSelectedObject}
							objectsMetadata={objectsMetadata}
							objectReceiver={objectReceiver}
							isPreviewPanel={false}
						/>
					</StyledGallery>}
					<StyledContentContainer>
						<StyledContent>
							<TextHTML text={pageData?.content}/>
						</StyledContent>
						<StyledTagsContainer>
							<TagsList tags={pageData?.tags} redirectLinkBase={tagHrefBaseLink}/>
						</StyledTagsContainer>
						<StyledBottomSpace/>
					</StyledContentContainer>
				</Content>
				
			</StyledBoxOfStuffContentPage>
		</PageTemplate>
	);
};
