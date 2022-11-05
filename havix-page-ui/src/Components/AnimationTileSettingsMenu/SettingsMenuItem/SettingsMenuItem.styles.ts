import styled from "styled-components";

export const StyledSettingsMenuItem = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 0.4rem);
    padding: 0.6rem 0.2rem;
    border-bottom: 2px solid white;
`;

export const StyledBaseRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const StyledHalfOfBaseRow = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	align-items: center;
`;
