import styled from "styled-components";

export const StyledGameDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
`;

export const StyledGallery = styled.div`
	display: flex;
	height: 60vh;
	min-height: 60vh;
	width: 90%;
`;

export const StandardTextContainer = styled.div`
	display: flex;
	width: 90%;	
	margin: 1rem 10% 0rem 10%;
	padding-bottom: 2rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;

	${StandardTextContainer} {
		margin: 0;
		margin-top: 1rem;
		width: 100%;
	}
`;

export const DescriptionAndPlayContainer = styled.div`
	display: flex;
	width: 100%;
	margin-left: 10%;
	margin-top: 1rem;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
`;

export const PlayNowContainer = styled.div`
	display: flex;
	min-width: 60%;
`;

export const PlayNowTextContainer = styled.div`
	display: flex;
	margin: 1rem 2% 1rem 0%;
	white-space: nowrap;
`;

export const ButtonContainer = styled.div`
	display: flex;
	height: 100%:
	width: 100%;
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;	
	margin: 1rem 0;
`;

