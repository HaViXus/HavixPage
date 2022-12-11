import styled from "styled-components";


export const StyledTag = styled.div`
	display: flex;
	height: 2rem;
	justify-content: center;
	align-items: center;
	padding: 0.2rem 0.4rem;
	margin-right: 1rem;
	cursor: pointer;

	&:hover {
		color: red;
	}
`;

export const StyledLink = styled.a`
	display: flex;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-decoration: none;
		cursor: pointer;
	}
`;

