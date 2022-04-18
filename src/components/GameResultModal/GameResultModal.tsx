import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';

import { setGameMode, setWinner, setPickedMark } from '../../actions/';

import { resetBoard } from '../../utils/resetBoard';
import { resetScore } from '../../utils/resetScore';

import {
	ModalStyled,
	Overlay,
	QuitBtn,
	NextRoundBtn,
	Winner,
	Buttons,
	H3,
} from '../styles/GameResultModal.styled';

import icon_o from '../../assets/icon-o.svg';
import icon_x from '../../assets/icon-x.svg';

// X = true , O = false
export const GameResultModal = (): JSX.Element => {
	const { gameModeReducer, winnerReducer, pickedMarkReducer } = useSelector(
		(state: RootState) => state
	);

	const dispatch = useDispatch();

	const quitGame = (): void => {
		dispatch(setGameMode('menu'));
		dispatch(setWinner(''));
		dispatch(setPickedMark(true));
		resetBoard(dispatch);
		resetScore(dispatch);
	};

	const nextRound = (): void => {
		dispatch(setWinner(''));
		resetBoard(dispatch);
	};

	const showWinnerImg = (): string | undefined => {
		if (winnerReducer === 'x') return icon_x;
		if (winnerReducer === 'o') return icon_o;
	};

	const h3WinnerColor = (): string => {
		if (winnerReducer === 'x') return 'var(--green-blue)';
		if (winnerReducer === 'o') return 'var(--yellow)';
		return 'var(--silver)';
	};

	const showTextCPUX = (): string => {
		if (pickedMarkReducer) return 'you won!';
		return 'oh no, you lost...';
	};

	const showTextCPUO = (): string => {
		if (!pickedMarkReducer) return 'you won!';
		return 'oh no, you lost...';
	};

	const showWinnerText = (): string | undefined => {
		if (winnerReducer === 'x') {
			if (gameModeReducer === 'cpu') return showTextCPUX();
			return 'you won!';
		}
		if (winnerReducer === 'o') {
			if (gameModeReducer === 'cpu') return showTextCPUO();
			return 'you won!';
		}
	};
	const renderModal = (
		<>
			<Overlay />
			<ModalStyled>
				<h4>{winnerReducer !== 'tie' ? showWinnerText() : ''}</h4>
				<Winner>
					{winnerReducer !== 'tie' ? (
						<img src={showWinnerImg()} alt="" />
					) : null}

					<H3 h3WinnerColor={h3WinnerColor}>
						{winnerReducer !== 'tie' ? 'takes the round' : 'round tied'}
					</H3>
				</Winner>
				<Buttons>
					<QuitBtn onClick={() => quitGame()}>quit</QuitBtn>
					<NextRoundBtn onClick={() => nextRound()}>next round</NextRoundBtn>
				</Buttons>
			</ModalStyled>
		</>
	);
	return ReactDOM.createPortal(renderModal, document.getElementById('portal')!);
};
