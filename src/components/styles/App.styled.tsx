import styled from 'styled-components';

export const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	scroll-behavior: smooth;
	background: ${({ theme }): string => {
		return theme.background;
	}};
	transition: all 0.25s ease-out;
`;
