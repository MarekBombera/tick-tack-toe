import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/';
import { setWinner } from '../../actions/';

import { Tile } from './Tile/Tile';
import { GameResultModal } from '../GameResultModal/GameResultModal';

import { checkForWin } from '../../game-logic/gameRules';
import { changeScore } from '../../utils/changeScore';

import { BoardContainer } from '../styles/Board.styled';

export const Board = (): JSX.Element => {
	const { boardReducer, scoreReducer, winnerReducer } = useSelector(
		(state: RootState) => state
	);
	const dispatch = useDispatch();

	const showGameResultModal = (): JSX.Element | null => {
		if (winnerReducer === '') return null;
		if (winnerReducer === 'x') return <GameResultModal />;
		return <GameResultModal />;
	};

	const handleWinGames = useCallback(
		(checkForWinner: string | undefined, mark: string) => {
			if (checkForWinner === mark) {
				dispatch(setWinner(mark));
				changeScore(mark, dispatch, scoreReducer);
			}
		},
		[dispatch, scoreReducer]
	);

	useEffect(() => {
		if (JSON.stringify(boardReducer).length < 78) return;
		if (winnerReducer !== '') return;

		const checkForWinner = checkForWin(boardReducer);
		handleWinGames(checkForWinner, 'x');
		handleWinGames(checkForWinner, 'o');
		handleWinGames(checkForWinner, 'tie');
	}, [boardReducer, handleWinGames, winnerReducer]);

	return (
		<>
			{showGameResultModal()}
			<BoardContainer>
				<Tile tileId={'aa'} />
				<Tile tileId={'ab'} />
				<Tile tileId={'ac'} />
				<Tile tileId={'ba'} />
				<Tile tileId={'bb'} />
				<Tile tileId={'bc'} />
				<Tile tileId={'ca'} />
				<Tile tileId={'cb'} />
				<Tile tileId={'cc'} />
			</BoardContainer>
		</>
	);
};
