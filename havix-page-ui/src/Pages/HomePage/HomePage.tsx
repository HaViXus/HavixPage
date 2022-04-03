import React, { useEffect, useState } from "react";
import { PageTemplate } from "../PageTemplate/PageTemplate";
import { ContentRow, HomePageContent, HomePageStyled } from "./HomePage.styles";
import { MainBoxButton } from "../../Components/MainBoxButton/MainBoxButton";
import { routerPaths } from "../../Components/Router/RouterPaths";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "../../Components/Router/Router.interfaces";
import { HomeCategory } from "./HomePage.interfaces";
import { getCategoriesData } from "./HomePage.adapters";


export const HomePage = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<HomeCategory[]>();

	const contentData: RouterKeys[] = [RouterKeys.GamesMenu, RouterKeys.PixelArts, RouterKeys.SpriteSheetsMenu, RouterKeys.BoxOfStuff];

	useEffect(() => {
		getCategoriesData(setCategories);
	}, []);

	const getMainTiles = (categoriesData: HomeCategory[]) => {
		const MainTiles = contentData.map((key: string, index: number) => {
			const tileTitle = routerPaths[key].nameToDisplay;
			const tilePath = routerPaths[key].path; 
			const onTileClick = () => navigate(tilePath);
			const categoriesBoxData = categoriesData?.[index];
			const imagePath = categoriesBoxData?.imagePath;
			const meanImageColor = categoriesBoxData?.meanImageColor;

			return (
				<MainBoxButton key={key}
					title={tileTitle}
					onClick={onTileClick}
					imagePath={imagePath}
					meanImageColor={meanImageColor}
				/>
			);
		});
		return MainTiles;
	};

	const getMainTilesRows = (categoriesData: HomeCategory[]) => {
		const MainTiles = getMainTiles(categoriesData);
		const rowSize = 2;
		const TilesRows = MainTiles.reduce((previous, tile, index) => {
			if(index % rowSize === 0) {
				const nextTile = MainTiles[index+1];
				const newRow = <ContentRow key={index}>{[tile, nextTile]}</ContentRow>;
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
					{getMainTilesRows(categories)}
				</HomePageContent>
			</HomePageStyled>
		</PageTemplate>
	);
};
