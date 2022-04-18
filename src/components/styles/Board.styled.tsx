import styled from 'styled-components';

export const BoardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	justify-items: center;
	align-self: flex-start;
	width: 100%;
	margin: 0 auto;
	padding: 1.5rem 1rem;
	gap: 2rem 0rem;
	transform: scale(0);
	animation: var(--show-board-keyframe);
	background: ${({ theme }): string => {
		return theme.background;
	}};

	transition: var(--themeSwitch-transition);

	@media (min-width: 768px) {
		width: 500px;
	}

	@media (min-width: 1920px) {
		width: 600px;
	}
`;
