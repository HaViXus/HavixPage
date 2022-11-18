import styled from "styled-components";

export const StyledGallery = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
`;

export const StyledGalleryContent = styled.div`
	display: flex;
	width: 100%;
	height: 70%;
	flex-grow: 1;
`;

export const StyledGalleryListContainer = styled.div`
	display: flex;
	width: 100%;
	height: 30%;
`;

export const MoviePreviewIconContainer = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: 9vh;
`;

export const MoviePreviewImageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;

	&:hover{
		${MoviePreviewIconContainer}{
			 font-size: 12vh;
		}
	}
`;
