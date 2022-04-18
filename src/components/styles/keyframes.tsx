import { keyframes } from 'styled-components';

export const showBoard = keyframes`
	0% {
		transform: scale(0);
	}
	70% {
		transform: scale(1.1);
	}
	100%{
		transform: scale(1);
	}
`;

export const showBoardUI = keyframes`
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
`;
