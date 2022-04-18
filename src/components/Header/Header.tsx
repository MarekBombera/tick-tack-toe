import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/';
import { switchTheme } from '../../actions/';
import { resetGame } from '../../utils/resetGame';

import {
	HeaderStyled,
	Logo,
	Turn,
	Reset,
	Img,
	ToggleTheme,
} from '../styles/Header.styled';
import icon_o from '../../assets/icon-o.svg';
import icon_x from '../../assets/icon-x.svg';
import icon_reset from '../../assets/icon-restart.svg';
import icon_moon from '../../assets/icon-moon.svg';
import icon_sun from '../../assets/icon-sun.svg';

export const Header = (): JSX.Element => {
	const { turnReducer, themeReducer, winnerReducer } = useSelector(
		(state: RootState) => state
	);
	const dispatch = useDispatch();

	const handleSwitchTheme = (): void => {
		if (themeReducer === 'dark') {
			dispatch(switchTheme('light'));
			return;
		}
		dispatch(switchTheme('dark'));
	};

	useEffect(() => {
		if (winnerReducer === '') return;
	}, [winnerReducer, dispatch]);

	return (
		<HeaderStyled>
			<Logo justifySelf={'flex-start'}>
				<Img src={icon_x} alt="" />
				<Img src={icon_o} alt="" />
			</Logo>
			<Turn>
				<img src={turnReducer === 'x' ? icon_x : icon_o} alt="" />
				<p>TURN</p>
			</Turn>
			<ToggleTheme
				imgColor={
					themeReducer === 'dark'
						? 'var(--theme-sun-svg)'
						: 'var(--theme-moon-svg)'
				}
				onClick={() => handleSwitchTheme()}
			>
				<Img src={themeReducer === 'dark' ? icon_sun : icon_moon} alt="" />
			</ToggleTheme>
			<Reset onClick={() => resetGame(dispatch)}>
				<Img src={icon_reset} alt="" />
			</Reset>
		</HeaderStyled>
	);
};
