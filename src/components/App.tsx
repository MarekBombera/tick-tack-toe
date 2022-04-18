import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/';
import { updateBoard } from '../actions';

import { StartMenu } from './StartMenu/StartMenu';
import { Header } from './Header/Header';
import { Board } from './Board/Board';
import { Scoreboard } from './Scoreboard/Scoreboard';

import { GlobalStyles } from './styles/Global';
import { StyledApp } from './styles/App.styled';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './styles/Theme.styled';

import { cpuLogic } from '../game-logic/cpuLogic';
import { dispatchChangeTurn } from '../utils/dispatchChangeTurn';

export const App = (): JSX.Element => {
	const {
		turnReducer,
		boardReducer,
		themeReducer,
		gameModeReducer,
		pickedMarkReducer,
		notClickableReducer,
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	const dispatchNextTurn = (board: {}): void => {
		dispatch(updateBoard(board));
		dispatchChangeTurn(turnReducer, dispatch);
	};

	useEffect(() => {
		if (gameModeReducer === 'cpu') {
			if (notClickableReducer) return;
			cpuLogic(turnReducer, pickedMarkReducer, boardReducer, dispatchNextTurn);
		}
	});

	return (
		<ThemeProvider theme={themeReducer === 'dark' ? themeDark : themeLight}>
			<GlobalStyles />
			<StyledApp>
				{gameModeReducer === 'menu' ? (
					<StartMenu />
				) : (
					[<Header />, <Board />, <Scoreboard />]
				)}
			</StyledApp>
		</ThemeProvider>
	);
};
