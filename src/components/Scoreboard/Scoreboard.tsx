import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/';

import { ScoreboardStyled, Score } from '../styles/Scoreboard.styles';

export const Scoreboard = (): JSX.Element => {
	const { scoreReducer, gameModeReducer, pickedMarkReducer } = useSelector(
		(state: RootState) => state
	);
	const { x, o, ties } = scoreReducer;

	const pveP1ScoreText = (): string => {
		if (gameModeReducer === 'cpu' && pickedMarkReducer === false) {
			return 'X (CPU)';
		}
		return 'X (P1)';
	};

	const pveP2ScoreText = (): string | undefined => {
		if (pickedMarkReducer === true) return 'O (CPU)';
		if (pickedMarkReducer === false) return 'O (P2)';
	};

	const pvpP2ScoreText = (): string => {
		return 'O (P2)';
	};

	return (
		<ScoreboardStyled>
			<Score bg={'green-blue'} justifySelf={'flex-end'}>
				<p>{pveP1ScoreText()}</p>
				<h4>{x}</h4>
			</Score>
			<Score bg={'silver'} justifySelf={'center'}>
				<p>{'TIES'}</p>
				<h4>{ties}</h4>
			</Score>
			<Score bg={'yellow'} justifySelf={'flex-start'}>
				<p>{gameModeReducer === 'cpu' ? pveP2ScoreText() : pvpP2ScoreText()}</p>
				<h4>{o}</h4>
			</Score>
		</ScoreboardStyled>
	);
};
