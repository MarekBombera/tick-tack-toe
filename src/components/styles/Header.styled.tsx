import styled from 'styled-components';

interface LogoProps {
	justifySelf: string;
}

interface ToggleThemeProps {
	imgColor: string;
}

export const HeaderStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	width: 100%px;
	height: 90px;
	margin: 0 auto;
	padding: 1.75rem 2rem 2rem;
	opacity: 0;
	background: ${({ theme }): string => {
		return theme.background;
	}};
	animation: var(--show-boardUI-keyframe);
	transition: var(--themeSwitch-transition);

	@media (min-width: 768px) {
		width: 500px;
		padding: 1.75rem 2rem 0rem;
		margin-top: 3.5rem;
	}
	@media (min-width: 1920px) {
		width: 600px;
		margin-top: 1.5rem;
	}
`;

export const Img = styled.img``;

export const Logo = styled.div`
	display: flex;
	gap: 0.5rem;
	transition: all 0.75s ease-out;
	justify-self: ${({ justifySelf }: LogoProps): string => justifySelf};

	& img {
		width: 32px;
		user-select: none;

		@media (min-width: 1366px) {
			width: 38px;
		}

		@media (min-width: 1920px) {
			width: 44px;
		}
	}

	&:hover {
		@media (min-width: 1366px) {
			transform: rotateX(360deg) rotateY(6deg) rotateZ(0deg);
		}
	}
`;

export const Turn = styled.div`
	display: flex;
	justify-self: center;
	align-items: center;
	justify-content: center;
	padding: 0.55rem 0.75rem;
	gap: 0.5rem;
	background: ${({ theme }): string => {
		return theme.tiles;
	}};
	border-radius: 10px;
	box-shadow: 0px 4px 0px 0px var(--shadow-dark);

	@media (min-width: 768px) {
		gap: 0.7rem;
		padding: 0.9rem 1.9rem;
		border-radius: 12px;
	}

	@media (min-width: 1920px) {
		width: 160px;
		height: 58px;
		gap: 0.9rem;
		border-radius: 14px;
		box-shadow: inset 0px -6px 0px var(--shadow-dark);
	}

	p {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--silver);

		@media (min-width: 768px) {
			font-size: 1rem;
		}

		@media (min-width: 1920px) {
			font-size: 1.25rem;
			margin: 0 0 0.3rem;
		}
	}

	img {
		width: 16px;
		filter: brightness(0) saturate(100%) invert(78%) sepia(10%) saturate(428%) hue-rotate(153deg) brightness(95%) contrast(90%); Copy
		user-select: none;

		@media (min-width: 768px) {
			width: 20px;
		}
		@media (min-width: 1920px) {
			width: 25px;
			margin: 0 0 0.3rem;
		}
	}
`;

export const ToggleTheme = styled.button`
	display: grid;
	grid-column: 3 / -1;
	grid-row: 1/1;
	justify-self: flex-end;
	place-items: center;
	width: 40px;
	height: 36px;
	margin: 0 3.25rem 0 0;
	background: var(--silver);
	border: none;
	border-radius: 10px;
	box-shadow: 0px 4px 0px var(--shadow-silver);
	transition: all 0.1s;
	outline: none;

	@media (min-width: 768px) {
		width: 52px;
		height: 48px;
		margin: 0 4rem 0 0;
		border-radius: 12px;
	}
	@media (min-width: 1920px) {
		width: 59px;
		height: 54px;
		border-radius: 14px;
		margin: 0 4.5rem 0 0;
	}

	&:hover {
		@media (min-width: 1366px) {
			background: var(--silver-hover);
			box-shadow: 0px 4px 0px var(--shadow-silver-hover);
		}
	}

	&:active {
		transform: scale(0.9);
	}

	img {
		width: 15px;
		margin-bottom: 0px;
		user-select: none;
		filter: ${({ imgColor }: ToggleThemeProps): string => {
			return imgColor;
		}};

		@media (min-width: 768px) {
			width: 20px;
		}
		@media (min-width: 1366px) {
			width: 22px;
		}
		@media (min-width: 1920px) {
			width: 23px;
		}
	}
`;

export const Reset = styled.button`
	display: grid;
	grid-column: 3 / -1;
	grid-row: 1/1;
	justify-self: flex-end;
	place-items: center;
	width: 40px;
	height: 36px;
	background: var(--silver);
	border: none;
	border-radius: 10px;
	box-shadow: 0px 4px 0px var(--shadow-silver);
	transition: all 0.1s;
	outline: none;

	@media (min-width: 768px) {
		width: 52px;
		height: 48px;
	}

	@media (min-width: 1920px) {
		width: 59px;
		height: 54px;
		border-radius: 14px;
	}

	&:hover {
		@media (min-width: 1366px) {
			background: var(--silver-hover);
			box-shadow: 0px 4px 0px var(--shadow-silver-hover);
		}
	}

	&:active {
		transform: scale(0.9);
	}

	img {
		width: 15px;
		margin-bottom: 0px;
		user-select: none;

		@media (min-width: 768px) {
			width: 20px;
		}

		@media (min-width: 1920px) {
			width: 23px;
		}
	}
`;
