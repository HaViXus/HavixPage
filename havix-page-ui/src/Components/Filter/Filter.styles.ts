import styled from "styled-components";

export const StyledFilter = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 50%;
	margin-right: 3%;
	margin-bottom: 1rem;
	font-family: "PressStart" !important;

	span {
		color: white;
		font-family: "PressStart";
	}

	li {
		font-family: "PressStart";
	}

	input {
		font-family: "PressStart";
		color: white;
	}

	fieldset {
		border: none;
	}

	svg {
		color: white;
	}

	.nes-container.is-rounded {
		padding: 0.2rem;
	}
`;

export const StyledCloseIcon = styled.i`
	font-family: "PressStart";
	color: white;
`;

export const StyledSearchButton = styled.div`
	display: flex;
	height: calc(100% - 11px);
	max-height: 84px;
    margin-bottom: 7px;
	aspect-ratio: 1/1;
	color: white;
`;

export const StyledSearchIcon = styled.i`
	margin: 0;
`;
