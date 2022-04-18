import { updateScore } from '../actions';

type Score = {
	x: number;
	o: number;
	ties: number;
};

export const changeScore = (
	winner: string,
	dispatch: Function,
	scoreReducer: Score
): void => {
	const newScoreObject = { ...scoreReducer };
	switch (winner) {
		case 'x':
			newScoreObject.x = newScoreObject.x + 1;
			break;
		case 'o':
			newScoreObject.o = newScoreObject.o + 1;
			break;
		case 'tie':
			newScoreObject.ties = newScoreObject.ties + 1;
			break;
		default:
			return;
	}
	dispatch(updateScore(newScoreObject));
};
