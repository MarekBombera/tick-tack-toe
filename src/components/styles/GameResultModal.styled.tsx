import styled from 'styled-components';

interface H3Props {
	h3WinnerColor: Function;
}

export const ModalStyled = styled.div`
	position: absolute;
	display: grid;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	padding: 2rem;
	background: var(--dark-green);
	border-radius: 8px;
	z-index: 999;

	@media (min-width: 1920px) {
		padding: 3rem;
	}

	h4 {
		grid-row: 1/1;
		justify-self: center;
		margin: 0;
		text-transform: uppercase;
		font-size: 0.875rem;
		color: var(--silver);

		@media (min-width: 1366px) {
			font-size: 1.25rem;
		}
	}

	img {
		width: 30px;

		@media (min-width: 1366px) {
			width: 60px;
		}
	}
`;

export const H3 = styled.h3`
	text-transform: uppercase;
	font-size: 1.5rem;
	color: var(--yellow);
	color: ${({ h3WinnerColor }: H3Props): string => h3WinnerColor()};

	@media (min-width: 1366px) {
		font-size: 2.5rem;
	}
`;

export const Winner = styled.div`
	display: flex;
	grid-row: 2/2;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	@media (min-width: 1366px) {
		gap: 2rem;
	}
`;

export const Buttons = styled.div`
	display: flex;
	grid-row: 3/3;
	justify-content: center;
`;

export const QuitBtn = styled.button`
	text-transform: uppercase;
	background: var(--silver);
	grid-row: 3/3;
	justify-self: center;
	margin: 0.5rem;
	padding: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 700;
	color: black;
	border: none;
	border-radius: 10px;
	box-shadow: inset 0px -4px 0px var(--shadow-silver);

	@media (min-width: 1366px) {
		padding: 1rem 1.5rem;
		font-size: 1.1rem;
	}

	&:active {
		outline: none;
	}
`;

export const NextRoundBtn = styled.button`
	text-transform: uppercase;
	background: var(--yellow);
	grid-row: 3/3;
	justify-self: center;
	margin: 0.5rem;
	padding: 0 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 700;
	color: black;
	border: none;
	border-radius: 10px;
	box-shadow: inset 0px -4px 0px var(--shadow-yellow);
	transition: all 0.05s ease-out;

	@media (min-width: 1366px) {
		padding: 1rem 1.5rem;
		font-size: 1.1rem;
	}

	&:active {
		outline: none;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 999;
`;
