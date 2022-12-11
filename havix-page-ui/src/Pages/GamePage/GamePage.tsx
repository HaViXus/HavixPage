import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationPath } from "../../Components/NavigationPath/NavigationPath";
import { TextHTML } from "../../Components/TextHTML/TextHTML";
import { Title } from "../../Components/Title/Title";
import { StyledContentContainer } from "../../Components/Utils/StyledContentContainer";
import { StyledBottomSpace } from "../BoxOfStuffContentPage/BoxOfStuffContentPage.styles";
import { getGameData } from "../GameDetailsPage/GameDetailsPage.adapters";
import { GameData } from "../GameDetailsPage/GameDetailsPage.interfaces";
import { Content, TitleWrapper, StandardTextContainer } from "../GameDetailsPage/GameDetailsPage.styles";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { GamePageProps } from "./GamePage.interfaces";
import { GameWindow, StyledGamePage } from "./GamePage.styles";

export const GamePage = (props: GamePageProps) => {
	const params = useParams();
	const gameName = params.id;

	const [gameData, setGameData] = useState<GameData>();

	useEffect(()=>{
		getGameData(gameName).then(response => {
			setGameData(response);
		});
	},[]);

	const gamesRepository = process.env.REACT_APP_ONLINE_GAME_REPOSITORY;
	const gameWindowPath = gameName ? `${gamesRepository}${gameName}/` : "";
	
	return (
		<PageTemplate>
			<StyledGamePage>
				<LocationPath />
				<Content>
					<TitleWrapper>
						<Title text={gameData?.name}/>
					</TitleWrapper>
					<GameWindow src={gameWindowPath} aspectRatio={gameData?.aspectRatio} allowFullScreen={true}/>
					<StyledContentContainer>
						<TitleWrapper>
							<Title text={"Controls"} size={2}/>
						</TitleWrapper>
						<StandardTextContainer>
							<TextHTML text={gameData?.controls}/>
						</StandardTextContainer>
						<TitleWrapper>
							<Title text={"Description"} size={2}/>
						</TitleWrapper>
						<StandardTextContainer>
							<TextHTML text={gameData?.fullDescription}/>
						</StandardTextContainer>
						<TitleWrapper>
							<Title text={"Requirements"} size={2}/>
						</TitleWrapper>
						<StandardTextContainer>
							<TextHTML text={gameData?.requirements}/>
						</StandardTextContainer>
						<StyledBottomSpace/>
					</StyledContentContainer>
					
				</Content>
			</StyledGamePage>
		</PageTemplate>
	);
};
