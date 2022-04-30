import styled from 'styled-components';

interface ButtonProps {
	color: string;
}

interface MarkProps {
	pickedMark: boolean;
}

export const StartMenuStyled = styled.div`
	position: absolute;
	display: grid;
	width: 100%;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (min-width: 768px) {
		top: 30%;
	}

	@media (min-width: 1366px) {
		top: 45%;
	}
`;

export const PickMarkerWrap = styled.div`
	display: grid;
	justify-self: center;
	justify-items: center;
	width: min(100%, 300px);
	margin: 2rem 0;
	padding: 1.5rem 1.5rem;
	gap: 1.5rem;
	background: var(--dark-green);
	border-radius: 10px;

	@media (min-width: 768px) {
		width: min(100%, 460px);
	}

	p,
	h4 {
		text-transform: uppercase;
		color: var(--silver);
		font-size: 0.875rem;

		@media (min-width: 768px) {
			font-size: 1rem;
		}
	}

	h4 {
		margin: 0;
		letter-spacing: 1px;
	}

	p {
		margin: 0;
		opacity: 0.5;
		letter-spacing: 0.875px;
	}
`;

export const PickMarker = styled.label`
	position: relative;
	width: 100%;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	top: -9999px;
	left: -9999px;

	&:checked + span {
		&:before {
			left: 50%;
		}
	}
`;

export const Slider = styled.span`
	position: relative;
	display: flex;
	cursor: pointer;
	width: 100%;
	padding: 0.5rem;
	border-radius: 10px;
	background: var(--background);

	&:before {
		content: '';
		position: absolute;
		top: 10%;
		left: 2%;
		width: 48%;
		height: 80%;
		border-radius: 10px;
		transition: background 0.15s ease-in-out, left 0.25s ease-in-out;
		background: var(--silver);
	}

	&:hover:before {
		@media (min-width: 1366px) {
			background: var(--silver-hover);
		}
	}
`;

export const Mark = styled.img`
	width: 36px;
	height: 36px;
	transition: all 0.25s;
	filter: ${({ pickedMark }: MarkProps): string => {
		return pickedMark ? 'var(--background-svg)' : 'var(--silver-svg)';
	}};
	user-select: none;
`;

export const MarkerX = styled.div`
	display: grid;
	place-items: center;
	padding: 0.7rem 0;
	width: 100%;
	border-radius: 10px;
	z-index: 5;
`;

export const MarkerO = styled.div`
	display: grid;
	place-items: center;
	padding: 0.7rem 0;
	width: 100%;
	border-radius: 10px;
`;

export const Button = styled.button`
	justify-self: center;
	width: min(100%, 300px);
	height: 56px;
	margin: 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 1px;
	color: #000000;
	background: ${({ color }: ButtonProps): string => {
		return color;
	}};
	border: none;
	border-radius: 15px;
	box-shadow: inset 0px -8px 0px 0px ${({ color }: ButtonProps): string => {
			return color === 'var(--yellow)'
				? 'var(--shadow-yellow)'
				: 'var(--shadow-green-blue)';
		}};
	transition: all 0.1s ease-out;

	@media (min-width: 768px) {
		width: min(100%, 460px);
		height: 65px;
		font-size: 1.1rem;
		letter-spacing: 1.15px;
	}

	&:hover {
		@media (min-width: 1366px) {
			cursor: pointer;
			background: ${({ color }: ButtonProps): string => {
				return color === 'var(--yellow)'
					? 'var(--yellow-light-hover)'
					: 'var(--green-blue-light-hover)';
			}};
			box-shadow: inset 0px -8px 0px 0px ${({ color }: ButtonProps): string => {
					return color === 'var(--yellow)'
						? 'rgb(207, 156, 59)'
						: 'var(--shadow-green-blue)';
				}};
		}
	}

	&:active {
		outline: none;
		transform: scale(0.95);
		box-shadow: inset 0px -10px 0px 0px ${({ color }: ButtonProps): string => {
				return color === 'var(--yellow)'
					? 'var(--shadow-yellow)'
					: 'var(--shadow-green-blue)';
			}};
	}
`;
