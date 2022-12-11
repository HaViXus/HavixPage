import { useLocation, useNavigate } from "react-router-dom";
import { routerPaths } from "../Router/RouterPaths";
import { StyledNavigationElement, StyledNavigationPath } from "./NavigationPath.styled";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocationPathProps } from "./NavigationPath.interfaces";

export const LocationPath = (props: LocationPathProps) => {
	const location = useLocation();
	const pathName = location.pathname;
	const splitedPathName = pathName.split("/").filter(pathNameFragment => !!pathNameFragment);

	const getAllLocationFragments = () => {
		const locationFragments = splitedPathName.reduce((previous, slicedValue, currentIndex) => {
			if(currentIndex > 0){
				const newPath = `${previous[currentIndex - 1]}/${slicedValue}`;
				return [...previous, newPath];
			} else {
				return [`/${slicedValue}`];
			}
			
		}, []);

		if(props.removeLastPart) {
			locationFragments.pop();
			splitedPathName.pop();
		}

		return locationFragments as string[];
	};

	const createHomeElement = () => {
		const element = <a href={"/"}> Home </a>;
		return (
			<>
				<StyledNavigationElement>
					{element}
				</StyledNavigationElement>
				<FontAwesomeIcon icon={faCaretRight}/>
			</>
		);
	};

	const createLocationElements = () => {
		const locationFragments = getAllLocationFragments();
		const locationElements = splitedPathName.map((location: string, index: number) => {
			const currentFragment = locationFragments[index];
			const isClickable = !!Object.values(routerPaths).find(routerPath => { 
				const routerPathEqual = routerPath.path === currentFragment;
				const isNotRoot = !routerPath.isRoot;

				return isNotRoot && routerPathEqual;
			});

			const element = isClickable ? <a href={currentFragment}> {location} </a> : <span>{location}</span>;
			const isLastElement = index === locationFragments.length - 1;
			return (
				<>
					<StyledNavigationElement>
						{element}
					</StyledNavigationElement>
					{!isLastElement && <FontAwesomeIcon icon={faCaretRight}/>}
				</>
			);
		});

		const HomeElement = createHomeElement();
		const finalElements = [HomeElement, ...locationElements];

		return finalElements;
	};

	return(
		<StyledNavigationPath>
			{createLocationElements()}
		</StyledNavigationPath>
	);
};
