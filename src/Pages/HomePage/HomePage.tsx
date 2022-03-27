import React from "react";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { ContentRow, HomePageContent, HomePageStyled } from "./HomePage.styles";
import { MainBoxButton } from "../../Components/MainBoxButton/MainBoxButton";
import { routerPaths } from "../../Components/Router/RouterPaths";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "../../Components/Router/Router.interfaces";


export const HomePage = () => {
	const navigate = useNavigate();

	const contentData: RouterKeys[] = [RouterKeys.GamesMenu, RouterKeys.PixelArts, RouterKeys.SpriteSheetsMenu, RouterKeys.BoxOfStuff];

	const getMainTiles = () => {
		const MainTiles = contentData.map((key: string, index: number) => {
			const tileTitle = routerPaths[key].nameToDisplay;
			const tilePath = routerPaths[key].path; 
			const onTileClick = () => navigate(tilePath);

			return (
				<MainBoxButton key={key} title={tileTitle} onClick={onTileClick} />
			);
		});
		return MainTiles;
	};

	const getMainTilesRows = () => {
		const MainTiles = getMainTiles();
		const rowSize = 2;
		const TilesRows = MainTiles.reduce((previous, tile, index) => {
			if(index % rowSize === 0) {
				const nextTile = MainTiles[index+1];
				const newRow = <ContentRow>{[tile, nextTile]}</ContentRow>;
				return([...previous, newRow]);
				
			} else{
				return(previous);
			}
		}, [] as JSX.Element[]);

		return TilesRows;
	};

	return(
		<PageTemplate>
			<HomePageStyled>
				<HomePageContent>
					{getMainTilesRows()}
				</HomePageContent>
			</HomePageStyled>
		</PageTemplate>
	);
};
