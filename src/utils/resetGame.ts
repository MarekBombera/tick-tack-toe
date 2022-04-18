import { resetBoard } from './resetBoard';
import { resetScore } from './resetScore';

export const resetGame = (dispatch: Function): void => {
	resetScore(dispatch);
	resetBoard(dispatch);
};
