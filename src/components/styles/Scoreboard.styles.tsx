import styled from 'styled-components';

interface ScoreProps {
	justifySelf?: string;
	bg?: string;
}

export const ScoreboardStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	width: 100%;
	margin: 0 auto;
	gap: 0.5rem;
	opacity: 0;
	background: ${({ theme }): string => {
		return theme.background;
	}};
	animation: var(--show-boardUI-keyframe);
	transition: var(--themeSwitch-transition);

	@media (min-width: 768px) {
		width: 500px;
		padding: 0.5rem 0rem;
		gap: 0.25rem;
	}
	@media (min-width: 1920px) {
		width: 600px;
		gap: 0.75rem;
	}
`;

export const Score = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	justify-self: ${({ justifySelf }: ScoreProps) => justifySelf};
	width: 96px;
	height: 64px;
	background: var(--${({ bg }: ScoreProps) => bg});
	border-radius: 10px;

	@media (min-width: 768px) {
		width: 140px;
		height: 85px;
		padding: 0.5rem 0rem;
		border-radius: 15px;
	}

	@media (min-width: 1366px) {
		width: 140px;
		height: 75px;
	}

	@media (min-width: 1920px) {
		width: 160px;
		height: 75px;
	}

	p {
		margin: 0;
		font-size: 0.75rem;

		@media (min-width: 768px) {
			font-size: 0.8rem;
		}
		@media (min-width: 1920px) {
			font-size: 1rem;
		}
	}
	h4 {
		margin: 0;
		font-size: 1.25rem;

		@media (min-width: 768px) {
			font-size: 1.3rem;
		}
		@media (min-width: 1920px) {
			font-size: 1.5rem;
		}
	}
`;
