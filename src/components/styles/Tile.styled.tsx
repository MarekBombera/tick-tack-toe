import styled from 'styled-components';

export const TileContainer = styled.button`
	display: grid;
	place-items: center;
	width: 96px;
	height: 90px;
	outline: none;
	background: ${({ theme }): string => {
		return theme.tiles;
	}};
	border: none;
	border-radius: 10px;
	box-shadow: 0px 8px 0px 0px var(--shadow-dark);
	transition: box-shadow 0.3s ease-out;
	transition: all 0.1s;

	@media (min-width: 768px) {
		width: 140px;
		height: 134px;
		border-radius: 15px;
	}
	@media (min-width: 1920px) {
		width: 160px;
		height: 154px;
		border-radius: 15px;
	}

	&:hover {
		@media (min-width: 1368px) {
			box-shadow: 0px 7px 10px 4px var(--shadow-dark);
		}
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const Img = styled.img`
	width: 40px;
	margin-bottom: 2px;
	user-select: none;
	z-index: 2;

	@media (min-width: 768px) {
		width: 64px;
	}

	@media (min-width: 1920px) {
		width: 70px;
	}
`;
