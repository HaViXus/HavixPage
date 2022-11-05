import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getImageURL } from "../../Components/PreviewContainer/PreviewContainer.adapters";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { AnimationTileData, SettingsProps, SpriteSheetPageProps } from "./SpriteSheetPage.interfaces";
import { AnimationListContainer, AnimationsContainerSettings, StyledAnimationsContainer, StyledAnimationsContainerData, StyledAnimationsContainerHeader, StyledSpriteSheetContainer, StyledSpriteSheetPage, TitleContainer } from "./SpriteSheetPage.styles";
import { LocationPath } from "../../Components/NavigationPath/NavigationPath";
import { SpriteSheetPreview } from "../../Components/SpriteSheetPreview/SpriteSheetPreview";
import { getSpriteSheetAnimations } from "../../Components/SpriteSheetPreview/SpriteSheetPreview.adapters";
import { AnimationTile } from "../../Components/AnimationTile/AnimationTile";
import { IconButton } from "../../Components/IconButton/IconButton";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../ThemeContext/ThemeContext.styles";
import { AnimationTileSettingsMenu } from "../../Components/AnimationTileSettingsMenu/AnimationTileSettingsMenu";
import { SpriteSheetPageSettingsDefinition } from "./SpriteSheetPageSettingsDefinition";

export const SpriteSheetPage = (props: SpriteSheetPageProps) => {
	const params = useParams();
	const pageId = params.id;

	const DEFAULT_BACKGROUND_COLOR = Colors.darkGray;
	const DEFAULT_ANIMATION_SPEED = 75;

	const [imageURL, setImageURL] = useState<string>();
	const [animationsData, setAnimationsData] = useState<AnimationTileData[]>([]);
	const [showSettingsPanel, setShowSettingsPanel] = useState<boolean>(false);
	const [backgroundColor, setBackgroundColor] = useState<string>(DEFAULT_BACKGROUND_COLOR);
	const [animationSpeed, setAnimationSpeed] = useState<number>(DEFAULT_ANIMATION_SPEED);
	
	const getImageName = () => {
		const extensionPosition = pageId.lastIndexOf(".");
		const name = pageId.substring(0,extensionPosition);
		return name;
	};

	useEffect(()=>{
		getImageURL(`spriteSheet/${pageId}`, setImageURL);
		getSpriteSheetAnimations(pageId, setAnimationsData);
	}, []);

	const imageName = getImageName();

	const getAnimationTiles = (animationsData: AnimationTileData[], animationSpeed: number, backgroundColor: string) => {
		const tiles = animationsData.map((tileData: AnimationTileData) => (
			<AnimationTile key={tileData.number}
				imageURL={imageURL}
				animationData={tileData}
				animationSpeed={animationSpeed}
				backgroundColor={backgroundColor}/>
		));
		return tiles;
	};

	const toggleSettings = (state?: boolean) => {
		if(state !== undefined) {
			setShowSettingsPanel(state);
		} else {
			setShowSettingsPanel(!showSettingsPanel);
		}
	};

	const SettingsDefinitionProps: SettingsProps = {
		backgroundColor,
		setBackgroundColor,
		animationSpeed,
		setAnimationSpeed
	};

	const menuItems = <SpriteSheetPageSettingsDefinition {...SettingsDefinitionProps}/>;

	return(
		<PageTemplate>
			<StyledSpriteSheetPage>
				<StyledSpriteSheetContainer>
					<StyledAnimationsContainer>
						<StyledAnimationsContainerHeader>
							<StyledAnimationsContainerData>
								<LocationPath />
								<TitleContainer> {imageName}</TitleContainer>
							</StyledAnimationsContainerData>
							<AnimationsContainerSettings>
								<IconButton backgroundColor={[Colors.gray, Colors.lightGray]}
									iconColor={["#ffffff", "#d7d7d7"]}
									icon={faGear}
									onClick={toggleSettings}/>
								<AnimationTileSettingsMenu isShowing={showSettingsPanel}
									toggle={toggleSettings}
									items={menuItems}
								/>
							</AnimationsContainerSettings>
						</StyledAnimationsContainerHeader>
						<AnimationListContainer>
							{getAnimationTiles(animationsData, animationSpeed, backgroundColor)}
						</AnimationListContainer>
					</StyledAnimationsContainer>
					<SpriteSheetPreview imageURL={imageURL}/>
				</StyledSpriteSheetContainer>
			</StyledSpriteSheetPage>
		</PageTemplate>
	);
};
